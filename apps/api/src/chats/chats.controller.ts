import { Body, Controller, Delete, Get, Param, ParseIntPipe, ParseUUIDPipe, Post, ValidationPipe } from '@nestjs/common';
import { ChatsService } from './chats.service';
import { CreateMessageDto } from './dto/create-message.dto';
import { CreateUuidDto } from './dto/create-uuid.dto';
import { Throttle } from '@nestjs/throttler';
import { MyLoggerService } from 'src/my-logger/my-logger.service';
import { Prisma, Chat as PrismaChatModel } from 'database/generated/prisma';

@Controller('chats')
export class ChatsController {
    constructor(
        private readonly chatService: ChatsService
    ) {}
    private readonly logger = new MyLoggerService(ChatsController.name)

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
    @Get('/c/:id')
    findOne(@Param('id', ParseUUIDPipe) idChat: string) {
        // this.logger.log(`Requested to view chat with id ${idChat}`);
        return this.chatService.findMessages(idChat)
    }

    @Post("/create")
    createChat(@Body(ValidationPipe) user_id: CreateUuidDto) {
        return this.chatService.createChat(user_id)
    }
    
    @Post('/c/:id')
    createMessage(@Param('id', ParseUUIDPipe) idChat: string, @Body(ValidationPipe) createMessageDto: CreateMessageDto) {
        const res = this.chatService.createMessage(idChat, createMessageDto)
        return res
    }

    @Post('/c/:id/r')
    createRespondMessage(@Param('id', ParseUUIDPipe) idChat: string, @Body(ValidationPipe) createMessageDto: CreateMessageDto) {
        const res = this.chatService.createRespondMessage(idChat, createMessageDto)
        return res
    }

    @Delete('/c/:id')
    deleteChat(@Param('id', ParseUUIDPipe) idChat: string) {
        return this.chatService.deleteChat(idChat)
    }
}
