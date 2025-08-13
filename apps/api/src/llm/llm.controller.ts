import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Post, ValidationPipe } from '@nestjs/common';
import { LlmService } from './llm.service';
import { LlmPrompt } from './dto/llm-prompt.dto';

@Controller('llm')
export class LlmController {
    constructor(private readonly llmService: LlmService) {}
    
    @Get()
    getLlm() {
        throw new HttpException("Internal Server Error", HttpStatus.INTERNAL_SERVER_ERROR)
        return this.llmService.getLm();
    }

    @Post()
    async getLlmResponse(@Body(ValidationPipe) llmPrompt: LlmPrompt) {
        throw new HttpException("Internal Server Error", HttpStatus.INTERNAL_SERVER_ERROR)

        const response = await this.llmService.getGraphResponse(llmPrompt)
        return response
    }

    // @Post()
    // async getLangGraph(@Body(ValidationPipe) llmPrompt: LlmPrompt) {
    //     const response = await this.llmService.getLangGraph(llmPrompt)
    //     return response
    // }
}