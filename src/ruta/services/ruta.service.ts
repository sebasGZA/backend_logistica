import { Injectable } from "@nestjs/common";
import { RutaRepository } from "../repositories/ruta.repository";
import { PaginacionDto } from "../repositories/dtos/pagination.dto";
import { CrearRutaDto } from "../dtos/crear-ruta.dto";

@Injectable()
export class RutaService {
    constructor(private readonly rutaRepository: RutaRepository) { }

    getRutas(paginationDto: PaginacionDto) {
        return this.rutaRepository.obtenerRutas(paginationDto);
    }

    postRuta(crearRutaDto: CrearRutaDto) {
        return this.rutaRepository.crearRuta(crearRutaDto);
    }
}