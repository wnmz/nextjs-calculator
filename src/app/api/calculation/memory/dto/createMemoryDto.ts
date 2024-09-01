import { IsNumber } from "class-validator";

export class CreateMemoryDto {
    @IsNumber()
    value: number;
}