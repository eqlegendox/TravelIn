import { Module } from '@nestjs/common';
import { LlmController } from './llm.controller';
// import { LlmService } from './llm.service';

// console.log(process.env.GEMINI_API_KEY);
@Module({
    controllers: [LlmController],
    providers: []
})
export class LlmModule {}
