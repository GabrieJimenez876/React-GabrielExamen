export interface Task {
    empleado: string;
    idTarea: string;
    tarea: string;
    inicio: string;
    fin: string;
    conteo: number;
    estado: 'Completado' | 'En Progreso' | 'Pendiente' | 'En Revisión';
    colorEstado: 'verde' | 'amarillo' | 'rojo' | 'azul' | 'gris';
}

export const datosTareas: Task[] = [
    { empleado: "John, Wick", idTarea: "TID0002501", tarea: "Desarrollo Frontend", inicio: "12/09/2018", fin: "15/09/2018", conteo: 10, estado: "Completado", colorEstado: "verde" },
    { empleado: "Nattali Fernandez", idTarea: "TID0002498", tarea: "Desarrollo Tema RWD", inicio: "28/08/2018", fin: "05/09/2018", conteo: 9, estado: "Completado", colorEstado: "verde" },
    { empleado: "Jennifer Killer", idTarea: "TID0002497", tarea: "Desarrollo Frontend", inicio: "28/08/2018", fin: "05/09/2018", conteo: 7, estado: "En Progreso", colorEstado: "azul" },
    { empleado: "Jason Statham", idTarea: "TID0002486", tarea: "Desarrollo Tema RWD", inicio: "20/08/2018", fin: "28/08/2018", conteo: 9, estado: "Completado", colorEstado: "verde" },
    { empleado: "Selena Gomez", idTarea: "TID0002481", tarea: "Tema Wordpress", inicio: "15/08/2018", fin: "26/08/2018", conteo: 6, estado: "Pendiente", colorEstado: "rojo" },
    { empleado: "Chris Evans", idTarea: "TID0002502", tarea: "Refactorización de CSS", inicio: "01/10/2025", fin: "05/10/2025", conteo: 5, estado: "En Revisión", colorEstado: "amarillo" },
    { empleado: "Emma Stone", idTarea: "TID0002503", tarea: "Documentación API", inicio: "10/10/2025", fin: "15/10/2025", conteo: 8, estado: "Completado", colorEstado: "verde" },
    { empleado: "Robert Downey", idTarea: "TID0002504", tarea: "Migración a Next.js", inicio: "01/11/2025", fin: "30/11/2025", conteo: 12, estado: "Pendiente", colorEstado: "rojo" },
    { empleado: "Scarlett Joh.", idTarea: "TID0002505", tarea: "Optimización de imágenes", inicio: "05/10/2025", fin: "08/10/2025", conteo: 3, estado: "En Progreso", colorEstado: "azul" },
    { empleado: "Tom Jerry", idTarea: "TID0002506", tarea: "Pruebas unitarias", inicio: "20/09/2025", fin: "25/09/2025", conteo: 4, estado: "Completado", colorEstado: "verde" },
    { empleado: "Simur Skinner", idTarea: "TID0012378", tarea: "Full Stack", inicio: "20/08/2025", fin: "01/01/2026", conteo: 25, estado: "Completado", colorEstado: "gris" },
    { empleado: "Rayo mcqueen", idTarea: "TID00318574", tarea: "Base De Datos", inicio: "14/08/2025", fin: "14/11/2025", conteo: 11, estado: "Completado", colorEstado: "verde" }
];

export const clasesColor = {
    verde: { punto: "bg-green-500", borde: "border-green-300", texto: "text-green-800", fondo: "bg-green-100" },
    amarillo: { punto: "bg-yellow-500", borde: "border-yellow-300", texto: "text-yellow-800", fondo: "bg-yellow-100" },
    rojo: { punto: "bg-red-500", borde: "border-red-300", texto: "text-red-800", fondo: "bg-red-100" },
    azul: { punto: "bg-blue-500", borde: "border-blue-300", texto: "text-blue-800", fondo: "bg-blue-100" },
    gris: { punto: "bg-gray-400", borde: "border-gray-300", texto: "text-gray-800", fondo: "bg-gray-100" },
};