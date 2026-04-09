import { DataSource, Repository } from "typeorm";
import { Injectable } from "@nestjs/common";

import { Ruta } from "../entities/ruta.entity";
import { PaginationDto } from "./dtos/pagination.dto";

@Injectable()
export class RutaRepository extends Repository<Ruta> {
    constructor(readonly dataSource: DataSource) {
        super(Ruta, dataSource.createEntityManager())
    }

    obtenerRutas({ limit, offset }: PaginationDto) {
        return this.find({
            skip: offset,
            take: limit,
        })
    }
}