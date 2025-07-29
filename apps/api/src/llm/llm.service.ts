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
        
        async function mainLM(lm) {
            const response = await lm.models.generateContent({
                model: "gemini-2.5-flash",
                contents: "Hello who are you?",
                config: {
                    systemInstruction: "You are a travelIn ai agent helper, you will answer in representative of this bali-based travel-agent",
                    temperature: 0,
                    thinkingConfig: {
                        thinkingBudget: 0,
                    },
                }
            });
    // console.log(response.text);
    return response.text
}

@Injectable()
export class LlmService {
    constructor(
        private configService: ConfigService,
    ){}
    
    // still not the best practice since, this build the ai object over and over for each api call
    getLm(): any {
        const keyNya = this.configService.get<string>("GEMINI_API_KEY");
        const ai = new GoogleGenAI({apiKey: keyNya});
        return mainLM(ai);
    }
}
