import { Module } from '@nestjs/common';
import { ToolsService } from './tools.service';
import { MyLoggerModule } from '../my-logger/my-logger.module';
import { PrismaModule } from '../prisma/prisma.module';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  imports: [PrismaModule, MyLoggerModule],
  providers: [ToolsService, PrismaService],
  exports: [ToolsService]
})
export class ToolsModule {}