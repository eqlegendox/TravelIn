import { Chat } from '@google/genai';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaChatService } from '../prisma-chat/prisma-chat.service';
import { Prisma, Chat as PrismaChatModel} from '../../database/generated/prisma';
import { LlmService } from '../llm/llm.service';
import { formatHistory } from './formatter/formatter';
import { BaseMessage } from '@langchain/core/messages';


@Injectable()
export class ChatsService {
    private messagesRoles: any

    constructor(
        private readonly prismaChatService: PrismaChatService,
        private readonly llmService: LlmService,
    ) {
        this.messagesRoles = this.prismaChatService.roles({})
    }
    
    async findAll(params: {
        skip?: number;
        take?: number;
        cursor?: Prisma.ChatWhereUniqueInput;
        where?: Prisma.ChatWhereInput;
        orderBy?: Prisma.ChatOrderByWithRelationInput;
    }) {
        const chats = await this.prismaChatService.chats(params)
        if (chats.length === 0) {
            throw new HttpException('Not Found', HttpStatus.NOT_FOUND)
        }
        return chats
    }

    async findOne(idChat: string) {
        const chat = await this.prismaChatService.chat({id: idChat})
        if (!chat) {
            throw new HttpException('Chat Not Found', HttpStatus.NOT_FOUND)
        }
        return chat
    }

    async findMessages(idChat: string, data: {userId: string}) {
        try { 
            const userIsCreator = await this.checkChatCreator({userId: data.userId, chatId: idChat})
            if (!userIsCreator.ok) return userIsCreator
            
            const messages = this.prismaChatService.messages({
                where: {
                chatId: idChat
            }, orderBy: {createdAt: 'asc'}})
            return messages
            
        }   catch (err) {
            throw new HttpException('Error finding a chat', HttpStatus.NOT_FOUND)
        }
    }

    async createChat(user_id: {uuid : string}) {
        try {
            const newChat = await this.prismaChatService.createChat({userId : user_id.uuid})
            return newChat
        }
        catch (err) {
            throw new HttpException(`CC Error: ${err}`, HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }

    async createMessage(idChat: string, createMessageData: {userMessage: string, userId: string}) {
        try {
            const userIsCreator = await this.checkChatCreator({userId: createMessageData.userId, chatId: idChat})
            if (!userIsCreator.ok) return userIsCreator // if false, then it have error message

            const humanRoleId = (await this.messagesRoles).filter(r => r.role === 'human')[0].id    
            const newMessage = await this.prismaChatService.createMessage({
                chatId: idChat, messageRoleId: humanRoleId, 
                message: createMessageData.userMessage
            })

            return newMessage
        }   catch (e) {
            throw new HttpException(`${ e? e.response: "Error when creating message"}`, HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }

    async createRespondMessage(idChat: string, createMessageData: {userMessage: string, userId: string}) {
        try {
            const userIsCreator = await this.checkChatCreator({userId: createMessageData.userId, chatId: idChat})
            if (!userIsCreator.ok) return userIsCreator // if false, then it have error message

            // implement db fetching
            const unprocMessageHistory = await this.prismaChatService.messages({ where: { chatId: idChat},
                skip: 1, take: 10, orderBy:{ createdAt: 'desc' }});

            const history = formatHistory(unprocMessageHistory)

            // console.log("!!this is your message History boss", history)

            const newAiResponse = await this.getAiresponse(createMessageData.userMessage, history)
            if (!newAiResponse.ok) return newAiResponse

            const aiRoleId = (await this.messagesRoles).filter(r => r.role === 'ai')[0].id
            const newAiMessage = await this.prismaChatService.createMessage({
                chatId: idChat, 
                messageRoleId: aiRoleId, 
                message: `${newAiResponse.aiResponse}`
            })
            return newAiMessage
        }
        catch (e) {
            throw new HttpException(`${e? e.response : "CRM Error"}`, HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }

    async deleteChat(idChat: string) {
        try{
            const userIsCreator = await this.checkChatCreator({userId: "test", chatId: idChat})
            if (!userIsCreator.ok) return userIsCreator
            
            const removedChat = await this.prismaChatService.deleteChat({id: idChat})
            if (removedChat === null) {
                throw new HttpException('DC Error When Finding', HttpStatus.INTERNAL_SERVER_ERROR)
            }
            return removedChat
        }
        catch ( err ) {
            throw new HttpException('DC Error', HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }

    async checkChatCreator(data: {userId: string, chatId: string}) {
        try {
            if ((await this.findOne(data.chatId)).userId !== data.userId) {
                throw new HttpException(`User is not authorized to this chat`, HttpStatus.INTERNAL_SERVER_ERROR)
            }
            return {ok: true}
        } catch (err) {
            throw new HttpException(`${err? err.response: "Error when matching userId with chatId"}`, HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }

    async getAiresponse(userMessage: string, history: BaseMessage[]) {
        try {
            const aiResponse = await this.llmService.getGraphResponse({userMessage: userMessage}, history)
            return {ok: true, aiResponse: aiResponse}
        }   catch (e) {
            throw new HttpException('Failed to get AI respond', HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }
}
