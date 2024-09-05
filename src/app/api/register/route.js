// app/api/register/route.js
import { query } from '../../../app/lib/db';
import { NextResponse } from 'next/server';

export async function POST(request) {
  const { fullName, email, password, userType } = await request.json();

  try {
    const [firstName, ...lastNameParts] = fullName.split(' ');
    const lastName = lastNameParts.join(' ');

    const result = await query(
      'INSERT INTO Users (Username, Email, PasswordHash, FirstName, LastName, UserType, CreatedAt) VALUES (?, ?, ?, ?, ?, ?, NOW())',
      [email, email, password, firstName, lastName, userType]
    );

    if (result.affectedRows) {
      return NextResponse.json({ message: 'Registro exitoso' }, { status: 200 });
    } else {
      return NextResponse.json({ message: 'No se pudo completar el registro' }, { status: 500 });
    }
  } catch (error) {
    console.error('Error al registrar:', error);
    return NextResponse.json({ message: 'Error al registrar', error: error.message }, { status: 500 });
  }
}