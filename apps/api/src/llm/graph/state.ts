import { BaseMessage, BaseMessageLike } from "@langchain/core/messages";
import { Annotation, messagesStateReducer } from "@langchain/langgraph";

export const ChatState = Annotation.Root({
    messages: Annotation<BaseMessage[], BaseMessageLike[]>({
        reducer: messagesStateReducer,
        default: () => [],
    }),
    // other attr
});