import { Suspense } from 'react';
import { lusitana } from '@/app/ui/fonts';
import { RecursosTable } from '@/app/ui/recursos/table';
import { CreateRecurso } from '@/app/ui/recursos/buttons';
import Search from '@/app/ui/search';
import { InvoicesTableSkeleton } from '@/app/ui/skeletons';

export default async function Page({
  searchParams,
}: {
  searchParams?: Promise<{
    query?: string;
    page?: string;
  }>;
}) {
  const resolvedSearchParams = await searchParams;
  const query = resolvedSearchParams?.query || '';
  const currentPage = Number(resolvedSearchParams?.page) || 1;

  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className={`${lusitana.className} text-2xl`}>Recursos</h1>
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search placeholder="Buscar recursos..." />
        <CreateRecurso />
      </div>
      <div className="mt-6 flow-root">
        <div className="inline-block min-w-full align-middle">
          <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
            <div className="text-center py-8 text-gray-500">
              <p>Gestión de recursos empresariales</p>
              <p className="text-sm mt-2">Funcionalidad en desarrollo - Usa las APIs de Swagger</p>
              <a
                href="http://localhost:8080/swagger-ui.html"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-3 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                Ver API de Recursos
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


