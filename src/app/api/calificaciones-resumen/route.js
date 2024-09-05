import { query } from '../../lib/db';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const result = await query(`
      SELECT 
        Materia, 
        SUM(calificacion) as suma, 
        COUNT(*) as count
      FROM 
        tasks 
      WHERE 
        completed = 1 AND calificacion IS NOT NULL
      GROUP BY 
        Materia
    `);

    // Procesar el resultado y devolver el resumen en formato JSON
    const resumen = result.reduce((acc, { Materia, suma, count }) => {
      acc[Materia] = { suma: parseFloat(suma), count: parseInt(count) };
      return acc;
    }, {});

    return NextResponse.json(resumen);
  } catch (error) {
    console.error('Error en la ruta API de calificaciones-resumen:', error);
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    );
  }
}
