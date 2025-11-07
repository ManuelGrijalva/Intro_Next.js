import CreateRecursoForm from '@/app/ui/recursos/create-form';
import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';

export default async function Page() {
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Recursos', href: '/dashboard/recursos' },
          {
            label: 'Crear Recurso',
            href: '/dashboard/recursos/create',
            active: true,
          },
        ]}
      />
      <CreateRecursoForm />
    </main>
  );
}
