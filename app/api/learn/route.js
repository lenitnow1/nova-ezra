import { OpenAI } from 'openai'
import { NextResponse } from 'next/server'

const openai = new OpenAI({
  apiKey: process.env.OPENROUTER_API_KEY,
  baseURL: 'https://openrouter.ai/api/v1'
})

const MODEL = process.env.AI_MODEL || 'openai/gpt-4o-mini';

function safeParse(text) {
  try {
    return JSON.parse(text)
  } catch {
    const match = text.match(/\{[\s\S]*\}/)
    if (!match) return null
    return JSON.parse(match[0])
  }
}

export async function POST(req) {
  try {
    const body = await req.json()
    const { text, action, context } = body

    let systemPrompt = ''
    let userPrompt = ''

    if (action === 'analyze') {
      systemPrompt = `Return ONLY valid JSON. No markdown.`
      userPrompt = `Analyze this:\n${text}

Return:
{
  "sections": [
    {
      "id": "s1",
      "title": "Title",
      "concepts": [
        {
          "id": "c1",
          "name": "Concept",
          "description": "Desc"
        }
      ]
    }
  ]
}`
    }

    if (action === 'generate-lesson') {
      systemPrompt = `Return ONLY JSON.`
      userPrompt = `Document:
${context.documentText}

Concept:
${context.conceptName}

Return:
{
  "explanation": "text",
  "question": "question"
}`
    }

    if (action === 'evaluate') {
      systemPrompt = `Return ONLY valid JSON. No markdown.`
      userPrompt = `Question: ${context.question}
Student answer: ${context.userAnswer}
Reference explanation: ${context.explanation}

Return:
{
  "isPassed": true,
  "status": "Mastered" or "Keep studying",
  "feedback": "Brief, encouraging feedback"
}`
    }

    const res = await openai.chat.completions.create({
      model: MODEL,
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: userPrompt }
      ],
      temperature: 0.2
    })

    const raw = res.choices[0]?.message?.content || ''
    const parsed = safeParse(raw)

    if (!parsed) {
      return NextResponse.json(
        { error: 'Invalid AI response', raw },
        { status: 500 }
      )
    }

    return NextResponse.json(parsed)

  } catch (err) {
    return NextResponse.json(
      { error: err.message },
      { status: 500 }
    )
  }
}