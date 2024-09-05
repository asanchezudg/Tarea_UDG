'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const CalificacionesResumen = () => {
  const [resumen, setResumen] = useState({});

  useEffect(() => {
    async function fetchResumen() {
      const response = await fetch('/api/calificaciones-resumen');
      const data = await response.json();
      setResumen(data);
    }
    fetchResumen();
  }, []);

  return (
    <div className="container mx-auto p-4 md:max-w-4xl">
      <h1 className="text-2xl md:text-3xl font-bold mb-4">Resumen de Calificaciones por Materia</h1>
      <Link href="/" className="mb-4 inline-block bg-blue-500 text-white px-4 py-2 rounded">
        Volver a la Lista de Tareas
      </Link>
      <ul className="mt-4 space-y-4">
        {Object.entries(resumen).map(([materia, { suma, count }]) => (
            <li key={materia} className="bg-white shadow rounded-lg p-4">
                <h2 className="text-xl font-semibold">{materia}</h2>
                <p>Calificacion al momento: {suma.toFixed(2)}</p>
                {/* <p>Número de tareas calificadas: {count}</p>
                <p>Promedio: {(suma / count).toFixed(2)}</p> */}
            </li>
        ))}
      </ul>
    </div>
  );
};

export default CalificacionesResumen;