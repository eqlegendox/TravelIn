import { Controller, Get, Post } from '@nestjs/common';
import { LlmService } from './llm.service';

@Controller('llm')
export class LlmController {
    constructor(private readonly llmService: LlmService) {}
    
    @Get()
    getLlm() {
        return this.llmService.getLm();
    }

    @Post()
    sentLlm() {
        return "I Have posted your request sire"
    }
}
