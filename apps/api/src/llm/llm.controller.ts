import { Controller, Get, Post, Body } from '@nestjs/common';
// import { LlmService } from './llm.service';

@Controller('llm')
export class LlmController {
    constructor(private readonly llmService: LlmService) {}
    
    @Get()
    getLlm() {
        return this.llmService.getLm("Hi Please Introduce Yourself!");
    }

    @Post()
    postLlm(@Body() message: {mess: string}) {
        return this.llmService.getLm(message.mess)
    }
}
