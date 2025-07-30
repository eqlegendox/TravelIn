import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { ChatsService } from './chats.service';
import { CreateMessageDto } from './dto/create-message.dto';

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

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) idChat: number) {
        return this.chatService.findOne(idChat)
    }

    @Post()
    createChat() {
        return this.chatService.createChat()
    }

    @Post(':id')
    createMessage(@Param('id', ParseIntPipe) idChat: number, @Body() createMessageDto: CreateMessageDto) {
        if (!Number(idChat)) {
            return "Error, chat is not available"
        }
        return this.chatService.createMessage(idChat, createMessageDto)
    }

    @Delete(':id')
    deleteChat(@Param('id', ParseIntPipe) idChat: number) {
        return this.chatService.deleteChat(idChat)
    }
}
