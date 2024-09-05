import { query } from '../../lib/db';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const result = await query(`
      SELECT 
        Materia, 
        SUM(CAST(calificacion AS DECIMAL(10,2))) AS suma, 
        COUNT(*) AS count
      FROM 
        tasks 
      WHERE 
        completed = 1 AND calificacion IS NOT NULL
      GROUP BY 
        Materia
    `);

    const resumen = result.reduce((acc, { Materia, suma, count }) => {
      acc[Materia] = { suma: parseFloat(suma), count: parseInt(count, 10) };
      return acc;
    }, {});

    const response = NextResponse.json(resumen);
    response.headers.set('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
    response.headers.set('Pragma', 'no-cache');
    response.headers.set('Expires', '0');
    
    return response;
  } catch (error) {
    console.error('Error en la ruta API de calificaciones-resumen:', error);
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    );
  }
}
