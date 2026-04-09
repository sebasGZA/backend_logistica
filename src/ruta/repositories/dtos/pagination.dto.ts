import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsOptional, IsPositive } from "class-validator";

export class PaginationDto {
    @IsOptional()
    @IsPositive()
    @Type(() => Number)
    @ApiProperty({
        default: 10,
        description: 'cuantos registros requieres',
    })
    limit?: number;

    @IsOptional()
    @IsPositive()
    @Type(() => Number)
    @ApiProperty({
        default: 0,
        description: 'De que punto quieres tomar',
    })
    offset?: number;
}