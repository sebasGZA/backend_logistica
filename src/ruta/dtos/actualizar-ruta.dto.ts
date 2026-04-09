import { IsEnum, IsNotEmpty } from "class-validator";
import { RutaEstadoEnum } from "../enums/ruta-estado.enum";

export class ActualizarRutaDto {
    @IsNotEmpty()
    @IsEnum({
        type: RutaEstadoEnum
    })
    estado!: RutaEstadoEnum
}