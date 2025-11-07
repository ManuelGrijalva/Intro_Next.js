// app/ui/dashboard/proyectos-chart.tsx
import { CalendarIcon } from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';
import { componenteAClient } from '@/app/lib/api-clients';

export default async function ProyectosChart() {
  try {
    const estadisticas = await componenteAClient.getEstadisticasProyectos();
    const proyectosPorEstado = estadisticas.datos?.proyectosPorEstado || {};

    // Convertir los datos para el gráfico
    const chartData = Object.entries(proyectosPorEstado).map(([estado, cantidad]) => ({
      estado: estado.replace('_', ' '),
      cantidad: Number(cantidad) || 0,
    }));

    const total = chartData.reduce((sum, item) => sum + item.cantidad, 0);

    return (
      <div className="w-full md:col-span-4">
        <h2 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
          Proyectos por Estado
        </h2>

        <div className="rounded-xl bg-gray-50 p-4">
          {chartData.length > 0 ? (
            <div className="space-y-4">
              {chartData.map((item) => {
                const percentage = total > 0 ? (item.cantidad / total) * 100 : 0;

                return (
                  <div key={item.estado} className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <CalendarIcon className="h-5 w-5 text-gray-600" />
                      <span className="text-sm font-medium capitalize">
                        {item.estado}
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-32 bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                          style={{ width: `${percentage}%` }}
                        ></div>
                      </div>
                      <span className="text-sm font-bold min-w-[2rem] text-right">
                        {item.cantidad}
                      </span>
                    </div>
                  </div>
                );
              })}

              <div className="border-t pt-4 mt-4">
                <div className="flex justify-between text-sm">
                  <span className="font-medium">Total de Proyectos:</span>
                  <span className="font-bold">{total}</span>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center py-8 text-gray-500">
              <CalendarIcon className="h-12 w-12 mx-auto mb-2 text-gray-300" />
              <p>No hay datos de proyectos disponibles</p>
              <p className="text-xs mt-1">Asegúrate de que el Componente A esté ejecutándose</p>
            </div>
          )}
        </div>
      </div>
    );
  } catch (error) {
    console.error('Error fetching projects chart data:', error);

    return (
      <div className="w-full md:col-span-4">
        <h2 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
          Proyectos por Estado
        </h2>

        <div className="rounded-xl bg-gray-50 p-4">
          <div className="text-center py-8 text-red-500">
            <CalendarIcon className="h-12 w-12 mx-auto mb-2 text-red-300" />
            <p>Error al cargar datos de proyectos</p>
            <p className="text-xs mt-1">Verifica que el Componente A esté ejecutándose en el puerto 8080</p>
          </div>
        </div>
      </div>
    );
  }
}
