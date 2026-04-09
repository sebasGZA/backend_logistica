import { ApiProperty } from "@nestjs/swagger";
import { IsDateString, IsNotEmpty, IsString, Matches, MinLength } from "class-validator";

export class CrearRutaDto {

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

    @IsString()
    @IsNotEmpty()
    @MinLength(6)
    @ApiProperty({
        example: 'conductor',
        description: 'Nombre del conductor',
    })
    conductor!: string;


    @IsDateString()
    @IsNotEmpty()
    @ApiProperty({
        example: '2026-04-09T14:30:00Z',
        description: 'Fecha de programacion de la ruta',
    })
    fechaProgramacion!: Date;
}