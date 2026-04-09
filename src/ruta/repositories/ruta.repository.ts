import { DataSource, Repository } from "typeorm";
import { Injectable, InternalServerErrorException } from "@nestjs/common";

import { Ruta } from "../entities/ruta.entity";
import { PaginacionDto } from "./dtos/pagination.dto";
import { CrearRutaDto } from "../dtos/crear-ruta.dto";
import { RutaEstadoEnum } from "../enums/ruta-estado.enum";

@Injectable()
export class RutaRepository extends Repository<Ruta> {
    constructor(readonly dataSource: DataSource) {
        super(Ruta, dataSource.createEntityManager())
    }

    obtenerRutas({ limit, offset }: PaginacionDto) {
        return this.find({
            skip: offset,
            take: limit,
        })
    }

    crearRuta(createDto: CrearRutaDto) {
        try {
            const crearRuta = this.create({
                ...createDto,
                estado: RutaEstadoEnum.PENDIENTE,
            })
            return this.save(crearRuta);
        } catch (error: any) {
            throw new InternalServerErrorException(error?.message)
        }

    }
}