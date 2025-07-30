import { ConfigService } from "@nestjs/config";
import { ChatOpenAI, messageToOpenAIRole } from "@langchain/openai"
import { BaseMessage, AIMessage } from "@langchain/core/messages"
import { StateGraph, Annotation, START, END, MemorySaver } from "@langchain/langgraph"

import * as dotenv from 'dotenv'
dotenv.config({path: "C:/Users/Ananda_W297/Downloads/Intern/Project/Code/TravelIn/apps/api/.env"})

export function initApp (custKey? : string) {
    const APIKey: string = custKey || process.env.GEMINI_API_KEY || ''
    // console.log(APIKey)

    const model = new ChatOpenAI({
        apiKey: APIKey,
        configuration: ({
            baseURL: 'https://generativelanguage.googleapis.com/v1beta/openai/'
        }),
    });

    const Setatoru = Annotation.Root({
        messages: Annotation<BaseMessage[]>({
            reducer: (x, y) => x.concat(y),
        }),
    });
    const memory = new MemorySaver()


    async function callModel (state: typeof Setatoru.State) {
        const response = await model.invoke(state.messages);
        return {messages: [response]};
    }

    const workflow = new StateGraph(Setatoru)
        .addNode("llm", callModel)
        .addEdge(START, "llm")
        .addEdge("llm", END);

    return workflow.compile({
        checkpointer: memory,
    });
}



