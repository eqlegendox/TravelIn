import { Module } from '@nestjs/common';
import { LlmController } from './llm.controller';
import { LlmService } from './llm.service';
import { ConfigService } from '@nestjs/config';

// console.log(process.env.GEMINI_API_KEY);
@Module({
    controllers: [LlmController],
    providers: [LlmService, ConfigService],
    exports: [LlmService]
})
export class LlmModule {}
