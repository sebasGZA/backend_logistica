import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { RutaEstadoEnum } from "../enums/ruta-estado.enum";

@Entity()
export class Ruta {

    @PrimaryGeneratedColumn()
    id!: number;

    @Column('varchar')
    placa!: string

    @Column('varchar')
    conductor!: string

    @Column('date')
    fechaProgramacion!: Date

    @Column('enum', {
        enum: RutaEstadoEnum
    })
    estado!: RutaEstadoEnum

}