import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

import { Ruta } from "./entities/ruta.entity";
import { RutaRepository } from "./repositories/ruta.repository";
import { RutaService } from "./services/ruta.service";
import { RutaController } from "./controllers/ruta.controller";

@Module({
    imports: [TypeOrmModule.forFeature([Ruta])],
    providers: [
        RutaRepository,
        RutaService,
    ],
    controllers: [RutaController],
    exports: [TypeOrmModule]
})
export class RutaModule { }