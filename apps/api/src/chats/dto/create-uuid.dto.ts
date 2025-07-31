import { IsString, IsInt, IsEmpty, IsNotEmpty, IsUUID } from 'class-validator';

export class CreateUuidDto {
    @IsUUID()
    @IsNotEmpty()
    uuid: string;
}