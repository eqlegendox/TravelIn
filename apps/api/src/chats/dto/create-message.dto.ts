import { IsString, IsInt, IsEmpty, IsNotEmpty, IsUUID } from 'class-validator';

export class CreateMessageDto {
    @IsString()
    @IsNotEmpty()
    userMessage: string;

    @IsUUID()
    @IsNotEmpty()
    userId: string;
}