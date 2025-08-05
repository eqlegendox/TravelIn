import { Injectable } from '@nestjs/common';
import { GoogleGenAI } from '@google/genai';
import { ConfigService } from '@nestjs/config';

// async function mainLM () {
    //     const response = await ai.models.generateContentStream({
        //         model: "gemini-2.5-flash",
        //         contents: "Hello who are you?",
//         config: {
//             systemInstruction: "You are a travelIn ai agent helper, you will answer in representative of this bali-based travel-agent",
//             thinkingConfig: {
    //                 thinkingBudget: 0,
    //             },
    //         }
    //     });
    
    //     for await (const chunk of response) {
        //         console.log(chunk.text);
        //     }
        //     console.log(response.return);
        //     return response[-1].text;
    
        // }
        
async function mainLM(lm, prompt: string) {
    const response = await lm.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt,
        config: {
            systemInstruction: "You are a travelIn ai agent helper called Travy, you will answer as a representative of this travel-agent that is located in Bali",
            temperature: 0,
            thinkingConfig: {
                thinkingBudget: 0,
            },
        }
    });

    return response.text
}


@Injectable()
export class LlmService {
    private model: any;
    private API_KEY: any;
    private aiAgent: any;

    constructor(
        private configService: ConfigService,
    ) {
        this.API_KEY = this.configService.get<string>("GEMINI_API_KEY")
        this.model = new GoogleGenAI({apiKey: this.API_KEY});
    }
    

    getLm(): any {
        return mainLM(this.model, "Can you plan me a week trip in Bali?");
    }

    getLlmResponse(prompt: {userMessage: string}): any {
        const response = mainLM(this.model, prompt.userMessage)
        return response;
    }

    getLangGraph(prompt: {userMessage: string}): any {
        const response = this.aiAgent(prompt.userMessage)
        return response
    }
}
