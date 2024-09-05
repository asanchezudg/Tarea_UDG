import { NextResponse } from 'next/server';
import { query } from '../../lib/db';


export async function GET() {
  try {
    const tasks = await query('SELECT * FROM tasks');
    return NextResponse.json(tasks);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function PUT(request) {
  try {
    const { id, completed, calificacion } = await request.json();
    let updateQuery = '';
    let updateValues = [];

    if (completed !== undefined) {
      updateQuery = 'UPDATE tasks SET completed = ? WHERE id = ?';
      updateValues = [completed, id];
    } else if (calificacion !== undefined) {
      updateQuery = 'UPDATE tasks SET calificacion = ? WHERE id = ?';
      updateValues = [calificacion, id];
    } else {
      return NextResponse.json({ error: 'Invalid update parameters' }, { status: 400 });
    }

    await query(updateQuery, updateValues);
    const [updatedTask] = await query('SELECT * FROM tasks WHERE id = ?', [id]);
    
    return NextResponse.json(updatedTask);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
  
}