import EditProyectoForm from '@/app/ui/proyectos/edit-form';
import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';
import { notFound } from 'next/navigation';

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function Page({ params }: PageProps) {
  const resolvedParams = await params;
  const id = resolvedParams.id;

  // TODO: Fetch proyecto data from API
  // const proyecto = await fetchProyectoById(id);
  // if (!proyecto) {
  //   notFound();
  // }

  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Proyectos', href: '/dashboard/proyectos' },
          {
            label: 'Editar Proyecto',
            href: `/dashboard/proyectos/${id}/edit`,
            active: true,
          },
        ]}
      />
      <EditProyectoForm id={id} />
    </main>
  );
}
