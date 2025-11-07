// app/dashboard/proyectos/page.tsx
import { Suspense } from 'react';
import { lusitana } from '@/app/ui/fonts';
import { ProyectosTable } from '@/app/ui/proyectos/table';
import { CreateProyecto } from '@/app/ui/proyectos/buttons';
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
        <h1 className={`${lusitana.className} text-2xl`}>Proyectos</h1>
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search placeholder="Buscar proyectos..." />
        <CreateProyecto />
      </div>
      <Suspense key={query + currentPage} fallback={<InvoicesTableSkeleton />}>
        <ProyectosTable query={query} currentPage={currentPage} />
      </Suspense>
    </div>
  );
}
