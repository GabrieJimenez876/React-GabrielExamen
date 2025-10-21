export type ColorEstado = "verde" | "amarillo" | "rojo" | "azul" | "gris";
export interface FilaTarea {
  empleado: string;
  idTarea: string;
  tarea: string;
  inicio: string;
  fin: string;
  conteo: number;
  estado: string;
  colorEstado: ColorEstado;
}
export const datosTareas: FilaTarea[] = [
  { empleado: "John, Peterson", idTarea: "TID0002501", tarea: "Desarrollo Frontend", inicio: "12/09/2018", fin: "15/09/2018", conteo: 10, estado: "Completado", colorEstado: "gris" },
  { empleado: "Nattali Rize", idTarea: "TID0002498", tarea: "Desarrollo Tema RWD", inicio: "28/08/2018", fin: "05/09/2018", conteo: 9, estado: "Completado", colorEstado: "verde" },
  { empleado: "Jennifer Lawrence", idTarea: "TID0002497", tarea: "Desarrollo Frontend", inicio: "28/08/2018", fin: "05/09/2018", conteo: 7, estado: "En Progreso", colorEstado: "azul" },
  { empleado: "Jason Statham", idTarea: "TID0002486", tarea: "Desarrollo Tema RWD", inicio: "20/08/2018", fin: "28/08/2018", conteo: 9, estado: "Completado", colorEstado: "verde" },
  { empleado: "Selena Gomez", idTarea: "TID0002481", tarea: "Tema Wordpress", inicio: "15/08/2018", fin: "26/08/2018", conteo: 6, estado: "Pendiente", colorEstado: "rojo" },
  { empleado: "Chris Evans", idTarea: "TID0002502", tarea: "Refactorización de CSS", inicio: "01/10/2025", fin: "05/10/2025", conteo: 5, estado: "En Revisión", colorEstado: "amarillo" },
  { empleado: "Emma Stone", idTarea: "TID0002503", tarea: "Documentación API", inicio: "10/10/2025", fin: "15/10/2025", conteo: 8, estado: "Completado", colorEstado: "verde" },
  { empleado: "Robert Downey", idTarea: "TID0002504", tarea: "Migración a Next.js", inicio: "01/11/2025", fin: "30/11/2025", conteo: 12, estado: "Pendiente", colorEstado: "rojo" },
  { empleado: "Scarlett Joh.", idTarea: "TID0002505", tarea: "Optimización de imágenes", inicio: "05/10/2025", fin: "08/10/2025", conteo: 3, estado: "En Progreso", colorEstado: "azul" },
  { empleado: "Tom Hanks", idTarea: "TID0002506", tarea: "Pruebas unitarias", inicio: "20/09/2025", fin: "25/09/2025", conteo: 4, estado: "Completado", colorEstado: "verde" },
];
