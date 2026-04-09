import { Controller, Get, Query } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";

import { RutaService } from "../services/ruta.service";
import { PaginationDto } from "../repositories/dtos/pagination.dto";

@ApiTags('Ruta')
@Controller('ruta')
export class RutaController {
    constructor(private readonly rutaService: RutaService) { }

    @Get()
    getRutas(@Query() paginationDto: PaginationDto) {
        return this.rutaService.getRutas(paginationDto);
    }
}