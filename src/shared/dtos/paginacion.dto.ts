import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsOptional, IsPositive, Min } from "class-validator";

export class PaginacionDto {
    @IsOptional()
    @IsPositive()
    @Type(() => Number)
    @ApiProperty({
        default: 10,
        description: 'cuantos registros requieres',
    })
    limit?: number;

    @IsOptional()
    @Min(0)
    @Type(() => Number)
    @ApiProperty({
        default: 0,
        description: 'De que punto quieres tomar',
    })
    offset?: number;
}