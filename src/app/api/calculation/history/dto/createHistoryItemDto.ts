import { Transform } from 'class-transformer';
import { IsEnum, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateHistoryOperationDto {
    @IsNumber()
    first_operand: number;

    @IsOptional()
    @IsNumber()
    second_operand: number | null;

    @IsNumber()
    result: number;

    @IsString()
    operator: string;
}