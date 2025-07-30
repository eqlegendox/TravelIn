import { IsString, IsInt, IsEmpty, IsNotEmpty } from 'class-validator';

export class CreateMessageDto {
    @IsString()
    @IsNotEmpty()
    userMessage: string;
}