import React from 'react';
import DataTable from "./components/DataTable";
const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-6 sm:p-10">
      <header className="mb-8">
        <h1 className="text-4xl font-extrabold text-gray-800 border-b-4 border-sky-500 pb-2 inline-block">
          Bandeja de Tareas
        </h1>
        <p className="mt-2 text-gray-500">
          Implementación simplificada de tabla interactiva con React y TypeScript.
        </p>
      </header>

      <section className="bg-white p-6 rounded-2xl shadow-xl">
        <DataTable />
      </section>
    </div>
  );
};

export default App;
