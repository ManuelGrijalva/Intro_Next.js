import { lusitana } from '@/app/ui/fonts';
import { Button } from '@/app/ui/button';
import Link from 'next/link';
import { createProyecto } from '@/app/lib/actions-proyectos';

export default function CreateForm() {
  return (
    <div className="rounded-md bg-gray-50 p-4 md:p-6">
      <div className="mb-6">
        <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
          Crear Proyecto
        </h1>
      </div>

      <form action={createProyecto}>
        <div className="rounded-md bg-gray-50 p-4 md:p-6">
          {/* Nombre del proyecto */}
          <div className="mb-4">
            <label htmlFor="nombre" className="mb-2 block text-sm font-medium">
              Nombre del proyecto *
            </label>
            <input
              id="nombre"
              name="nombre"
              type="text"
              placeholder="Ingresa el nombre del proyecto"
              className="peer block w-full rounded-md border border-gray-200 py-2 pl-3 text-sm outline-2 placeholder:text-gray-500"
              required
            />
          </div>

          {/* Código del proyecto */}
          <div className="mb-4">
            <label htmlFor="codigoProyecto" className="mb-2 block text-sm font-medium">
              Código del proyecto *
            </label>
            <input
              id="codigoProyecto"
              name="codigoProyecto"
              type="text"
              placeholder="Ej: PR-001234"
              className="peer block w-full rounded-md border border-gray-200 py-2 pl-3 text-sm outline-2 placeholder:text-gray-500"
              required
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
              placeholder="Describe el proyecto..."
              className="peer block w-full rounded-md border border-gray-200 py-2 pl-3 text-sm outline-2 placeholder:text-gray-500"
              rows={3}
            />
          </div>

          {/* Fechas */}
          <div className="mb-4 grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <label htmlFor="fechaInicio" className="mb-2 block text-sm font-medium">
                Fecha de inicio *
              </label>
              <input
                id="fechaInicio"
                name="fechaInicio"
                type="date"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-3 text-sm outline-2"
                required
              />
            </div>
            <div>
              <label htmlFor="fechaFin" className="mb-2 block text-sm font-medium">
                Fecha de fin
              </label>
              <input
                id="fechaFin"
                name="fechaFin"
                type="date"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-3 text-sm outline-2"
              />
            </div>
          </div>

          {/* Presupuesto */}
          <div className="mb-4">
            <label htmlFor="presupuestoTotal" className="mb-2 block text-sm font-medium">
              Presupuesto total ($) *
            </label>
            <input
              id="presupuestoTotal"
              name="presupuestoTotal"
              type="number"
              step="0.01"
              min="0.01"
              placeholder="0.00"
              className="peer block w-full rounded-md border border-gray-200 py-2 pl-3 text-sm outline-2 placeholder:text-gray-500"
              required
            />
          </div>

          {/* Cliente responsable */}
          <div className="mb-4">
            <label htmlFor="clienteResponsable" className="mb-2 block text-sm font-medium">
              Cliente responsable *
            </label>
            <input
              id="clienteResponsable"
              name="clienteResponsable"
              type="text"
              placeholder="Nombre del cliente responsable"
              className="peer block w-full rounded-md border border-gray-200 py-2 pl-3 text-sm outline-2 placeholder:text-gray-500"
              required
            />
          </div>

          {/* Email responsable */}
          <div className="mb-4">
            <label htmlFor="emailResponsable" className="mb-2 block text-sm font-medium">
              Email del responsable
            </label>
            <input
              id="emailResponsable"
              name="emailResponsable"
              type="email"
              placeholder="email@ejemplo.com"
              className="peer block w-full rounded-md border border-gray-200 py-2 pl-3 text-sm outline-2 placeholder:text-gray-500"
            />
          </div>

          {/* Teléfono responsable */}
          <div className="mb-4">
            <label htmlFor="telefonoResponsable" className="mb-2 block text-sm font-medium">
              Teléfono del responsable
            </label>
            <input
              id="telefonoResponsable"
              name="telefonoResponsable"
              type="tel"
              placeholder="123-456-7890"
              className="peer block w-full rounded-md border border-gray-200 py-2 pl-3 text-sm outline-2 placeholder:text-gray-500"
            />
          </div>

          {/* Ubicación */}
          <div className="mb-4">
            <label htmlFor="ubicacion" className="mb-2 block text-sm font-medium">
              Ubicación
            </label>
            <input
              id="ubicacion"
              name="ubicacion"
              type="text"
              placeholder="Ciudad, País"
              className="peer block w-full rounded-md border border-gray-200 py-2 pl-3 text-sm outline-2 placeholder:text-gray-500"
            />
          </div>

          {/* Prioridad */}
          <div className="mb-4">
            <label htmlFor="prioridad" className="mb-2 block text-sm font-medium">
              Prioridad *
            </label>
            <select
              id="prioridad"
              name="prioridad"
              className="peer block w-full rounded-md border border-gray-200 py-2 pl-3 text-sm outline-2"
              defaultValue=""
              required
            >
              <option value="" disabled>
                Selecciona la prioridad
              </option>
              <option value="BAJA">Baja</option>
              <option value="MEDIA">Media</option>
              <option value="ALTA">Alta</option>
              <option value="CRITICA">Crítica</option>
            </select>
          </div>

          {/* Estado */}
          <div className="mb-4">
            <label htmlFor="estado" className="mb-2 block text-sm font-medium">
              Estado inicial *
            </label>
            <select
              id="estado"
              name="estado"
              className="peer block w-full rounded-md border border-gray-200 py-2 pl-3 text-sm outline-2"
              defaultValue="PLANIFICACION"
              required
            >
              <option value="PLANIFICACION">Planificación</option>
              <option value="EN_CURSO">En curso</option>
              <option value="EN_PAUSA">En pausa</option>
              <option value="COMPLETADO">Completado</option>
              <option value="CANCELADO">Cancelado</option>
              <option value="REVISION">Revisión</option>
            </select>
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
            />
          </div>
        </div>

        <div className="mt-6 flex justify-end gap-4">
          <Link
            href="/dashboard/proyectos"
            className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
          >
            Cancelar
          </Link>
          <Button type="submit">Crear Proyecto</Button>
        </div>
      </form>
    </div>
  );
}
