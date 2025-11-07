import CreateDocumentoForm from '@/app/ui/documentos/create-form';
import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';

export default async function Page() {
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Documentos', href: '/dashboard/documentos' },
          {
            label: 'Crear Documento',
            href: '/dashboard/documentos/create',
            active: true,
          },
        ]}
      />
      <CreateDocumentoForm />
    </main>
  );
}
