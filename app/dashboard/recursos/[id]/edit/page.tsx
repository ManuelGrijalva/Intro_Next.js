import EditRecursoForm from '@/app/ui/recursos/edit-form';
import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';
import { notFound } from 'next/navigation';

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function Page({ params }: PageProps) {
  const resolvedParams = await params;
  const id = resolvedParams.id;

  // TODO: Fetch recurso data from API
  // const recurso = await fetchRecursoById(id);
  // if (!recurso) {
  //   notFound();
  // }

  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Recursos', href: '/dashboard/recursos' },
          {
            label: 'Editar Recurso',
            href: `/dashboard/recursos/${id}/edit`,
            active: true,
          },
        ]}
      />
      <EditRecursoForm id={id} />
    </main>
  );
}
