import EditReporteForm from '@/app/ui/reportes/edit-form';
import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';
import { notFound } from 'next/navigation';

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function Page({ params }: PageProps) {
  const resolvedParams = await params;
  const id = resolvedParams.id;

  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Reportes', href: '/dashboard/reportes' },
          {
            label: 'Editar Reporte',
            href: `/dashboard/reportes/${id}/edit`,
            active: true,
          },
        ]}
      />
      <EditReporteForm id={id} />
    </main>
  );
}
