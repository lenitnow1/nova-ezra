import { OpenAI } from 'openai';
import { NextResponse } from 'next/server';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req) {
  try {
    if (!process.env.OPENAI_API_KEY) {
      return NextResponse.json({ error: 'OpenAI API key not configured' }, { status: 500 });
    }

    const { text } = await req.json();

    if (!text) {
      return NextResponse.json({ error: 'No text provided for analysis' }, { status: 400 });
    }

const prompt = `
You are a friendly and intelligent teacher helping a student understand difficult text in the simplest way possible.

The student may upload notes, articles, essays, PDFs, research papers, textbooks, or any type of written content they do not understand.

Your job is to:
- Break down difficult ideas into simple explanations.
- Explain concepts like a real teacher talking to a student.
- Use easy language and relatable examples.
- Summarize important points clearly.
- Identify confusing terms and explain them simply.
- Make the student feel like they are learning, not just reading AI output.

Provide the response in JSON format.

The JSON should follow this exact structure:
{
  "title": string,
  
  "summary": string,

  "mainIdeas": [
    {
      "topic": string,
      "simpleExplanation": string,
      "example": string
    }
  ],

  "difficultWords": [
    {
      "word": string,
      "meaning": string,
      "simpleMeaning": string
    }
  ],

  "importantPoints": [string],

  "studentFriendlyNotes": [
    {
      "section": string,
      "notes": string
    }
  ],

  "quiz": [
    {
      "question": string,
      "answer": string
    }
  ]
}

Guidelines:
- Teach like a patient tutor.
- Keep explanations simple and natural.
- Avoid overly academic language unless necessary.
- Use short explanations before detailed ones.
- If the text is complex, simplify it step by step.
- Focus on helping the student truly understand the material.

Text to explain:
${text}
`;



    const response = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        { role: 'system', content: 'You are a helpful assistant that outputs JSON.' },
        { role: 'user', content: prompt }
      ],
      response_format: { type: 'json_object' },
    });

    const analysis = JSON.parse(response.choices[0].message.content);
    return NextResponse.json(analysis);

  } catch (error) {
    console.error('Analysis API Error:', error);
    return NextResponse.json({ error: 'Failed to analyze resume' }, { status: 500 });
  }
}
