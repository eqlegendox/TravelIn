import { IsString, IsInt, IsEmpty, IsNotEmpty } from 'class-validator';

export class LlmPrompt {
    @IsString()
    @IsNotEmpty()
    userMessage: string;
}