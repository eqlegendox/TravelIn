import { Chat } from '@google/genai';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import e from 'express';
import { c } from 'framer-motion/dist/types.d-Bq-Qm38R';
import { stringify } from 'querystring';
import { throwError } from 'rxjs';
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
        messages?: {
            idMessage: number,
            userMessage?: string,
            aiMessage?: string,
        }[]
    }[]

@Injectable()
export class ChatsService {
    private chats : ChatLists = []
    
    findAll() {
        if (this.chats.length === 0) {
            throw new HttpException('Not Found', HttpStatus.NOT_FOUND)
        }
        return this.chats
    }

    findOne(idChat: string) {
        const chat = this.chats.find(chat => chat.idChat === idChat)
        if (!chat) {
            throw new HttpException('Chat Not Found', HttpStatus.NOT_FOUND)
        }
        return chat
    }

    createChat(uuidv4: {uuid: string}) {
        try {
            const newChat = {
                idChat: uuidv4.uuid,
            }

            this.chats.push(newChat)
            return newChat
        }
        catch (err) {
            throw new HttpException('CC Error', HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }

    async createMessage(idChat: string, message: {userMessage: string}) {
        const chat = this.findOne(idChat)
        const messages = chat?.messages? chat.messages : chat.messages = []

        try {
            if (messages) {
                const highestId =  messages[messages.length - 1]? messages[messages.length - 1].idMessage + 1 : 1
                const newMessage = {
                    idMessage: highestId,
                    userMessage: message.userMessage
                }
                
                chat?.messages?  chat.messages.push(newMessage) : chat.messages = [newMessage]
                return newMessage
            }  else {
                throw new HttpException('Conversation Not Found', HttpStatus.NOT_FOUND)
            }
        }
        catch (err) {
            throw new HttpException('CM Error', HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }

    async createRespondMessage(idChat: string, message: {userMessage: string}) {
        const chat = this.findOne(idChat)
        const messages = chat?.messages? chat.messages : chat.messages = []
        
        try {
            if (messages) {
                const aiRespond =  await fetchLlmResponse(message)
                const highestId = messages[messages.length - 1]? messages[messages.length - 1].idMessage + 1 : 1
    
                const newAiMessage = {
                    idMessage: highestId,
                    aiMessage: `${aiRespond}`
                }
                chat?.messages?.push(newAiMessage)
                return newAiMessage
            }  else {
                throw new HttpException('Conversation Not Found', HttpStatus.NOT_FOUND)
            }
        }
        catch (err) {
            throw new HttpException('CRM Error', HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }

    deleteChat(idChat: string) {
        try{
            const removedChat = this.findOne(idChat)
            this.chats = this.chats.filter(chat => chat.idChat !== idChat)
            return removedChat
        }
        catch ( err ) {
            throw new HttpException('DC Error', HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }
}
