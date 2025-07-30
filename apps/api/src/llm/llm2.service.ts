// import { Injectable } from '@nestjs/common';
// import { GoogleGenAI } from '@google/genai';
// import { ConfigService } from '@nestjs/config';
// import { HumanMessage } from '@langchain/core/messages';
// import { threadId } from 'worker_threads';
// import { promises } from 'dns';
// import { initApp } from './llm';

// async function mainLM(lm) {
//     const response = await lm.models.generateContent({
//         model: "gemini-2.5-flash",
//         contents: "Hello who are you?",
//         config: {
//             systemInstruction: "You are a travelIn ai agent helper, you will answer in representative of this bali-based travel-agent",
//             temperature: 0,
//             thinkingConfig: {
//                 thinkingBudget: 0,
//             },
//         }
//     });
//     // console.log(response.text);
//     return response.text
// }

// @Injectable()
// export class LlmService {
//     private llm = initApp()

//     async getLm(inpStr: string): Promise<any> {
//         const inputMessage = new HumanMessage(inpStr)
//         const config = { configurable: { thread_id: "2"}, streamMode: "values" as const }
//         const result = await this.llm.invoke([inputMessage])

//         return result.messages[result.messages.length - 1].content;
//     }

//     // const llm = app
// }
