import { Chat } from '@google/genai';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaChatService } from 'src/prisma-chat/prisma-chat.service';
import { Prisma, Chat as PrismaChatModel} from 'database/generated/prisma';
import { LlmService } from 'src/llm/llm.service';


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
    constructor(
        private readonly prismaChatService: PrismaChatService,
        private readonly llmService: LlmService,
    ) {}

    
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
        try {
            const chat = await this.prismaChatService.chat({id: idChat})
            if (chat === null) {
                throw new HttpException('Chat Not Found', HttpStatus.NOT_FOUND)
            }
            return chat
        }   catch (err) {
            throw new HttpException('Error finding a chat', HttpStatus.NOT_FOUND)
        }
    }

    async findMessages(idChat: string) {
        try {
            const chat = await this.prismaChatService.chat({id: idChat})
            if (chat === null) {
                throw new HttpException('Chat Not Found', HttpStatus.NOT_FOUND)
            }
            const messages = this.prismaChatService.messages({where: {
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

    async createMessage(idChat: string, message: {userMessage: string}) {
        try {
            const newMessage = await this.prismaChatService.createMessage({chatId: idChat, messageRoleId: 2, message: message.userMessage})

            return newMessage
        }   catch (e) {
            throw new HttpException('Error when creating message', HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }

    async createRespondMessage(idChat: string, message: {userMessage: string}) {
        try {
            let aiRespond: string;
            try {
                aiRespond = await this.llmService.getLlmResponse(message)
            }   catch (err) {
                throw new HttpException('CRM Respond Error', HttpStatus.INTERNAL_SERVER_ERROR)
            }
            const newAiMessage = await this.prismaChatService.createMessage({chatId: idChat, messageRoleId: 3, message: `${aiRespond}`})
            return newAiMessage
        }
        catch (err) {
            throw new HttpException('CRM Error', HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }

    async deleteChat(idChat: string) {
        try{
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
}
