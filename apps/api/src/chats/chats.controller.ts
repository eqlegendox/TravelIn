import { Body, Controller, Delete, Get, Param, ParseIntPipe, ParseUUIDPipe, Post, ValidationPipe } from '@nestjs/common';
import { ChatsService } from './chats.service';
import { CreateMessageDto } from './dto/create-message.dto';
import { CreateUuidDto } from './dto/create-uuid.dto';
import { Throttle } from '@nestjs/throttler';

@Controller('chats')
export class ChatsController {
    /*
    GET /chats | 
    GET /chats/:id | 
    POST /chats | This will create a new chat
    POST /chats/:id | This will create some messages?
    PATCH /chats/:id | edit messages | TBE
    DELETE /chats/:id | delete specific chat
    */

    constructor(private readonly chatService: ChatsService) {}

    @Get()
    findAll() {
        return this.chatService.findAll()
    }

    @Throttle({ short: { ttl: 1000, limit: 50}})
    @Get('/c/:id')
    findOne(@Param('id', ParseUUIDPipe) idChat: string) {
        return this.chatService.findOne(idChat)
    }

    @Post()
    createChat(@Body(ValidationPipe) uuidv4: CreateUuidDto) {
        return this.chatService.createChat(uuidv4)
    }
    
    @Post('/c/:id')
    createMessage(@Param('id', ParseUUIDPipe) idChat: string, @Body(ValidationPipe) createMessageDto: CreateMessageDto) {
        const res = this.chatService.createMessage(idChat, createMessageDto)
        return res
    }

    @Post('/c/:id/r')
    createRespondessage(@Param('id', ParseUUIDPipe) idChat: string, @Body(ValidationPipe) createMessageDto: CreateMessageDto) {
        const res = this.chatService.createRespondMessage(idChat, createMessageDto)
        return res
    }

    @Delete('/c/:id')
    deleteChat(@Param('id', ParseUUIDPipe) idChat: string) {
        return this.chatService.deleteChat(idChat)
    }
}
