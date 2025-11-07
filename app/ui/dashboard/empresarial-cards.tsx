// app/ui/dashboard/empresarial-cards.tsx
import {
  BanknotesIcon,
  ClockIcon,
  UserGroupIcon,
  InboxIcon,
  DocumentTextIcon,
  ChartBarIcon,
} from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';
import { componenteAClient, componenteBClient } from '@/app/lib/api-clients';

const iconMap = {
  proyectos: UserGroupIcon,
  recursos: InboxIcon,
  documentos: DocumentTextIcon,
  reportes: ChartBarIcon,
  presupuesto: BanknotesIcon,
  progreso: ClockIcon,
};

export default async function EmpresarialCards() {
  try {
    // Obtener estadísticas de ambos componentes
    const [estadisticasProyectos, estadisticasDocumentos, estadisticasRecursos, estadisticasReportes] = await Promise.all([
      componenteAClient.getEstadisticasProyectos().catch(() => ({ datos: {} })),
      componenteBClient.getEstadisticasDocumentos().catch(() => ({ datos: {} })),
      componenteAClient.getEstadisticasRecursos().catch(() => ({ datos: {} })),
      componenteBClient.getEstadisticasReportes().catch(() => ({ datos: {} })),
    ]);

    const proyectosData = estadisticasProyectos.datos || {};
    const documentosData = estadisticasDocumentos.datos || {};
    const recursosData = estadisticasRecursos.datos || {};
    const reportesData = estadisticasReportes.datos || {};

    return (
      <>
        <Card
          title="Total Proyectos"
          value={proyectosData.totalProyectos || 0}
          type="proyectos"
          subtitle="Proyectos activos"
        />
        <Card
          title="Total Recursos"
          value={recursosData.totalRecursos || 0}
          type="recursos"
          subtitle="Recursos asignados"
        />
        <Card
          title="Documentos"
          value={documentosData.totalDocumentos || 0}
          type="documentos"
          subtitle="Documentos gestionados"
        />
        <Card
          title="Reportes"
          value={reportesData.totalReportes || 0}
          type="reportes"
          subtitle="Reportes generados"
        />
      </>
    );
  } catch (error) {
    console.error('Error fetching empresarial data:', error);
    return (
      <>
        <Card title="Total Proyectos" value={0} type="proyectos" subtitle="Error al cargar" />
        <Card title="Total Recursos" value={0} type="recursos" subtitle="Error al cargar" />
        <Card title="Documentos" value={0} type="documentos" subtitle="Error al cargar" />
        <Card title="Reportes" value={0} type="reportes" subtitle="Error al cargar" />
      </>
    );
  }
}

export function Card({
  title,
  value,
  type,
  subtitle,
}: {
  title: string;
  value: number | string;
  type: 'proyectos' | 'recursos' | 'documentos' | 'reportes' | 'presupuesto' | 'progreso';
  subtitle?: string;
}) {
  const Icon = iconMap[type];

  return (
    <div className="rounded-xl bg-gray-50 p-2 shadow-sm">
      <div className="flex p-4">
        {Icon ? <Icon className="h-5 w-5 text-gray-700" /> : null}
        <h3 className="ml-2 text-sm font-medium">{title}</h3>
      </div>
      <p
        className={`${lusitana.className}
          truncate rounded-xl bg-white px-4 py-8 text-center text-2xl`}
      >
        {value}
      </p>
      {subtitle && (
        <p className="text-xs text-gray-500 text-center mt-1">{subtitle}</p>
      )}
    </div>
  );
}
