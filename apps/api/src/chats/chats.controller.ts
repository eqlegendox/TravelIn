import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, ValidationPipe } from '@nestjs/common';
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
    createMessage(@Param('id', ParseIntPipe) idChat: number, @Body(ValidationPipe) createMessageDto: CreateMessageDto) {
        if (!idChat) {
            return "Error, chat is not available"
        }
        const res = this.chatService.createMessage(idChat, createMessageDto)
        return res
    }

    @Post(':id/r')
    createRespondessage(@Param('id', ParseIntPipe) idChat: number, @Body(ValidationPipe) createMessageDto: CreateMessageDto) {
        if (!idChat) {
            return "Error, chat is not available"
        }
        const res = this.chatService.createRespondMessage(idChat, createMessageDto)
        return res
    }

    @Delete(':id')
    deleteChat(@Param('id', ParseIntPipe) idChat: number) {
        return this.chatService.deleteChat(idChat)
    }
}
