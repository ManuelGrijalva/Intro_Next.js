// Middleware temporalmente deshabilitado para acceso directo
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // Permitir acceso directo sin autenticación
  return NextResponse.next()
}

// No aplicar middleware a ninguna ruta por ahora
export const config = {
  matcher: [],
}
