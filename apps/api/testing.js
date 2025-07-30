const path = "apps/api/.env"

require('dotenv').config({path: path})
console.log(process.env.GEMINI_API_KEY)

import { GoogleGenAI } from "@google/genai";

// Access your API key (securely, e.g., from environment variables)
const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

const ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY });

async function runGemini() {
  const model = ai.getGenerativeModel({ model: "gemini-2.5-flash" }); // Or "gemini-pro" for more capabilities

  const prompt = "Explain how AI works in a few words.";

  try {
    const result = await model.generateContent(prompt);
    const response = result.response;
    const text = response.text();
    console.log(text);
  } catch (error) {
    console.error("Error generating content:", error);
  }
}

runGemini();