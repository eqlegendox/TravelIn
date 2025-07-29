import { Injectable } from '@nestjs/common';
import { stringify } from 'querystring';

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
                    "userMessage": 'Hello John, how can I help you today?'
                },
                {
                    "idMessage": 3,
                    "userMessage": 'I would like to plan a trip...'
                },
                {
                    "idMessage": 4,
                    "userMessage": 'Sure, here is ...'
                }
            ]
        }
    ]

    findAll() {
        return this.chats
    }

    findOne(idChat: number) {
        const chat = this.chats.find(chat => chat.idChat === idChat)

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

    createMessage(idChat: number, message: string) {
        const chat = this.chats.find(chat => chat.idChat === idChat)
        const messages = chat?.messages
        if (messages) {
            const newMessage = {
                idMessage: messages?.length + 1,
                userMessage: message
            }
            chat?.messages.push(newMessage)
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
