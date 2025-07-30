import { Body, Controller, Delete, Get, Param, Post, ValidationPipe } from '@nestjs/common';
import { LlmService } from './llm.service';
import { LlmPrompt } from './dto/llm-prompt.dto';

@Controller('llm')
export class LlmController {
    constructor(private readonly llmService: LlmService) {}
    
    @Get()
    getLlm() {
        return this.llmService.getLm();
    }

    @Post()
    async getLlmResponse(@Body(ValidationPipe) llmPrompt: LlmPrompt) {
        const response = await this.llmService.getLlmResponse(llmPrompt)
        return response
    }
}
