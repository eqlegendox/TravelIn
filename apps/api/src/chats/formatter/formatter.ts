import { ChatMessages } from 'database/generated/prisma';
import { AIMessage, HumanMessage, BaseMessage } from '@langchain/core/messages';

export function formatHistory(dbMessage: ChatMessages[]): BaseMessage[] {
    
    const realHistory = [...dbMessage].reverse();

    const formattedHistory = realHistory.map((msg) => {
        if (msg.messageRoleId === 2) {
            return new HumanMessage(msg.message)
        } else if (msg.messageRoleId === 3) {
            return new AIMessage(msg.message)
        }
        
        return null
    }).filter((msg): msg is BaseMessage => msg !== null);
    
    return formattedHistory;
}
