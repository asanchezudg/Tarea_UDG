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
    const { id, completed } = await request.json();
    await query('UPDATE tasks SET completed = ? WHERE id = ?', [completed, id]);
    const [updatedTask] = await query('SELECT * FROM tasks WHERE id = ?', [id]);
    return NextResponse.json(updatedTask);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}