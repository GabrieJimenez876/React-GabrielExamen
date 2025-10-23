import React, { useState, useMemo } from 'react';
import { createRoot } from 'react-dom/client';

// --- 1. Definición de Tipos y Datos Mock ---

type Estado = "Completado" | "Pendiente" | "En Curso" | "Bloqueado";
type ColorKey = "success" | "warning" | "primary" | "danger";

interface Tarea {
  idTarea: string;
  empleado: string;
  tarea: string;
  inicio: string;
  fin: string;
  conteo: number;
  estado: Estado;
  colorEstado: ColorKey;
}

interface ClaseColor {
  punto: string;
  texto: string;
  borde: string;
  fondo: string;
}

interface ClaseColorMap {
  [key in ColorKey]: ClaseColor;
}

// Mapeo de colores para el Tailwind CSS
const clasesColor: ClaseColorMap = {
  success: { punto: "bg-green-500", texto: "text-green-800", borde: "border-green-300", fondo: "bg-green-50" },
  warning: { punto: "bg-yellow-500", texto: "text-yellow-800", borde: "border-yellow-300", fondo: "bg-yellow-50" },
  primary: { punto: "bg-sky-500", texto: "text-sky-800", borde: "border-sky-300", fondo: "bg-sky-50" },
  danger: { punto: "bg-red-500", texto: "text-red-800", borde: "border-red-300", fondo: "bg-red-50" },
};

// Datos de tareas simulados
const datosTareas: Tarea[] = [
  { idTarea: "T-894", empleado: "Ana García", tarea: "Revisión de documentación de microservicios", inicio: "2024-10-01", fin: "2024-10-15", conteo: 140, estado: "Completado", colorEstado: "success" },
  { idTarea: "T-711", empleado: "Juan Pérez", tarea: "Despliegue de hotfix en producción", inicio: "2024-10-14", fin: "2024-10-16", conteo: 8, estado: "En Curso", colorEstado: "primary" },
  { idTarea: "T-605", empleado: "Sofía Gómez", tarea: "Diseño UX para nuevo módulo de reportes", inicio: "2024-09-20", fin: "2024-10-30", conteo: 210, estado: "Pendiente", colorEstado: "warning" },
  { idTarea: "T-552", empleado: "Carlos Ruiz", tarea: "Migración de base de datos MySQL a Postgres", inicio: "2024-10-05", fin: "2024-11-05", conteo: 95, estado: "Bloqueado", colorEstado: "danger" },
  { idTarea: "T-901", empleado: "Elena López", tarea: "Testing de integración API Gateway", inicio: "2024-10-17", fin: "2024-10-25", conteo: 32, estado: "En Curso", colorEstado: "primary" },
  { idTarea: "T-420", empleado: "Ana García", tarea: "Capacitación a nuevo personal de soporte", inicio: "2024-10-20", fin: "2024-10-21", conteo: 5, estado: "Pendiente", colorEstado: "warning" },
  { idTarea: "T-115", empleado: "Juan Pérez", tarea: "Configuración de CI/CD para frontend", inicio: "2024-09-10", fin: "2024-09-25", conteo: 80, estado: "Completado", colorEstado: "success" },
  { idTarea: "T-300", empleado: "Sofía Gómez", tarea: "Análisis de rendimiento del servidor", inicio: "2024-10-12", fin: "2024-10-12", conteo: 10, estado: "Bloqueado", colorEstado: "danger" },
  { idTarea: "T-204", empleado: "Carlos Ruiz", tarea: "Actualización de dependencias NPM", inicio: "2024-10-18", fin: "2024-10-22", conteo: 25, estado: "Pendiente", colorEstado: "warning" },
  { idTarea: "T-010", empleado: "Elena López", tarea: "Documentación de endpoints de pago", inicio: "2024-10-19", fin: "2024-10-24", conteo: 45, estado: "Completado", colorEstado: "success" },
];

// --- 2. Componente EstadoPill ---

interface EstadoPillProps {
  etiqueta: Estado;
  color: ColorKey;
}

