import { IsEnum, IsNotEmpty } from "class-validator";
import { RutaEstadoEnum } from "../enums/ruta-estado.enum";
import { ApiProperty } from "@nestjs/swagger";

export class ActualizarRutaDto {
    @IsNotEmpty()
    @IsEnum(RutaEstadoEnum)
    @ApiProperty({
        example: RutaEstadoEnum.EN_CURSO,
        enum: RutaEstadoEnum,
    })
    estado!: RutaEstadoEnum
}