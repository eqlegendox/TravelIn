import { Module } from '@nestjs/common';
import { ChatsController } from './chats.controller';
import { ChatsService } from './chats.service';
import { PrismaChatModule } from 'src/prisma-chat/prisma-chat.module';

@Module({
    imports: [PrismaChatModule],
    controllers: [ChatsController],
    providers: [ChatsService],
})
export class ChatsModule {}
