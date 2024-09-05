// app/components/Navigation.js
'use client';
import Link from 'next/link';
import { useAuth } from '../context/AuthContext';
import { useEffect, useState } from 'react';

export default function Navigation() {
  const { user, logout } = useAuth();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleLogout = () => {
    logout(); // Esta función ahora manejará la redirección
  };

  if (!isClient) {
    return null; // Evita el problema de hidratación
  }

  return (
    <nav>
      <ul className="flex space-x-4">
        <li><Link href="/quiero-contratar" className="text-gray-600">Quiero contratar</Link></li>
        <li><Link href="/quiero-trabajar" className="text-gray-600">Quiero trabajar</Link></li>
        {user ? (
          <>
            <li className="text-gray-600">Hola {user.firstName || user.name}</li>
            <li><Link href="/mi-cuenta" className="bg-green-600 text-white px-4 py-2 rounded">Mi cuenta</Link></li>
            <li><button onClick={handleLogout} className="text-gray-600">Cerrar sesión</button></li>
          </>
        ) : (
          <>
            <li><Link href="/ingresa" className="text-gray-600">Ingresa</Link></li>
            <li><Link href="/registrate" className="bg-green-600 text-white px-4 py-2 rounded">Registrate</Link></li>
          </>
        )}
      </ul>
    </nav>
  );
}