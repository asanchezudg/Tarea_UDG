import { AuthProvider } from './context/AuthContext';
import Navigation from './components/Navigation';
import Link from 'next/link';
import './globals.css';
import Image from 'next/image';  // Asegúrate de que este archivo exista con tus estilos globales

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <AuthProvider>
          <div className="min-h-screen bg-white text-black">
            <div className="container mx-auto px-4">
              <main className="mt-8">
                {children}
              </main>
              <footer className="mt-16 text-center">

              </footer>
            </div>
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}