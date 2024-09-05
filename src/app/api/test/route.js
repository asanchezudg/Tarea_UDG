import { NextResponse } from 'next/server';

export async function PUT(request) {
  return NextResponse.json({ message: 'PUT request received' });
}