const EstadoPill: React.FC<EstadoPillProps> = ({ etiqueta, color }) => {
  const c = clasesColor[color];
  return (
    <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold border ${c.borde} ${c.texto} ${c.fondo} whitespace-nowrap`}>
      <span className={`w-2.5 h-2.5 rounded-full ${c.punto} shadow-sm`}></span>
      {etiqueta}
    </span>
  );
};

// --- 3. Componente DataTable (Modificado para usar iconos) ---

const DataTable: React.FC = () => {
  const [busqueda, setBusqueda] = useState("");
  const [pagina, setPagina] = useState(1);
  const porPagina = 5;

  // Las columnas están bien definidas
  const columnas = [
    { key: "empleado", encabezado: "Empleado" },
    { key: "idTarea", encabezado: "ID Tarea" },
    { key: "tarea", encabezado: "Detalles de Tarea" },
    { key: "inicio", encabezado: "Fecha Inicio" },
    { key: "fin", encabezado: "Fecha Fin" },
    { key: "conteo", encabezado: "Conteo", alineacion: "center" },
    { key: "estado", encabezado: "Estado" },
  ];

  // Lógica de filtrado
  const filtrados = useMemo(() => {
    if (!busqueda) return datosTareas;
    const k = busqueda.toLowerCase();

    return datosTareas.filter((fila) =>
      Object.values(fila).some((v) => String(v).toLowerCase().includes(k))
    );
  }, [busqueda]);

  // Lógica de paginación
  const totalPaginas = Math.max(1, Math.ceil(filtrados.length / porPagina));
  const datosPagina = useMemo(() => {
    const inicio = (pagina - 1) * porPagina;
    return filtrados.slice(inicio, inicio + porPagina);
  }, [filtrados, pagina]);

  const indiceInicio = Math.min(filtrados.length, (pagina - 1) * porPagina + 1);
  const indiceFin = Math.min(pagina * porPagina, filtrados.length);

  // Manejadores de acción (sustituyendo alert por mensajes más útiles/icons)
  const handleVer = (idTarea: string) => {
    // Usar alert/confirm solo para acciones simuladas, como en el código original.
    alert(`Visualizando detalles de la tarea: ${idTarea}`);
  };

  const handleEliminar = (idTarea: string) => {
    if (window.confirm(`¿Seguro que desea ELIMINAR la tarea ${idTarea}?`)) {
        alert(`Tarea ${idTarea} eliminada (simulación).`);
    }
  };

  const handleEditar = (idTarea: string) => {
    alert(`Abriendo formulario para EDITAR la tarea: ${idTarea}`);
  };

  return (
    <div className="w-full">
      {/* Barra de búsqueda y contador */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-5">
        <div className="flex items-center gap-2 text-sm">
          <span className="inline-flex items-center gap-1 px-3 py-2 bg-sky-500 rounded-full text-white font-medium shadow-md">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
            Tareas Totales: {filtrados.length}
          </span>
        </div>

        <div className="relative w-full sm:w-80">
          <svg className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            type="text"
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-sky-500 focus:border-sky-500 shadow-sm transition"
            placeholder="Buscar en todas las columnas..."
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
          />
        </div>
      </div>

      {/* Tabla */}
      <div className="overflow-x-auto rounded-xl shadow-2xl border border-gray-100">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-sky-700">
            <tr>
              {columnas.map((col) => (
                <th
                  key={col.key}
                  className={`px-6 py-3 text-left text-xs font-semibold text-white uppercase tracking-wider ${
                    col.alineacion === "center" ? "text-center" : col.alineacion === "right" ? "text-right" : ""
                  }`}
                >
                  {col.encabezado}
                </th>
              ))}
              <th className="px-6 py-3 text-right text-xs font-semibold text-white uppercase tracking-wider w-[120px]">
                Acciones
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-100">
            {datosPagina.length === 0 ? (
                <tr>
                    <td colSpan={columnas.length + 1} className="text-center py-8 text-gray-500 italic">
                        No se encontraron resultados para la búsqueda.
                    </td>
                </tr>
            ) : (
                datosPagina.map((fila) => (
                    <tr key={fila.idTarea} className="hover:bg-sky-50 transition-colors">
                      {columnas.map((col) => (
                        <td key={col.key} className={`px-6 py-4 text-sm text-gray-700 ${
                            col.alineacion === "center" ? "text-center" : col.alineacion === "right" ? "text-right" : "text-left"
                        }`}>
                          {col.key === 'estado' ? (
                            <EstadoPill etiqueta={fila.estado} color={fila.colorEstado} />
                          ) : (
                            fila[col.key as keyof Tarea]
                          )}
                        </td>
                      ))}
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <div className="flex justify-end gap-2">
                            {/* Ver */}
                            <button
                                onClick={() => handleVer(fila.idTarea)}
                                title="Ver detalles"
                                className="text-sky-600 hover:text-sky-900 p-2 rounded-full hover:bg-sky-100 transition duration-150"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
                            </button>
                            {/* Editar */}
                            <button
                                onClick={() => handleEditar(fila.idTarea)}
                                title="Editar tarea"
                                className="text-yellow-600 hover:text-yellow-800 p-2 rounded-full hover:bg-yellow-100 transition duration-150"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>
                            </button>
                            {/* Eliminar */}
                            <button
                                onClick={() => handleEliminar(fila.idTarea)}
                                title="Eliminar tarea"
                                className="text-red-600 hover:text-red-800 p-2 rounded-full hover:bg-red-100 transition duration-150"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                            </button>
                        </div>
                      </td>
                    </tr>
                  ))
            )}
          </tbody>
        </table>
      </div>

      {/* Paginación */}
      <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
        <div className="text-sm text-gray-600">
          Mostrando **{indiceInicio} a {indiceFin}** de **{filtrados.length}** registros
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setPagina(Math.max(1, pagina - 1))}
            disabled={pagina === 1}
            className={`px-4 py-2 rounded-xl text-sm font-medium transition-all shadow-md ${
              pagina === 1
                ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                : "bg-sky-600 text-white hover:bg-sky-700"
            }`}
          >
            Anterior
          </button>
          <span className="text-sm font-semibold text-gray-800 bg-gray-100 px-3 py-1.5 rounded-full">
            Página {pagina} de {totalPaginas}
          </span>
          <button
            onClick={() => setPagina(Math.min(totalPaginas, pagina + 1))}
            disabled={pagina === totalPaginas}
            className={`px-4 py-2 rounded-xl text-sm font-medium transition-all shadow-md ${
              pagina === totalPaginas
                ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                : "bg-sky-600 text-white hover:bg-sky-700"
            }`}
          >
            Siguiente
          </button>
        </div>
      </div>
    </div>
  );
};

// --- 4. Componente Principal y Renderizado ---

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-10">
      <script src="https://cdn.tailwindcss.com"></script>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap');
        body { font-family: 'Inter', sans-serif; }
      `}</style>
      <header className="mb-8">
        <h1 className="text-4xl font-extrabold text-gray-800 border-b-4 border-sky-500 pb-2 inline-block">
          Gestión de Tareas de Empleados
        </h1>
        <p className="mt-2 text-gray-600">
          Visualización y control de las tareas asignadas con paginación y búsqueda integrada.
        </p>
      </header>
      <section className="bg-white p-6 rounded-3xl shadow-2xl">
        <DataTable />
      </section>
    </div>
  );
};

// Configuración del renderizado
const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(<App />);
}
