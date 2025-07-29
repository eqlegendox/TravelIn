import { Injectable } from '@nestjs/common';
import e from 'express';
import { stringify } from 'querystring';
import { isString } from 'util';

@Injectable()
export class ChatsService {
    private chats = [
        {
            "idChat": 1, // might need to add id user as an attribute
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
            "idChat": 2, // might need to add id user as an attribute
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

    findOne(idChat: number) {
        const chat = this.chats.find(chat => chat.idChat === idChat)
        if (!chat) {
            return {"error": "Conversation not found"}
        }
        return chat
    }

    createChat() {
        const newChat = {
            idChat: this.chats.length + 1,
            messages: [{idMessage: 0, userMessage: ""}]
        }

        this.chats.push(newChat)
        return newChat
    }

    createMessage(idChat: number, message: {userMessage: string}) {
        const chat = this.chats.find(chat => chat.idChat === idChat)
        const messages = chat?.messages

        if (typeof message.userMessage !== "string") {
            return {"error":"Invalid input", "type": typeof message.userMessage}
        }   
        else if (message.userMessage === "") {
            return {"error":"Input cannot be empty!"}
        }

        if (messages) {
            const newMessage = {
                idMessage: messages?.length + 1,
                userMessage: message.userMessage
            }
            const newAiMessage = { // Temporary respond system
                idMessage: messages?.length + 1,
                aiMessage: "Beep Boop Beep Boop"
            }
            chat?.messages.push(newMessage, newAiMessage)
            return newMessage
        }  else {
            return "Error: please contact the devs"
        }
    }

    deleteChat(idChat: number) {
        const removedChat = this.findOne(idChat)

        this.chats = this.chats.filter(chat => chat.idChat !== idChat)

        return removedChat
    }
}
