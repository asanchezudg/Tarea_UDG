'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const CalificacionesResumen = () => {
  const [resumen, setResumen] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchResumen() {
      try {
        const response = await fetch('/api/calificaciones-resumen');
        if (!response.ok) {
          throw new Error('Error al obtener los datos');
        }
        const data = await response.json();
        setResumen(data);
      } catch (error) {
        setError(error.message);
      }
    }
    fetchResumen();
  }, []);

  if (error) {
    return (
      <div className="container mx-auto p-4 md:max-w-4xl">
        <h1 className="text-2xl md:text-3xl font-bold mb-4">Error</h1>
        <p className="text-red-500">{error}</p>
        <Link href="/" className="mb-4 inline-block bg-blue-500 text-white px-4 py-2 rounded">
          Volver a la Lista de Tareas
        </Link>
      </div>
    );
  }

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
            <p>Calificación al momento: {suma?.toFixed(2)}</p>
            <p>Número de tareas calificadas: {count}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CalificacionesResumen;
