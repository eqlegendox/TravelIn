import { StateGraph, START, END, StateGraphArgs } from "@langchain/langgraph";

interface AgentState {
    userMessage: string;
    aiMessage: string;
}