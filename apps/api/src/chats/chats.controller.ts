import { Body, Controller, Delete, Get, Param, ParseIntPipe, ParseUUIDPipe, Post, ValidationPipe } from '@nestjs/common';
import { ChatsService } from './chats.service';
import { CreateMessageDto } from './dto/create-message.dto';
import { CreateUuidDto } from './dto/create-uuid.dto';
import { Throttle } from '@nestjs/throttler';
import { MyLoggerService } from 'src/my-logger/my-logger.service';

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
    private readonly logger = new MyLoggerService(ChatsController.name)
    @Get()
    findAll() {
        return this.chatService.findAll()
    }

    @Throttle({ short: { ttl: 1000, limit: 25}})
    @Get('/c/:id')
    findOne(@Param('id', ParseUUIDPipe) idChat: string) {
        // this.logger.log(`Requested to view chat with id ${idChat}`);
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
    createRespondMessage(@Param('id', ParseUUIDPipe) idChat: string, @Body(ValidationPipe) createMessageDto: CreateMessageDto) {
        const res = this.chatService.createRespondMessage(idChat, createMessageDto)
        return res
    }

    @Delete('/c/:id')
    deleteChat(@Param('id', ParseUUIDPipe) idChat: string) {
        return this.chatService.deleteChat(idChat)
    }
}
