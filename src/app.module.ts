import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { DatabaseModule } from './database/database.module';
import { RutaModule } from './ruta/ruta.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    DatabaseModule,
    RutaModule,
  ],
})
export class AppModule { }
