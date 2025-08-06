import { ConfigService } from "@nestjs/config";
import { ChatGoogleGenerativeAI } from "@langchain/google-genai"
import { BaseMessage, AIMessage, HumanMessage } from "@langchain/core/messages"
import { StateGraph, Annotation, START, END, MemorySaver } from "@langchain/langgraph"

import * as dotenv from 'dotenv'
import { threadId } from "worker_threads";
dotenv.config({path: "C:/Users/Ananda_W297/Downloads/Intern/Project/Code/TravelIn/apps/api/.env"})

export function initApp (custKey? : string) {
    const APIKey: string = custKey || process.env.GEMINI_API_KEY || ''
    // console.log(APIKey)

    const model = new ChatGoogleGenerativeAI({
        model: "gemini-2.0-flash-001",
        temperature: 0,
        maxRetries: 2,
        apiKey: APIKey,
    })

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

// const APIKey: string = process.env.GEMINI_API_KEY || ''
// // console.log(APIKey)

// const model = new ChatGoogleGenerativeAI({
//     model: "gemini-2.0-flash-001",
//     temperature: 0,
//     maxRetries: 2,
//     apiKey: APIKey,
// })

// const Setatoru = Annotation.Root({
//     messages: Annotation<BaseMessage[]>({
//         reducer: (x, y) => x.concat(y),
//     }),
// });
// const memory = new MemorySaver()


// async function callModel (state: typeof Setatoru.State) {
//     const response = await model.invoke(state.messages);
//     return {messages: [response]};
// }

// const workflow = new StateGraph(Setatoru)
//     .addNode("llm", callModel)
//     .addEdge(START, "llm")
//     .addEdge("llm", END);

// const app = workflow.compile({checkpointer: memory})

// async function ask(mess: string) {
//     const res = await app.invoke({ messages: [new HumanMessage(mess)]}, {configurable: {thread_id: "42"}})
//     console.log(res.messages)
//     console.log(res.messages[0].content)
//     return res
// }

// const respond = ask("May i know how much free tier could do gemini api calling? and does it differ across model, which is the best price to performance ratio model with tool call available?")
// console.log("hahay: ", respond)

