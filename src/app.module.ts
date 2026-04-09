import { Module } from '@nestjs/common';

import { DatabaseModule } from './database/database.module';
import { RutaModule } from './ruta/ruta.module';

@Module({
  imports: [
    DatabaseModule,
    RutaModule,
  ],
})
export class AppModule { }
