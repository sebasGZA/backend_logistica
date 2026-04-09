import { Ruta } from "../entities/ruta.entity";
import { ObtenerRutaDto } from '../dtos/obtener-ruta.dto';
import { CrearRutaDto } from "../dtos/crear-ruta.dto";
import { ActualizarRutaDto } from "../dtos/actualizar-ruta.dto";

export interface IRutaRepository {
    obtenerRutas: (obtenerRutaDto: ObtenerRutaDto) => Promise<Ruta[]>;
    crearRuta: (createDto: CrearRutaDto) => Promise<Ruta>;
    obtenerRutaPorId: (id: number) => Promise<Ruta>;
    actualizarRuta: (ruta: Ruta, actualizarDto: ActualizarRutaDto) => Promise<Ruta>;
}