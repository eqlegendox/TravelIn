import { Chat } from '@google/genai';
import { Injectable } from '@nestjs/common';
import e from 'express';
import { c } from 'framer-motion/dist/types.d-Bq-Qm38R';
import { stringify } from 'querystring';
import { isString } from 'util';

async function fetchLlmResponse(message: any) {
    const response = await fetch("http://localhost:8000/llm", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(message)
    });

    return response.text();
}

type ChatLists = {
        idChat: string,
        messages: {
            idMessage: number,
            userMessage?: string | null,
            aiMessage?: string | null,
        }[]
    }[]

@Injectable()
export class ChatsService {
    private chats : ChatLists = []
    
    findAll() {
        if (this.chats.length !== 0) {
            return this.chats
        }
        return {"error": "No conversation found"}
    }

    findOne(idChat: string) {
        const chat = this.chats.find(chat => chat.idChat === idChat)
        if (!chat) {
            return {"error": "Conversation not found"}
        }
        return chat
    }

    createChat(uuidv4: {uuid: string}) {
        const newChat = {
            idChat: uuidv4.uuid,
            messages: [{idMessage: 0, userMessage: ""}]
        }

        this.chats.push(newChat)
        return newChat
    }

    async createMessage(idChat: string, message: {userMessage: string}) {
        const chat = this.chats.find(chat => chat.idChat === idChat)
        const messages = chat?.messages


        if (messages) {
            const highestId = messages[messages.length - 1].idMessage
            const newMessage = {
                idMessage: highestId + 1,
                userMessage: message.userMessage
            }
            
            chat?.messages.push(newMessage)
            return newMessage
        }  else {
            return "Error: conversation not found"
        }
    }

    async createRespondMessage(idChat: string, message: {userMessage: string}) {
        const chat = this.chats.find(chat => chat.idChat === idChat)
        const messages = chat?.messages
        
        if (messages) {
            const aiRespond =  await fetchLlmResponse(message)
            const highestId = messages[messages.length - 1].idMessage

            const newAiMessage = { // Temporary respond system
                idMessage: highestId + 1,
                aiMessage: `${aiRespond}`
            }
            chat?.messages.push(newAiMessage)
            return newAiMessage
        }  else {
            return "Error: conversation not found"
        }
    }

    deleteChat(idChat: string) {
        const removedChat = this.findOne(idChat)

        this.chats = this.chats.filter(chat => chat.idChat !== idChat)

        return removedChat
    }
}
