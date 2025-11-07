import Link from 'next/link';
import { lusitana } from '@/app/ui/fonts';
import {
  BriefcaseIcon,
  DocumentTextIcon,
  CubeIcon,
  ChartBarIcon,
  ServerIcon
} from '@heroicons/react/24/outline';

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Header */}
      <div className="flex h-20 shrink-0 items-end rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 p-4 md:h-32">
        <div className="w-32 text-white md:w-40">
          <div className="flex items-center space-x-2">
            <ServerIcon className="h-8 w-8" />
            <span className={`${lusitana.className} text-xl font-bold`}>
              Sistema Empresarial
            </span>
          </div>
        </div>
      </div>

      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        {/* Información del Sistema */}
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
          <div className="space-y-4">
            <h1 className={`${lusitana.className} text-3xl font-bold text-gray-900`}>
              Sistema de Gestión Logística
            </h1>
            <p className="text-lg text-gray-700">
              Plataforma empresarial completa con <strong>microservicios integrados</strong> para
              gestión de proyectos, recursos, documentos y reportes.
            </p>

            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <BriefcaseIcon className="h-6 w-6 text-blue-600" />
                <span className="text-gray-700">Gestión de Proyectos y Recursos</span>
              </div>
              <div className="flex items-center space-x-3">
                <DocumentTextIcon className="h-6 w-6 text-green-600" />
                <span className="text-gray-700">Sistema Documental Avanzado</span>
              </div>
              <div className="flex items-center space-x-3">
                <ChartBarIcon className="h-6 w-6 text-purple-600" />
                <span className="text-gray-700">Reportes y Analytics</span>
              </div>
              <div className="flex items-center space-x-3">
                <CubeIcon className="h-6 w-6 text-orange-600" />
                <span className="text-gray-700">Control de Inventario</span>
              </div>
            </div>
          </div>

          <Link
            href="/dashboard"
            className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
          >
            <span>Acceder al Dashboard</span>
          </Link>
        </div>

        {/* Información Técnica */}
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
          <div className="grid gap-6 md:grid-cols-2">
            {/* Componente A */}
            <div className="rounded-lg bg-white p-6 shadow-lg border border-blue-200">
              <div className="flex items-center mb-4">
                <ServerIcon className="h-8 w-8 text-blue-600 mr-3" />
                <div>
                  <h3 className="text-lg font-semibold text-blue-900">Componente A</h3>
                  <p className="text-sm text-blue-600">Operaciones</p>
                </div>
              </div>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Puerto: 8080</li>
                <li>• Base de Datos: PostgreSQL</li>
                <li>• Gestión de Proyectos</li>
                <li>• Control de Recursos</li>
              </ul>
              <a
                href="http://localhost:8080/swagger-ui.html"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-3 text-blue-600 text-sm hover:text-blue-800"
              >
                Ver API Swagger →
              </a>
            </div>

            {/* Componente B */}
            <div className="rounded-lg bg-white p-6 shadow-lg border border-green-200">
              <div className="flex items-center mb-4">
                <ServerIcon className="h-8 w-8 text-green-600 mr-3" />
                <div>
                  <h3 className="text-lg font-semibold text-green-900">Componente B</h3>
                  <p className="text-sm text-green-600">Documentos</p>
                </div>
              </div>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Puerto: 8081</li>
                <li>• Base de Datos: MySQL</li>
                <li>• Gestión Documental</li>
                <li>• Reportes Avanzados</li>
              </ul>
              <a
                href="http://localhost:8081/swagger-ui.html"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-3 text-green-600 text-sm hover:text-green-800"
              >
                Ver API Swagger →
              </a>
            </div>

            {/* Dashboard */}
            <div className="rounded-lg bg-white p-6 shadow-lg border border-purple-200 md:col-span-2">
              <div className="flex items-center mb-4">
                <ChartBarIcon className="h-8 w-8 text-purple-600 mr-3" />
                <div>
                  <h3 className="text-lg font-semibold text-purple-900">Dashboard Empresarial</h3>
                  <p className="text-sm text-purple-600">Next.js Frontend</p>
                </div>
              </div>
              <p className="text-sm text-gray-600 mb-3">
                Interfaz unificada para gestión completa del sistema con métricas en tiempo real,
                CRUD de entidades y navegación intuitiva.
              </p>
              <Link
                href="/dashboard"
                className="inline-block bg-purple-600 text-white px-4 py-2 rounded text-sm hover:bg-purple-700 transition-colors"
              >
                Acceder al Dashboard
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-8 bg-gray-100 p-4 text-center text-sm text-gray-600">
        <p>Sistema Empresarial de Gestión Logística - Arquitectura de Microservicios</p>
        <p className="mt-1">Componente A (PostgreSQL) • Componente B (MySQL) • Frontend (Next.js)</p>
      </footer>
    </main>
  );
}
