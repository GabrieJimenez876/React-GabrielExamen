export interface Tarea {
  idTarea: string;
  empleado: string;
  detalle: string;
  fechaInicio: string;
  fechaFin: string;
  conteo: number;
  estado: 'Completado' | 'En Progreso' | 'Pendiente';
}

export const datosTareas: Tarea[] = [
  {
    idTarea: 'TID0002486',
    empleado: 'Jason Statham',
    detalle: 'Desarrollo RWD',
    fechaInicio: '20/08/2018',
    fechaFin: '28/08/2018',
    conteo: 9,
    estado: 'Completado',
  },
  {
    idTarea: 'TID0002497',
    empleado: 'Jennifer Lawrence',
    detalle: 'Desarrollo Frontend',
    fechaInicio: '28/08/2018',
    fechaFin: '05/09/2018',
    conteo: 7,
    estado: 'Completado',
  },
  {
    idTarea: 'TID0002501',
    empleado: 'John Peterson',
    detalle: 'Desarrollo Frontend',
    fechaInicio: '12/09/2018',
    fechaFin: '15/09/2018',
    conteo: 10,
    estado: 'pendiente',
  },
  {
    idTarea: 'TID0002498',
    empleado: 'Natali Raze',
    detalle: 'Desarrollo RWD',
    fechaInicio: '28/08/2018',
    fechaFin: '05/09/2018',
    conteo: 9,
    estado: 'Completado',
  },
  {
    idTarea: 'TID0002481',
    empleado: 'Selena Gomez',
    detalle: 'Wordpress',
    fechaInicio: '15/08/2018',
    fechaFin: '26/08/2018',
    conteo: 6,
    estado: 'Completado',
  },
  {
    idTarea: 'TID0003000',
    empleado: 'Gabriel Jimenez',
    detalle: 'Configuración StackBlitz',
    fechaInicio: '20/10/2025',
    fechaFin: '20/10/2025',
    conteo: 1,
    estado: 'En Progreso',
  },
];