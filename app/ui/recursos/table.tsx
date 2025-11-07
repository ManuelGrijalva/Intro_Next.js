import { componenteAClient } from '@/app/lib/api-clients';

export async function RecursosTable({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  return (
    <div className="mt-6 flow-root">
      <div className="text-center py-8 text-gray-500">
        <p>Tabla de Recursos</p>
        <p className="text-sm mt-1">En desarrollo - Usa el API Swagger</p>
      </div>
    </div>
  );
}
