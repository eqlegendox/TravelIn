import { Module } from '@nestjs/common';
import { PrismaChatService } from './prisma-chat.service';
import { PrismaModule } from 'src/prisma/prisma.module';
import { MyLoggerModule } from 'src/my-logger/my-logger.module';

@Module({
  imports: [PrismaModule, MyLoggerModule],
  providers: [PrismaChatService],
  exports: [PrismaChatService]
})
export class PrismaChatModule {}
