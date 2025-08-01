
import { GoogleGenAI, Chat } from "@google/genai";

// The API key is sourced from the `process.env.API_KEY` environment variable.
// This variable MUST be configured in the deployment environment (e.g., Vercel).
const apiKey = process.env.API_KEY;

// This check ensures the app fails fast during development or build if the key is missing.
if (!apiKey) {
  throw new Error("The API_KEY environment variable is not set. The application cannot initialize the AI service.");
}

const ai = new GoogleGenAI({ apiKey: apiKey });

export function createChatSession(systemInstruction: string): Chat {
  const chat = ai.chats.create({
    model: 'gemini-2.5-flash',
    config: {
      systemInstruction: systemInstruction,
      temperature: 0.7,
      topP: 0.9,
    },
  });
  return chat;
}