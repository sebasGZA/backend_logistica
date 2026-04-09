import { ActualizarRutaDto } from "../dtos/actualizar-ruta.dto";
import { CrearRutaDto } from "../dtos/crear-ruta.dto";
import { ObtenerRutaDto } from "../dtos/obtener-ruta.dto";
import { Ruta } from "../entities/ruta.entity";

export interface IRutaService {
    getRutas: (obtenerRutaDto: ObtenerRutaDto) => Promise<Ruta[]>;
    postRuta: (createDto: CrearRutaDto) => Promise<Ruta>;
    actualizarEstado: (id: number, actualizarDto: ActualizarRutaDto) => Promise<Ruta>;
} 