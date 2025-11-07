// app/ui/proyectos/table.tsx
import { UpdateProyecto, DeleteProyecto } from '@/app/ui/proyectos/buttons';
import { formatDateToLocal, formatCurrency } from '@/app/lib/utils';
import { componenteAClient } from '@/app/lib/api-clients';

export async function ProyectosTable({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  try {
    const response = await componenteAClient.getProyectos(currentPage - 1, 10);
    const proyectos = response.datos?.content || [];

    return (
      <div className="mt-6 flow-root">
        <div className="inline-block min-w-full align-middle">
          <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
            <div className="md:hidden">
              {proyectos?.map((proyecto: any) => (
                <div
                  key={proyecto.id}
                  className="mb-2 w-full rounded-md bg-white p-4"
                >
                  <div className="flex items-center justify-between border-b pb-4">
                    <div>
                      <div className="mb-2 flex items-center">
                        <p className="text-sm font-medium">{proyecto.nombre}</p>
                      </div>
                      <p className="text-sm text-gray-500">{proyecto.codigoProyecto}</p>
                    </div>
                    <ProyectoStatus estado={proyecto.estado} />
                  </div>
                  <div className="flex w-full items-center justify-between pt-4">
                    <div>
                      <p className="text-xl font-medium">
                        {formatCurrency(proyecto.presupuestoTotal)}
                      </p>
                      <p className="text-sm text-gray-500">{proyecto.clienteResponsable}</p>
                    </div>
                    <div className="flex justify-end gap-2">
                      <UpdateProyecto id={proyecto.id} />
                      <DeleteProyecto id={proyecto.id} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <table className="hidden min-w-full text-gray-900 md:table">
              <thead className="rounded-lg text-left text-sm font-normal">
                <tr>
                  <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                    Proyecto
                  </th>
                  <th scope="col" className="px-3 py-5 font-medium">
                    Cliente Responsable
                  </th>
                  <th scope="col" className="px-3 py-5 font-medium">
                    Presupuesto
                  </th>
                  <th scope="col" className="px-3 py-5 font-medium">
                    Fecha Inicio
                  </th>
                  <th scope="col" className="px-3 py-5 font-medium">
                    Estado
                  </th>
                  <th scope="col" className="relative py-3 pl-6 pr-3">
                    <span className="sr-only">Editar</span>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {proyectos?.map((proyecto: any) => (
                  <tr
                    key={proyecto.id}
                    className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                  >
                    <td className="whitespace-nowrap py-3 pl-6 pr-3">
                      <div className="flex items-center gap-3">
                        <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center">
                          <span className="text-xs font-medium text-blue-600">
                            {proyecto.nombre.charAt(0).toUpperCase()}
                          </span>
                        </div>
                        <div>
                          <p className="font-medium">{proyecto.nombre}</p>
                          <p className="text-sm text-gray-500">{proyecto.codigoProyecto}</p>
                        </div>
                      </div>
                    </td>
                    <td className="whitespace-nowrap px-3 py-3">
                      {proyecto.clienteResponsable}
                    </td>
                    <td className="whitespace-nowrap px-3 py-3">
                      {formatCurrency(proyecto.presupuestoTotal)}
                    </td>
                    <td className="whitespace-nowrap px-3 py-3">
                      {formatDateToLocal(proyecto.fechaInicio)}
                    </td>
                    <td className="whitespace-nowrap px-3 py-3">
                      <ProyectoStatus estado={proyecto.estado} />
                    </td>
                    <td className="whitespace-nowrap py-3 pl-6 pr-3">
                      <div className="flex justify-end gap-3">
                        <UpdateProyecto id={proyecto.id} />
                        <DeleteProyecto id={proyecto.id} />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error('Error fetching proyectos:', error);
    return (
      <div className="mt-6 flow-root">
        <div className="text-center py-8 text-red-500">
          <p>Error al cargar proyectos</p>
          <p className="text-sm mt-1">Verifica que el Componente A esté ejecutándose</p>
        </div>
      </div>
    );
  }
}

export function ProyectoStatus({ estado }: { estado: string }) {
  const colorMap: { [key: string]: string } = {
    'PLANIFICACION': 'bg-yellow-100 text-yellow-600',
    'EN_CURSO': 'bg-blue-100 text-blue-600',
    'COMPLETADO': 'bg-green-100 text-green-600',
    'EN_PAUSA': 'bg-orange-100 text-orange-600',
    'CANCELADO': 'bg-red-100 text-red-600',
    'REVISION': 'bg-purple-100 text-purple-600',
  };

  const colorClass = colorMap[estado] || 'bg-gray-100 text-gray-600';

  return (
    <span className={`inline-flex items-center rounded-full px-2 py-1 text-xs ${colorClass}`}>
      {estado.replace('_', ' ')}
    </span>
  );
}
