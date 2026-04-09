import 'dotenv/config'
import { DataSource } from "typeorm";

import { Ruta } from '../../ruta/entities/ruta.entity';

export const dataSource = new DataSource({
    type: 'postgres',
    url: process.env.DB_URL,
    entities: [Ruta],
    migrations: ['src/migrations/*{.ts,.js}'],
    synchronize: false,
    ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false
})