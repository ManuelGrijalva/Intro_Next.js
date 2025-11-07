import EditDocumentoForm from '@/app/ui/documentos/edit-form';
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
          { label: 'Documentos', href: '/dashboard/documentos' },
          {
            label: 'Editar Documento',
            href: `/dashboard/documentos/${id}/edit`,
            active: true,
          },
        ]}
      />
      <EditDocumentoForm id={id} />
    </main>
  );
}
