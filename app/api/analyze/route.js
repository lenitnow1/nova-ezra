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
      You are an expert career consultant and ATS (Applicant Tracking System) specialist.
      Analyze the following resume text and provide a detailed report in JSON format.
      
      The JSON should have the following structure:
      {
        "atsScore": number (0-100),
        "experienceDepth": number (0-10),
        "skillDensity": number (0-100),
        "recruiterIndex": number (0-100),
        "swot": {
          "strengths": [string],
          "weaknesses": [string]
        },
        "topSkills": [
          { "name": string, "level": number (0-100) }
        ],
        "sections": {
          "Summary": [
            { "id": "s1", "impact": "High" | "Medium" | "Low", "original": string, "suggested": string }
          ],
          "Experience": [
            { "id": "e1", "impact": "Critical" | "High" | "Medium", "original": string, "suggested": string }
          ],
          "Skills": [
            { "id": "sk1", "impact": "High" | "Medium", "original": string, "suggested": string }
          ],
          "Education": [
             { "id": "ed1", "impact": "Medium", "original": string, "suggested": string }
          ]
        }
      }

      Focus on semantic relevance, metric-driven bullet points for experience, and keyword optimization.
      Resume text:
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
