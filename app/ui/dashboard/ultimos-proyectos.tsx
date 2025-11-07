// app/ui/dashboard/ultimos-proyectos.tsx
import { ArrowPathIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import { lusitana } from '@/app/ui/fonts';
import { componenteAClient } from '@/app/lib/api-clients';

export default async function UltimosProyectos() {
  try {
    const response = await componenteAClient.getProyectosActivos();
    const proyectos = response.datos || [];

    // Tomar solo los primeros 5 proyectos
    const proyectosRecientes = proyectos.slice(0, 5);

    return (
      <div className="flex w-full flex-col md:col-span-4">
        <h2 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
          Proyectos Activos Recientes
        </h2>
        <div className="flex grow flex-col justify-between rounded-xl bg-gray-50 p-4">
          <div className="bg-white px-6">
            {proyectosRecientes.map((proyecto, i) => {
              const estadoColor = getEstadoColor(proyecto.estado);
              const prioridadColor = getPrioridadColor(proyecto.prioridad);

              return (
                <div
                  key={proyecto.id}
                  className={clsx(
                    'flex flex-row items-center justify-between py-4',
                    {
                      'border-t': i !== 0,
                    },
                  )}
                >
                  <div className="flex items-center">
                    <div className="min-w-0">
                      <p className="truncate text-sm font-semibold md:text-base">
                        {proyecto.nombre}
                      </p>
                      <p className="hidden text-sm text-gray-500 sm:block">
                        {proyecto.codigoProyecto}
                      </p>
                      <p className="text-xs text-gray-400">
                        {proyecto.clienteResponsable}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col items-end space-y-1">
                    <span
                      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${estadoColor}`}
                    >
                      {proyecto.estado.replace('_', ' ')}
                    </span>
                    <span
                      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${prioridadColor}`}
                    >
                      {proyecto.prioridad}
                    </span>
                    {proyecto.presupuestoTotal && (
                      <p className="text-sm font-medium">
                        ${Number(proyecto.presupuestoTotal).toLocaleString()}
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
          <div className="flex items-center pb-2 pt-6">
            <ArrowPathIcon className="h-5 w-5 text-gray-500" />
            <h3 className="ml-2 text-sm text-gray-500">
              {proyectosRecientes.length === 0
                ? 'No hay proyectos activos'
                : `Mostrando ${proyectosRecientes.length} de ${proyectos.length} proyectos`
              }
            </h3>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error('Error fetching latest projects:', error);

    return (
      <div className="flex w-full flex-col md:col-span-4">
        <h2 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
          Proyectos Activos Recientes
        </h2>
        <div className="flex grow flex-col justify-between rounded-xl bg-gray-50 p-4">
          <div className="bg-white px-6 py-8">
            <div className="text-center text-red-500">
              <ArrowPathIcon className="h-12 w-12 mx-auto mb-2 text-red-300" />
              <p>Error al cargar proyectos</p>
              <p className="text-xs mt-1">Verifica que el Componente A esté ejecutándose</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function getEstadoColor(estado: string): string {
  switch (estado) {
    case 'PLANIFICACION':
      return 'bg-yellow-100 text-yellow-800';
    case 'EN_CURSO':
      return 'bg-blue-100 text-blue-800';
    case 'COMPLETADO':
      return 'bg-green-100 text-green-800';
    case 'EN_PAUSA':
      return 'bg-orange-100 text-orange-800';
    case 'CANCELADO':
      return 'bg-red-100 text-red-800';
    case 'REVISION':
      return 'bg-purple-100 text-purple-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
}

function getPrioridadColor(prioridad: string): string {
  switch (prioridad) {
    case 'BAJA':
      return 'bg-gray-100 text-gray-600';
    case 'MEDIA':
      return 'bg-blue-100 text-blue-600';
    case 'ALTA':
      return 'bg-orange-100 text-orange-600';
    case 'CRITICA':
      return 'bg-red-100 text-red-600';
    default:
      return 'bg-gray-100 text-gray-600';
  }
}
