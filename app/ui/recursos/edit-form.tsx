import { lusitana } from '@/app/ui/fonts';
import { Button } from '@/app/ui/button';
import Link from 'next/link';
import { updateRecurso } from '@/app/lib/actions-proyectos';

interface EditRecursoFormProps {
  id: string;
}

export default function EditRecursoForm({ id }: EditRecursoFormProps) {
  // TODO: Fetch recurso data and populate form
  // const recurso = await fetchRecursoById(id);

  return (
    <div className="rounded-md bg-gray-50 p-4 md:p-6">
      <div className="mb-6">
        <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
          Editar Recurso #{id}
        </h1>
      </div>

      <form action={updateRecurso}>
        <input type="hidden" name="id" value={id} />

        <div className="rounded-md bg-gray-50 p-4 md:p-6">
          {/* Nombre del recurso */}
          <div className="mb-4">
            <label htmlFor="nombre" className="mb-2 block text-sm font-medium">
              Nombre del recurso *
            </label>
            <input
              id="nombre"
              name="nombre"
              type="text"
              placeholder="Ingresa el nombre del recurso"
              className="peer block w-full rounded-md border border-gray-200 py-2 pl-3 text-sm outline-2 placeholder:text-gray-500"
              required
              // defaultValue={recurso?.nombre}
            />
          </div>

          {/* Descripción */}
          <div className="mb-4">
            <label htmlFor="descripcion" className="mb-2 block text-sm font-medium">
              Descripción
            </label>
            <textarea
              id="descripcion"
              name="descripcion"
              placeholder="Describe el recurso..."
              className="peer block w-full rounded-md border border-gray-200 py-2 pl-3 text-sm outline-2 placeholder:text-gray-500"
              rows={3}
              // defaultValue={recurso?.descripcion}
            />
          </div>

          {/* Tipo de recurso */}
          <div className="mb-4">
            <label htmlFor="tipoRecurso" className="mb-2 block text-sm font-medium">
              Tipo de recurso
            </label>
            <select
              id="tipoRecurso"
              name="tipoRecurso"
              className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-3 text-sm outline-2"
              defaultValue="MATERIAL"
            >
              <option value="MATERIAL">Material</option>
              <option value="EQUIPO">Equipo</option>
              <option value="HERRAMIENTA">Herramienta</option>
              <option value="PERSONAL">Personal</option>
              <option value="SERVICIO">Servicio</option>
              <option value="SOFTWARE">Software</option>
              <option value="OTRO">Otro</option>
            </select>
          </div>

          {/* Costos y cantidades */}
          <div className="mb-4 grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <label htmlFor="costoUnitario" className="mb-2 block text-sm font-medium">
                Costo unitario ($) *
              </label>
              <input
                id="costoUnitario"
                name="costoUnitario"
                type="number"
                step="0.01"
                min="0.01"
                placeholder="0.00"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-3 text-sm outline-2 placeholder:text-gray-500"
                required
                // defaultValue={recurso?.costoUnitario}
              />
            </div>
            <div>
              <label htmlFor="cantidad" className="mb-2 block text-sm font-medium">
                Cantidad total *
              </label>
              <input
                id="cantidad"
                name="cantidad"
                type="number"
                min="1"
                placeholder="1"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-3 text-sm outline-2 placeholder:text-gray-500"
                required
                // defaultValue={recurso?.cantidad}
              />
            </div>
          </div>

          {/* Cantidad utilizada */}
          <div className="mb-4">
            <label htmlFor="cantidadUtilizada" className="mb-2 block text-sm font-medium">
              Cantidad utilizada
            </label>
            <input
              id="cantidadUtilizada"
              name="cantidadUtilizada"
              type="number"
              min="0"
              placeholder="0"
              className="peer block w-full rounded-md border border-gray-200 py-2 pl-3 text-sm outline-2 placeholder:text-gray-500"
              // defaultValue={recurso?.cantidadUtilizada}
            />
          </div>

          {/* Proyecto asociado */}
          <div className="mb-4">
            <label htmlFor="proyectoId" className="mb-2 block text-sm font-medium">
              Proyecto asociado *
            </label>
            <select
              id="proyectoId"
              name="proyectoId"
              className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-3 text-sm outline-2"
              required
            >
              <option value="">Seleccionar proyecto...</option>
              <option value="1">Proyecto de prueba 1</option>
              <option value="2">Proyecto de prueba 2</option>
              <option value="3">Proyecto de prueba 3</option>
            </select>
          </div>

          {/* Fecha de asignación */}
          <div className="mb-4">
            <label htmlFor="fechaAsignacion" className="mb-2 block text-sm font-medium">
              Fecha de asignación *
            </label>
            <input
              id="fechaAsignacion"
              name="fechaAsignacion"
              type="datetime-local"
              className="peer block w-full rounded-md border border-gray-200 py-2 pl-3 text-sm outline-2"
              required
              // defaultValue={recurso?.fechaAsignacion}
            />
          </div>

          {/* Estado */}
          <div className="mb-4">
            <label htmlFor="estado" className="mb-2 block text-sm font-medium">
              Estado
            </label>
            <select
              id="estado"
              name="estado"
              className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-3 text-sm outline-2"
              defaultValue="DISPONIBLE"
            >
              <option value="DISPONIBLE">Disponible</option>
              <option value="EN_USO">En uso</option>
              <option value="MANTENIMIENTO">Mantenimiento</option>
              <option value="AGOTADO">Agotado</option>
              <option value="INACTIVO">Inactivo</option>
            </select>
          </div>

          {/* Proveedor */}
          <div className="mb-4">
            <label htmlFor="proveedor" className="mb-2 block text-sm font-medium">
              Proveedor
            </label>
            <input
              id="proveedor"
              name="proveedor"
              type="text"
              placeholder="Nombre del proveedor"
              className="peer block w-full rounded-md border border-gray-200 py-2 pl-3 text-sm outline-2 placeholder:text-gray-500"
              // defaultValue={recurso?.proveedor}
            />
          </div>

          {/* Unidad de medida */}
          <div className="mb-4">
            <label htmlFor="unidadMedida" className="mb-2 block text-sm font-medium">
              Unidad de medida
            </label>
            <input
              id="unidadMedida"
              name="unidadMedida"
              type="text"
              placeholder="Ej: unidades, metros, horas, kg"
              className="peer block w-full rounded-md border border-gray-200 py-2 pl-3 text-sm outline-2 placeholder:text-gray-500"
              // defaultValue={recurso?.unidadMedida}
            />
          </div>

          {/* Observaciones */}
          <div className="mb-4">
            <label htmlFor="observaciones" className="mb-2 block text-sm font-medium">
              Observaciones
            </label>
            <textarea
              id="observaciones"
              name="observaciones"
              placeholder="Observaciones adicionales..."
              className="peer block w-full rounded-md border border-gray-200 py-2 pl-3 text-sm outline-2 placeholder:text-gray-500"
              rows={3}
              // defaultValue={recurso?.observaciones}
            />
          </div>
        </div>

        <div className="mt-6 flex justify-end gap-4">
          <Link
            href="/dashboard/recursos"
            className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
          >
            Cancelar
          </Link>
          <Button type="submit">Actualizar Recurso</Button>
        </div>
      </form>
    </div>
  );
}
