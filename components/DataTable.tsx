import React, { useState, useMemo } from 'react';
import { datosTareas, clasesColor } from '../data';

interface EstadoPillProps {
    etiqueta: string;
    color: keyof typeof clasesColor;
}

const EstadoPill: React.FC<EstadoPillProps> = ({ etiqueta, color }) => {
    const c = clasesColor[color];
    return (
        <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold border ${c.borde} ${c.texto} ${c.fondo}`}>
            <span className={`w-2.5 h-2.5 rounded-full ${c.punto} shadow-sm`}></span>
            {etiqueta}
        </span>
    );
};

const DataTable: React.FC = () => {
  const [busqueda, setBusqueda] = useState("");
  const [pagina, setPagina] = useState(1);
  const porPagina = 5;

  const columnas = [
    { key: "empleado", encabezado: "Empleado" },
    { key: "idTarea", encabezado: "ID Tarea" },
    { key: "tarea", encabezado: "Detalles de Tarea" },
    { key: "inicio", encabezado: "Fecha Inicio" },
    { key: "fin", encabezado: "Fecha Fin" },
    { key: "conteo", encabezado: "Conteo", alineacion: "center" },
    { key: "estado", encabezado: "Estado" },
  ];

  const filtrados = useMemo(() => {
    if (!busqueda) return datosTareas;
    const k = busqueda.toLowerCase();

    return datosTareas.filter((fila) =>
      Object.values(fila).some((v) => String(v).toLowerCase().includes(k))
    );
  }, [busqueda]);

  const totalPaginas = Math.max(1, Math.ceil(filtrados.length / porPagina));

  const datosPagina = useMemo(() => {
    const inicio = (pagina - 1) * porPagina;
    return filtrados.slice(inicio, inicio + porPagina);
  }, [filtrados, pagina]);

  const indiceInicio = Math.min(filtrados.length, (pagina - 1) * porPagina + 1);
  const indiceFin = Math.min(pagina * porPagina, filtrados.length);

  const handleVer = (idTarea: string) => {
    console.log(`Ver detalles de la tarea: ${idTarea}`);
    alert(`Ver detalles de ${idTarea}`);
  };

  const handleEliminar = (idTarea: string) => {
    console.log(`Eliminar tarea: ${idTarea}`);
    alert(`Eliminar tarea ${idTarea}. (En una app real, esto abriría un modal de confirmación)`);
  };

  return (
    <div className="w-full">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-5">
        <div className="flex items-center gap-2 text-sm">
          <span className="inline-flex items-center gap-1 px-3 py-2 bg-sky-500 rounded-full text-white font-medium shadow-md">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
            Tareas Totales: {filtrados.length}
          </span>
        </div>

        <div className="relative w-full sm:w-80">
          <svg className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            type="text"
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
            placeholder="Buscar en todas las columnas..."
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
          />
        </div>
      </div>

      <div className="overflow-x-auto rounded-xl shadow-lg border border-gray-200">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-sky-700">
            <tr>
              {columnas.map((col) => (
                <th
                  key={col.key}
                  className={`px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider ${
                    col.alineacion === "center" ? "text-center" : ""
                  }`}
                >
                  {col.encabezado}
                </th>
              ))}
              <th className="px-6 py-3 text-right text-xs font-medium text-white uppercase tracking-wider">
                Acciones
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-100">
            {datosPagina.map((fila) => (
              <tr key={fila.idTarea} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">{fila.empleado}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{fila.idTarea}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{fila.tarea}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{fila.inicio}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{fila.fin}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-center">
                  <div className="text-sm text-gray-900">{fila.conteo}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <EstadoPill etiqueta={fila.estado} color={fila.colorEstado} />
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button
                    onClick={() => handleVer(fila.idTarea)}
                    className="text-sky-600 hover:text-sky-900 mr-3"
                  >
                    Ver
                  </button>
                  <button
                    onClick={() => handleEliminar(fila.idTarea)}
                    className="text-red-600 hover:text-red-900"
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
        <div className="text-sm text-gray-600">
          Mostrando {indiceInicio} a {indiceFin} de {filtrados.length} registros
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setPagina(Math.max(1, pagina - 1))}
            disabled={pagina === 1}
            className={`px-3 py-1 rounded-md text-sm font-medium ${
              pagina === 1
                ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                : "bg-sky-100 text-sky-600 hover:bg-sky-200"
            }`}
          >
            Anterior
          </button>
          <span className="text-sm text-gray-600">
            Página {pagina} de {totalPaginas}
          </span>
          <button
            onClick={() => setPagina(Math.min(totalPaginas, pagina + 1))}
            disabled={pagina === totalPaginas}
            className={`px-3 py-1 rounded-md text-sm font-medium ${
              pagina === totalPaginas
                ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                : "bg-sky-100 text-sky-600 hover:bg-sky-200"
            }`}
          >
            Siguiente
          </button>
        </div>
      </div>
    </div>
  );
};

export default DataTable;