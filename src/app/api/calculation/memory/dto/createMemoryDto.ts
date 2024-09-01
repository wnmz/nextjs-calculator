import { IsNumber, IsOptional, IsString } from "class-validator";

export class CreateMemoryDto {
    @IsOptional()
    @IsString()
    id: string;

    @IsNumber()
    value: number;
}