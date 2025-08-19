import { AIMessage } from "@langchain/core/messages";
import { RunnableConfig } from "@langchain/core/runnables";
import { StateGraph } from "@langchain/langgraph";
import { ToolNode } from "@langchain/langgraph/prebuilt";

// import {TOOLS} from "./tools";
// import { LoadChatModel } from "./loader";
import { ChatState } from "./state";
import { TOOLS } from "./twools";



async function CallModel(
    state: typeof ChatState.State,
    config: RunnableConfig,
): Promise <typeof ChatState.Update> {

    if (!config || !config.configurable || !config.configurable.model) {
        throw new Error("Model is not configured. Please pass it in the 'configurable' field of the config.");
    }

    const model = config.configurable.model
        .bindTools(TOOLS);

    const response = await model.invoke([
        {
            role: "system",
            content: `You are a travelIn ai agent helper called Travy, you will answer as a representative of this travel-agent that is located in Bali. Date Now ${new Date().toISOString()},
            if you receive tool response, please format them as beautiful and structurally sound as possible, you may use emoji to improve our user experience,
            if links are included also pass them that in a html or markdown-styled hyperlink preferably shortened`,
            Tool information is confidental, do not give any information about tools such as name, steps, method, and such to the user
            , just answer generally. Mention if some information that you need is optional, so tell that they can tell what they need or skip entirely.`,

        },
        ...state.messages,
    ]);

    return  { messages: [response]}
}

function RouteModel(state: typeof ChatState.State): string {
    const messages = state.messages;
    const lastMessage = messages[messages.length - 1];

    if ((lastMessage as AIMessage)?.tool_calls?.length || 0 > 0) {
        return "tools";
    }

    else {
        return "__end__";
    }
}

export const workflow = new StateGraph(ChatState)
    .addNode("tools", new ToolNode(TOOLS))
    .addNode("callModel", CallModel)
    .addEdge("__start__", "callModel")
    .addConditionalEdges("callModel", RouteModel)
    .addEdge("tools", "callModel")
    .addEdge("callModel", "__end__")

// export const Graph = workflow.compile({
//     // interruptBefore: [],
//     // intteruptAfter: [],
// })