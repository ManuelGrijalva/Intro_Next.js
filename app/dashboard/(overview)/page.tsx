import { Suspense } from 'react';
import { lusitana } from '@/app/ui/fonts';
import EmpresarialCards from '@/app/ui/dashboard/empresarial-cards';
import ProyectosChart from '@/app/ui/dashboard/proyectos-chart';
import UltimosProyectos from '@/app/ui/dashboard/ultimos-proyectos';
import {
  CardsSkeleton,
  RevenueChartSkeleton,
  LatestInvoicesSkeleton,
} from '@/app/ui/skeletons';

export default async function Page() {
  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Dashboard Empresarial - Sistema de Gestión Logística
      </h1>

      {/* Métricas principales */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Suspense fallback={<CardsSkeleton />}>
          <EmpresarialCards />
        </Suspense>
      </div>

      {/* Gráficos y estadísticas */}
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        <Suspense fallback={<RevenueChartSkeleton />}>
          <ProyectosChart />
        </Suspense>

        <Suspense fallback={<LatestInvoicesSkeleton />}>
          <UltimosProyectos />
        </Suspense>
      </div>

      {/* Enlaces rápidos a APIs */}
      <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="rounded-lg bg-blue-50 p-4">
          <h3 className="text-lg font-semibold text-blue-900">Componente A - Operaciones</h3>
          <p className="text-blue-700 mb-2">Gestión de proyectos y recursos (Puerto 8080)</p>
          <a
            href="http://localhost:8080/swagger-ui.html"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
          >
            Ver API Swagger
          </a>
        </div>

        <div className="rounded-lg bg-green-50 p-4">
          <h3 className="text-lg font-semibold text-green-900">Componente B - Documentos</h3>
          <p className="text-green-700 mb-2">Gestión de documentos y reportes (Puerto 8081)</p>
          <a
            href="http://localhost:8081/swagger-ui.html"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors"
          >
            Ver API Swagger
          </a>
        </div>
      </div>
    </main>
  );
}