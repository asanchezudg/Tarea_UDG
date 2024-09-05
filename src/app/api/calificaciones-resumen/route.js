import { query } from '../../lib/db';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // Realizar la consulta SQL para obtener el resumen de calificaciones
    const result = await query(`
      SELECT 
        Materia, 
        SUM(calificacion) AS suma, 
        COUNT(*) AS count
      FROM 
        tasks 
      WHERE 
        completed = 1 AND calificacion IS NOT NULL
      GROUP BY 
        Materia
    `);

    // Transformar los resultados en el formato deseado
    const resumen = result.reduce((acc, { Materia, suma, count }) => {
      acc[Materia] = { suma: parseFloat(suma), count: parseInt(count) };
      return acc;
    }, {});

    // Devolver la respuesta en formato JSON
    return NextResponse.json(resumen);
  } catch (error) {
    console.error('Error en la ruta API de calificaciones-resumen:', error);
    // Manejar errores devolviendo un estado 500
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    );
  }
}
