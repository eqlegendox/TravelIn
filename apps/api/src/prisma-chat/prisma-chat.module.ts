import { Module } from '@nestjs/common';
import { PrismaChatService } from './prisma-chat.service';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [PrismaChatService],
  exports: [PrismaChatService]
})
export class PrismaChatModule {}
