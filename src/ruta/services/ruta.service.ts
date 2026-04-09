import { BadRequestException, Injectable } from "@nestjs/common";

import { RutaRepository } from "../repositories/ruta.repository";
import { CrearRutaDto } from "../dtos/crear-ruta.dto";
import { RutaEstadoEnum } from "../enums/ruta-estado.enum";
import { ObtenerRutaDto } from '../dtos/obtener-ruta.dto';
import { ActualizarRutaDto } from "../dtos/actualizar-ruta.dto";

@Injectable()
export class RutaService {
    constructor(private readonly rutaRepository: RutaRepository) { }

    getRutas(ObtenerRutaDto: ObtenerRutaDto) {
        return this.rutaRepository.obtenerRutas(ObtenerRutaDto);
    }

    postRuta(crearRutaDto: CrearRutaDto) {
        return this.rutaRepository.crearRuta(crearRutaDto);
    }

    async actualizarEstado(id: number, { estado }: ActualizarRutaDto) {
        const ruta = await this.rutaRepository.obtenerRutaPorId(id);
        if (estado === RutaEstadoEnum.ENTREGADO && ruta.estado === RutaEstadoEnum.PENDIENTE)
            throw new BadRequestException('No se puede finalizar una ruta si no se ha iniciado')

        return this.rutaRepository.actualizarRuta(ruta, { estado })
    }
}