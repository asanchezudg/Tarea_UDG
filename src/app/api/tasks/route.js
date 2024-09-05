import { NextResponse } from 'next/server';
import { query } from '../../lib/db';

// Función para manejar CORS
function handleCORS(response) {
  response.headers.set('Access-Control-Allow-Origin', '*'); // Permitir cualquier origen
  response.headers.set('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS'); // Métodos permitidos
  response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization'); // Encabezados permitidos
  return response;
}

// Método GET para obtener todas las tareas
export async function GET() {
  try {
    const tasks = await query('SELECT * FROM tasks');
    let response = NextResponse.json(tasks);
    return handleCORS(response); // Aplicar CORS
  } catch (error) {
    let response = NextResponse.json({ error: error.message }, { status: 500 });
    return handleCORS(response); // Aplicar CORS
  }
}

// Método PUT para actualizar una tarea (completada o calificación)
export async function PUT(request) {
  try {
    const { id, completed, calificacion } = await request.json();

    // Validación básica de parámetros
    if (!id) {
      let response = NextResponse.json({ error: 'El ID de la tarea es obligatorio' }, { status: 400 });
      return handleCORS(response); // Aplicar CORS
    }

    if (completed === undefined && calificacion === undefined) {
      let response = NextResponse.json({ error: 'Debes proporcionar completed o calificacion para actualizar' }, { status: 400 });
      return handleCORS(response); // Aplicar CORS
    }

    // Construcción de la consulta SQL dinámica
    const updateFields = [];
    const updateValues = [];

    if (completed !== undefined) {
      updateFields.push('completed = ?');
      updateValues.push(completed);
    }

    if (calificacion !== undefined) {
      updateFields.push('calificacion = ?');
      updateValues.push(calificacion);
    }

    // Formar la consulta SQL final
    const updateQuery = `UPDATE tasks SET ${updateFields.join(', ')} WHERE id = ?`;
    updateValues.push(id); // Agregar el ID al final de los valores

    // Ejecutar la actualización
    await query(updateQuery, updateValues);

    // Recuperar la tarea actualizada
    const [updatedTask] = await query('SELECT * FROM tasks WHERE id = ?', [id]);

    let response = NextResponse.json(updatedTask);
    return handleCORS(response); // Aplicar CORS
  } catch (error) {
    let response = NextResponse.json({ error: error.message }, { status: 500 });
    return handleCORS(response); // Aplicar CORS
  }
}

// Método OPTIONS para manejar preflight requests de CORS
export async function OPTIONS() {
  let response = NextResponse.json({});
  return handleCORS(response); // Aplicar CORS
}
