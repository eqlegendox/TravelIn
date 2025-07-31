import { Injectable } from '@nestjs/common';
import e from 'express';
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

@Injectable()
export class ChatsService {
    private chats = [
        {
            "idChat": "abc", // might need to add id user as an attribute
            "messages": [
                {
                    "idMessage": 1,
                    "userMessage": 'Hello, saya John'
                },
                {
                    "idMessage": 2,
                    "aiMessage": 'Hello John, how can I help you today?'
                },
                {
                    "idMessage": 3,
                    "userMessage": 'I would like to plan a trip...'
                },
                {
                    "idMessage": 4,
                    "aiMessage": 'Sure, here is ...'
                }
            ]
        },
        {
            "idChat": "cda", // might need to add id user as an attribute
            "messages": [
                {
                    "idMessage": 1,
                    "userMessage": 'Hello, saya Dianaaaa'
                },
                {
                    "idMessage": 2,
                    "aiMessage": 'Hello Dian, how can I help you today?'
                },
            ]
        }
    ]

    
    findAll() {
        return this.chats
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
            return "Error: please contact the devs"
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
            return "Error: please contact the devs"
        }
    }

    deleteChat(idChat: string) {
        const removedChat = this.findOne(idChat)

        this.chats = this.chats.filter(chat => chat.idChat !== idChat)

        return removedChat
    }
}
