import { DataSource, Repository } from "typeorm";
import { Injectable, InternalServerErrorException, NotFoundException } from "@nestjs/common";

import { Ruta } from "../entities/ruta.entity";
import { CrearRutaDto } from "../dtos/crear-ruta.dto";
import { RutaEstadoEnum } from "../enums/ruta-estado.enum";
import { ObtenerRutaDto } from "../dtos/obtener-ruta.dto";
import { ActualizarRutaDto } from "../dtos/actualizar-ruta.dto";
import { IRutaRepository } from "../interfaces/ruta-repository.interface";

@Injectable()
export class RutaRepository extends Repository<Ruta> implements IRutaRepository {
    constructor(readonly dataSource: DataSource) {
        super(Ruta, dataSource.createEntityManager())
    }

    async obtenerRutas({ placa, limit, offset }: ObtenerRutaDto) {
        const rutasDb = await this.find({
            where: { placa },
            skip: offset,
            take: limit,
        })

        if (rutasDb.length === 0) throw new NotFoundException(`No se encontraron rutas para la placa ${placa}`)
        return rutasDb;
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

    async obtenerRutaPorId(id: number) {
        const rutaDb = await this.findOneBy({ id });
        if (!rutaDb) throw new NotFoundException(`La ruta con id ${id} no encontrado`)
        return rutaDb
    }

    async actualizarRuta(ruta: Ruta, { estado }: ActualizarRutaDto) {
        const rutaUpdated = {
            ...ruta,
            estado,
        }
        return this.save(rutaUpdated);
    }
}