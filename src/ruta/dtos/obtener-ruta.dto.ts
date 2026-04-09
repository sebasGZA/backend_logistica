import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, Matches, MinLength } from "class-validator";

import { PaginacionDto } from "../../shared/dtos/paginacion.dto";

export class ObtenerRutaDto extends PaginacionDto {
    @IsString()
    @IsNotEmpty()
    @MinLength(6)
    @Matches(/^(?:[A-Z]{3}[0-9]{3}|[A-Z]{3}[0-9]{2}[A-Z]|[0-9]{3}[A-Z]{3})$/, {
        message: 'La placa no tiene un formato válido en Colombia',
    })
    @ApiProperty({
        example: 'ABC123',
        description: 'Placa del vehiculo',
    })
    placa!: string;
}