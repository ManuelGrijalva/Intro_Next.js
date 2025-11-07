import CreateReporteForm from '@/app/ui/reportes/create-form';
import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';

export default async function Page() {
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Reportes', href: '/dashboard/reportes' },
          {
            label: 'Generar Reporte',
            href: '/dashboard/reportes/create',
            active: true,
          },
        ]}
      />
      <CreateReporteForm />
    </main>
  );
}
