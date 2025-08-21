import { IsString, IsInt, IsEmpty, IsNotEmpty, IsUUID } from 'class-validator';

export class SearchMessageDto {
    @IsUUID()
    @IsNotEmpty()
    userId: string;
}