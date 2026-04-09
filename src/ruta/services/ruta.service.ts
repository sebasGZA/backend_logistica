import { Injectable } from "@nestjs/common";
import { RutaRepository } from "../repositories/ruta.repository";
import { PaginationDto } from "../repositories/dtos/pagination.dto";

@Injectable()
export class RutaService {
    constructor(private readonly rutaRepository: RutaRepository) { }

    getRutas(paginationDto: PaginationDto) {
        return this.rutaRepository.obtenerRutas(paginationDto);
    }
}