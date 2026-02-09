import { OpenAI } from 'openai';
import { NextResponse } from 'next/server';

// OpenRouter client
const openai = new OpenAI({
  apiKey: process.env.OPENROUTER_API_KEY,
  baseURL: 'https://openrouter.ai/api/v1',
});

// Default model (free-friendly)
const MODEL = process.env.AI_MODEL || 'mistralai/mistral-7b-instruct';

// Helper: clean markdown fences
function extractJSON(text) {
  if (!text) return null;
  const cleaned = text
    .replace(/^```json\s*/i, '')
    .replace(/^```\s*/i, '')
    .replace(/```$/i, '')
    .trim();
  return cleaned;
}

export async function POST(req) {
  try {
    if (!process.env.OPENROUTER_API_KEY) {
      return NextResponse.json(
        { error: 'OpenRouter API key not configured' },
        { status: 500 }
      );
    }

    const { text, action, context } = await req.json();

    if (!text && action !== 'evaluate') {
      return NextResponse.json(
        { error: 'No content provided' },
        { status: 400 }
      );
    }

    let systemPrompt = '';
    let userPrompt = '';

    switch (action) {
      case 'analyze':
        systemPrompt = `
You are a senior learning-science product designer.
Analyze the document into sections and concepts.
Output ONLY valid JSON. No markdown. No commentary.
`;
        userPrompt = `
Document:
${text}

Return JSON:
{
  "title": "Document Title",
  "sections": [
    {
      "id": "s1",
      "title": "Section Title",
      "concepts": [
        {
          "id": "c1",
          "name": "Concept Name",
          "description": "Short description",
          "dependencies": []
        }
      ]
    }
  ]
}
`;
        break;

      case 'generate-lesson':
        if (!context?.documentText || !context?.conceptName) {
          return NextResponse.json(
            { error: 'Missing context for generate-lesson' },
            { status: 400 }
          );
        }
        systemPrompt = `
You are a learning-science product designer.
Teach using Explain → Ask.
Output ONLY valid JSON.
`;
        userPrompt = `
Document Context:
${context.documentText}

Target Concept:
${context.conceptName}

Return JSON:
{
  "explanation": "Markdown explanation",
  "question": "Comprehension question",
  "correctAnswerHint": "What a good answer includes"
}
`;
        break;

      case 'evaluate':
        if (!context?.question || !context?.userAnswer || !context?.explanation) {
          return NextResponse.json(
            { error: 'Missing context for evaluate' },
            { status: 400 }
          );
        }
        systemPrompt = `
You are a learning-science expert.
Evaluate the user's answer.
Output ONLY valid JSON.
`;
        userPrompt = `
Question:
${context.question}

User Answer:
${context.userAnswer}

Explanation Context:
${context.explanation}

Return JSON:
{
  "status": "correct" | "incorrect" | "partial",
  "feedback": "Feedback text",
  "isPassed": true
}
`;
        break;

      default:
        return NextResponse.json(
          { error: 'Invalid action' },
          { status: 400 }
        );
    }

    // Send request to AI
    const response = await openai.chat.completions.create({
      model: MODEL,
      messages: [
        { role: 'system', content: 'Return ONLY raw JSON. Do NOT wrap in markdown.' },
        { role: 'system', content: systemPrompt },
        { role: 'user', content: userPrompt },
      ],
      temperature: 0.2,
    });

    const raw = response.choices[0]?.message?.content || '';
    const cleaned = extractJSON(raw);

    if (!cleaned) {
      console.error('AI returned empty response:', raw);
      return NextResponse.json(
        { error: 'AI returned empty response', raw: raw.slice(0, 500) },
        { status: 500 }
      );
    }

    let parsed;
    try {
      parsed = JSON.parse(cleaned);
    } catch (err) {
      console.error('JSON parse failed. Raw output:', raw);
      return NextResponse.json(
        { error: 'AI returned invalid JSON', raw: raw.slice(0, 500) },
        { status: 500 }
      );
    }

    return NextResponse.json(parsed);
  } catch (error) {
    console.error('Learning API Error:', error);
    return NextResponse.json(
      { error: 'Failed to process request', details: error.message },
      { status: 500 }
    );
  }
}
