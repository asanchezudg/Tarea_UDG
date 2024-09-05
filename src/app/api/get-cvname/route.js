import { query } from '../../../app/lib/db';
import { NextResponse } from 'next/server';

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const email = searchParams.get('email');

    if (!email) {
      return NextResponse.json({ success: false, message: 'Email no proporcionado' }, { status: 400 });
    }

    // Consultar la tabla UserCVs para obtener el nombre del archivo cargado
    const cvResult = await query('SELECT file_name FROM UserCVs WHERE email = ?', [email]);

    if (cvResult.length === 0) {
      return NextResponse.json({ success: false, message: 'Archivo no encontrado' }, { status: 404 });
    }

    // Obtener el nombre del archivo
    const fileName = cvResult[0].file_name;

    return NextResponse.json({
      success: true,
      data: { fileName }
    });
  } catch (error) {
    console.error('Error fetching CV name:', error);
    return NextResponse.json(
      { success: false, message: 'Error al obtener el nombre del archivo', error: error.message },
      { status: 500 }
    );
  }
}
