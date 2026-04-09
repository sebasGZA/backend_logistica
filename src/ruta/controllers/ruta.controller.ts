import { Body, Controller, Get, Param, Post, Put, Query } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";

import { RutaService } from "../services/ruta.service";
import { PaginacionDto } from "../../shared/dtos/paginacion.dto";
import { CrearRutaDto } from "../dtos/crear-ruta.dto";
import { ActualizarRutaDto } from "../dtos/actualizar-ruta.dto";
import { ObtenerRutaDto } from "../dtos/obtener-ruta.dto";

@ApiTags('Ruta')
@Controller('ruta')
export class RutaController {
    constructor(private readonly rutaService: RutaService) { }

    @Get()
    getRutas(@Query() obtenerRutaDto: ObtenerRutaDto) {
        return this.rutaService.getRutas(obtenerRutaDto);
    }

    @Post()
    crearRuta(@Body() crearRutaDto: CrearRutaDto) {
        return this.rutaService.postRuta(crearRutaDto)
    }


    @Put(':id')
    actualizarEstado(@Param('id') id: number, @Body() actualizarDto: ActualizarRutaDto) {
        return this.rutaService.actualizarEstado(id, actualizarDto)
    }
}