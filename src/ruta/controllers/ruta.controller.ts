import { Body, Controller, Get, Post, Query } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";

import { RutaService } from "../services/ruta.service";
import { PaginacionDto } from "../repositories/dtos/pagination.dto";
import { CrearRutaDto } from "../dtos/crear-ruta.dto";

@ApiTags('Ruta')
@Controller('ruta')
export class RutaController {
    constructor(private readonly rutaService: RutaService) { }

    @Get()
    getRutas(@Query() paginationDto: PaginacionDto) {
        return this.rutaService.getRutas(paginationDto);
    }

    @Post()
    crearRuta(@Body() crearRutaDto: CrearRutaDto) {
        return this.rutaService.postRuta(crearRutaDto)
    }
}