import { Module } from '@nestjs/common';
import { ToolsService } from './tools.service';
import { MyLoggerModule } from 'src/my-logger/my-logger.module';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule, MyLoggerModule],
  providers: [ToolsService],
  exports: [ToolsService]
})
export class ToolsModule {}