import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ChatsService } from './chats.service';

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
    findOne(@Param('id') idChat: string) {
        return this.chatService.findOne(Number(idChat))
    }

    @Post()
    createChat() {
        return this.chatService.createChat()
    }

    @Post(':id')
    createMessage(@Param('id') idChat: string, @Body() message: {userMessage: string}) {
        if (!Number(idChat)) {
            return "Error, chat is not available"
        }
        return this.chatService.createMessage(Number(idChat), message)
    }

    @Delete(':id')
    deleteChat(@Param('id') idChat: string) {
        return this.chatService.deleteChat(Number(idChat))
    }
}
