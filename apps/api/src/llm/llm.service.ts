import { Injectable, OnModuleInit } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { GoogleGenAI } from '@google/genai';

import { BaseMessage, HumanMessage } from '@langchain/core/messages';
import { ChatGoogleGenerativeAI } from '@langchain/google-genai'
import { Runnable } from '@langchain/core/runnables';
import { workflow } from './graph/graph'
import { ChatState } from './graph/state';

        
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
    return response.text
}


@Injectable()
export class LlmService implements OnModuleInit {
    private model: ChatGoogleGenerativeAI;
    private graph: Runnable<typeof ChatState.State>;
    
    constructor(private configService: ConfigService) {}

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

        console.log("here is the response in llm service")
        console.log("here is the response in llm service", response)
        const lastMessage = response.messages[response.messages.length - 1]; //the output is usually [humanMessage, AiMessage] so it will always return the ai messages dk about tool call doe
        return lastMessage.content as string;
    }
    

    

    getLm(): any {
        return mainLM(this.model, "Can you plan me a week trip in Bali?");
    }

    getGraphResponse(prompt: {userMessage: string}): any {
        // const response = fakeLM(this.aiAgent, prompt.userMessage)
        // return response
        // !!!!!!! importante add history to params as BaseMessage[]

        // const fullHistory = [...history, new HumanMessage(prompt)]
        const fullHistory = new HumanMessage(prompt.userMessage)

        return this.runGraph([fullHistory])
    }
}
