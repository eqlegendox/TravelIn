// import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
// import * as dotenv from 'dotenv'

// dotenv.config({path: "C:/Users/Ananda_W297/Downloads/Intern/Project/Code/TravelIn/apps/api/.env"})

// export async function LoadChatModel (custKey?: string) {
//     const APIKey = custKey || process.env.GEMINI_API_KEY

//     return await new ChatGoogleGenerativeAI({
//         model: "gemini-2.0-flash-001",
//         temperature: 0.1,
//         maxRetries: 2,
//         apiKey: APIKey,
//     })
// }