import { Body, Controller, Delete, Get, Param, ParseIntPipe, ParseUUIDPipe, Post, ValidationPipe } from '@nestjs/common';
import { ChatsService } from './chats.service';
import { CreateMessageDto } from './dto/create-message.dto';
import { CreateUuidDto } from './dto/create-uuid.dto';
import { Throttle } from '@nestjs/throttler';
import { MyLoggerService } from 'src/my-logger/my-logger.service';
import { Prisma, Chat as PrismaChatModel } from 'database/generated/prisma';
import { SearchMessageDto } from './dto/search-messages.dto';

@Controller('chats')
export class ChatsController {
    private readonly logger: MyLoggerService
    constructor(
        private readonly chatService: ChatsService
    ) {
        this.logger = new MyLoggerService()
    }

    @Post()
    findAll(@Body() params: {
        skip?: number;
        take?: number;
        cursor?: Prisma.ChatWhereUniqueInput;
        where?: Prisma.ChatWhereInput;
        orderBy?: Prisma.ChatOrderByWithRelationInput;
    }) {
        return this.chatService.findAll(params)
    }

    @Throttle({ short: { ttl: 1000, limit: 25}})
    @Post('/c/:id')
    async findOne(@Param('id', ParseUUIDPipe) idChat: string, @Body(ValidationPipe) searchMessageDto: SearchMessageDto) {
        const res = await this.chatService.findMessages(idChat, searchMessageDto)
        this.logger.log(`user: ${searchMessageDto.userId} requested to view chat with id ${idChat}`);
        return res
    }

    @Post("/create")
    createChat(@Body(ValidationPipe) user_id: CreateUuidDto) {
        this.logger.log(`user: ${user_id} requested to create a chat`);
        return this.chatService.createChat(user_id)
    }
    
    @Post('/c/:id/create')
    createMessage(@Param('id', ParseUUIDPipe) idChat: string, @Body(ValidationPipe) createMessageDto: CreateMessageDto) {
        const res = this.chatService.createMessage(idChat, createMessageDto)
        this.logger.log(`user: ${createMessageDto.userId} send a message: ${createMessageDto.userMessage} to chat with id ${idChat}`);
        return res
    }

    @Post('/c/:id/reply')
    createRespondMessage(@Param('id', ParseUUIDPipe) idChat: string, @Body(ValidationPipe) createMessageDto: CreateMessageDto) {
        const res = this.chatService.createRespondMessage(idChat, createMessageDto)
        this.logger.log(`user: ${createMessageDto.userId} requested response for '${createMessageDto.userMessage}' in chat with id ${idChat}`);
        return res
    }

    @Delete('/c/:id')
    deleteChat(@Param('id', ParseUUIDPipe) idChat: string) {
        return this.chatService.deleteChat(idChat)
    }
}
