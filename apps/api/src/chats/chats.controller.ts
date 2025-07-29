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

    

    @Get()
    findAll() {
        return [{}]
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return { id }
    }

    @Post()
    createChat() {
        return {}
    }

    @Post(':id')
    createMessage(@Body() message: string) {
        return { message }
    }

    @Delete(':id')
    deleteChat(@Param('id') id:string) {
        return `${id} is deleted successfully`
    }
}
