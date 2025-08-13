import { Injectable, OnModuleInit } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { GoogleGenAI } from '@google/genai';

import { BaseMessage, HumanMessage } from '@langchain/core/messages';
import { ChatGoogleGenerativeAI } from '@langchain/google-genai'
import { Runnable } from '@langchain/core/runnables';
import { workflow } from './graph/graph'
import { ChatState } from './graph/state';
import { Run } from '@langchain/core/dist/tracers/base';

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
            systemInstruction: "You are a travelIn ai agent helper called Travy, you will answer as a representative of this travel-agent that is located in Bali.",
            temperature: 0,
            thinkingConfig: {
                thinkingBudget: 0,
            },
        }
    });

    // const response = await lm.invoke(prompt)
    // console.log(response)
    return response.text
}

async function fakeLM(lm, prompt: string) {
    const response = await lm.invoke({messages: prompt})
    console.log(response)

    return response.text
}


@Injectable()
export class LlmService implements OnModuleInit {
    // private model: any;
    // private API_KEY: any;
    // private aiAgent: any;
    private model: ChatGoogleGenerativeAI;
    private graph: Runnable<typeof ChatState.State>;
    
    constructor(private configService: ConfigService) {
    // this.API_KEY = this.configService.get<string>("GEMINI_API_KEY")
        // this.model = new GoogleGenAI({apiKey: this.API_KEY});
        // this.aiAgent = Graph
    }

    onModuleInit() {
        const APIKey = this.configService.get<string>('GEMINI_API_KEY')
        if (!APIKey) {
            throw new Error('GEMINI_API_KEY is not configured in your .env file!');
        }

        this.model = new ChatGoogleGenerativeAI({
            model: "gemini-2.0-flash-001",
            temperature: 0.1,
            maxRetries: 2,
            apiKey: APIKey,
        });

        this.graph = workflow.compile();
    }

    private async runGraph(
        // systemPrompt: string,
        history: BaseMessage[],
    ):Promise<string> {
        const response = await this.graph.invoke(
            {messages: history},
            {configurable: {model: this.model}}
        );

        const lastMessage = response.messages[response.messages.length - 1];
        return lastMessage.content as string;
    }
    

    

    getLm(): any {
        return mainLM(this.model, "Can you plan me a week trip in Bali?");
    }

    getLlmResponse(prompt: {userMessage: string}): any {
        const response = mainLM(this.model, prompt.userMessage)
        return response;
    }

    getLangGraph(prompt: {userMessage: string}): any {
        // const response = fakeLM(this.aiAgent, prompt.userMessage)
        // return response
        // !!!!!!! importante add history to params as BaseMessage[]

        // const fullHistory = [...history, new HumanMessage(prompt)]
        const fullHistory = new HumanMessage(prompt.userMessage)

        return this.runGraph([fullHistory])
    }
}
