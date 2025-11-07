import CreateForm from '@/app/ui/proyectos/create-form';
import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';

export default async function Page() {
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Proyectos', href: '/dashboard/proyectos' },
          {
            label: 'Crear Proyecto',
            href: '/dashboard/proyectos/create',
            active: true,
          },
        ]}
      />
      <CreateForm />
    </main>
  );
}
