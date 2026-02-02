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

    const { text, action, context } = await req.json();

    if (!text && action !== 'evaluate') {
      return NextResponse.json({ error: 'No content provided' }, { status: 400 });
    }

    let systemPrompt = '';
    let userPrompt = '';

    switch (action) {
      case 'analyze':
        systemPrompt = `You are a senior learning-science product designer. 
        Analyze the provided document text and structure it into logical sections and key concepts.
        Extract dependencies between concepts to form a prerequisite-based learning path.
        Output MUST be a JSON object.`;
        
        userPrompt = `Analyze this document:
        ${text}
        
        Return JSON structure:
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
                  "dependencies": [] // IDs of prerequisite concepts
                }
              ]
            }
          ]
        }`;
        break;

      case 'generate-lesson':
        systemPrompt = `You are a senior full-stack engineer and learning-science product designer.
        Generate a lesson for a specific concept based on document context.
        Follow the structured teaching loop: Explain → Ask.
        Keep explanations clear, simple, and concise. Avoid long monologues.
        Output MUST be a JSON object.`;
        
        userPrompt = `Document Context: ${context.documentText}
        Target Concept: ${context.conceptName}
        
        Return JSON structure:
        {
          "explanation": "Markdown formatted explanation",
          "question": "Comprehension question based on the explanation",
          "correctAnswerHint": "Brief hint of what a correct answer looks like"
        }`;
        break;

      case 'evaluate':
        systemPrompt = `You are a learning-science expert. 
        Evaluate the user's answer to a comprehension question.
        Provide feedback: Correct, Incorrect, or Partially Correct.
        Be encouraging but instructional.
        Output MUST be a JSON object.`;
        
        userPrompt = `Question: ${context.question}
        User Answer: ${context.userAnswer}
        Context: ${context.explanation}
        
        Return JSON structure:
        {
          "status": "correct" | "incorrect" | "partial",
          "feedback": "Instructional feedback",
          "isPassed": boolean
        }`;
        break;

      default:
        return NextResponse.json({ error: 'Invalid action' }, { status: 400 });
    }

    const response = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        { role: 'system', content: 'You are a helpful assistant that outputs JSON.' },
        { role: 'system', content: systemPrompt },
        { role: 'user', content: userPrompt }
      ],
      response_format: { type: 'json_object' },
    });

    const result = JSON.parse(response.choices[0].message.content);
    return NextResponse.json(result);

  } catch (error) {
    console.error('Learning API Error:', error);
    return NextResponse.json({ error: 'Failed to process request' }, { status: 500 });
  }
}
