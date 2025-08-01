import { StateGraph, START, END, StateGraphArgs } from "@langchain/langgraph";

interface AgentState {
    userMessage: string;
    aiMessage: string;
}

// const graphStateChannels: StateGraphArgs<AgentState>["channels"] = {
//     userMessage: {
//         value: (prevMessage: [string], newUserMessage: string) => prevMessage.concat(newUserMessage)
//     }
// }