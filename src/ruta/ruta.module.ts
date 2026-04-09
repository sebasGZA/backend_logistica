import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

import { Ruta } from "./entities/ruta.entity";

@Module({
    imports: [TypeOrmModule.forFeature([Ruta])],
    exports: [TypeOrmModule]
})
export class RutaModule { }