import { lusitana } from '@/app/ui/fonts';
import { Button } from '@/app/ui/button';
import Link from 'next/link';
import { updateReporte } from '@/app/lib/actions-documentos';

interface EditReporteFormProps {
  id: string;
}

export default function EditReporteForm({ id }: EditReporteFormProps) {
  return (
    <div className="rounded-md bg-gray-50 p-4 md:p-6">
      <div className="mb-6">
        <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
          Editar Reporte #{id}
        </h1>
      </div>

      <form action={updateReporte}>
        <input type="hidden" name="id" value={id} />

        <div className="rounded-md bg-gray-50 p-4 md:p-6">
          {/* Título del reporte */}
          <div className="mb-4">
            <label htmlFor="titulo" className="mb-2 block text-sm font-medium">
              Título del reporte *
            </label>
            <input
              id="titulo"
              name="titulo"
              type="text"
              placeholder="Ingresa el título del reporte"
              className="peer block w-full rounded-md border border-gray-200 py-2 pl-3 text-sm outline-2 placeholder:text-gray-500"
              required
            />
          </div>

          {/* Tipo de reporte */}
          <div className="mb-4">
            <label htmlFor="tipoReporte" className="mb-2 block text-sm font-medium">
              Tipo de reporte
            </label>
            <select
              id="tipoReporte"
              name="tipoReporte"
              className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-3 text-sm outline-2"
              defaultValue="PROGRESO_PROYECTO"
            >
              <option value="PROYECTO_RESUMEN">Resumen de Proyecto</option>
              <option value="RECURSOS_UTILIZACION">Utilización de Recursos</option>
              <option value="FINANCIERO">Financiero</option>
              <option value="PROGRESO_PROYECTO">Progreso de Proyecto</option>
              <option value="ESTADISTICAS_GENERALES">Estadísticas Generales</option>
              <option value="AUDITORIA">Auditoría</option>
              <option value="PERSONALIZADO">Personalizado</option>
            </select>
          </div>

          {/* Descripción */}
          <div className="mb-4">
            <label htmlFor="descripcion" className="mb-2 block text-sm font-medium">
              Descripción del reporte
            </label>
            <textarea
              id="descripcion"
              name="descripcion"
              placeholder="Describe el contenido y propósito del reporte..."
              className="peer block w-full rounded-md border border-gray-200 py-2 pl-3 text-sm outline-2 placeholder:text-gray-500"
              rows={4}
            />
          </div>

          {/* Documento asociado */}
          <div className="mb-4">
            <label htmlFor="documentoId" className="mb-2 block text-sm font-medium">
              Documento asociado *
            </label>
            <select
              id="documentoId"
              name="documentoId"
              className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-3 text-sm outline-2"
              required
            >
              <option value="">Seleccionar documento...</option>
              <option value="1">Manual de Usuario - Sistema ERP</option>
              <option value="2">Especificación Técnica - Módulo de Facturación</option>
              <option value="3">Procedimientos de Seguridad</option>
              <option value="4">Guía de Instalación</option>
            </select>
          </div>

          {/* Generado por y email */}
          <div className="mb-4 grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <label htmlFor="generadoPor" className="mb-2 block text-sm font-medium">
                Generado por *
              </label>
              <input
                id="generadoPor"
                name="generadoPor"
                type="text"
                placeholder="Nombre del generador"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-3 text-sm outline-2 placeholder:text-gray-500"
                required
              />
            </div>
            <div>
              <label htmlFor="emailGenerador" className="mb-2 block text-sm font-medium">
                Email del generador
              </label>
              <input
                id="emailGenerador"
                name="emailGenerador"
                type="email"
                placeholder="email@empresa.com"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-3 text-sm outline-2 placeholder:text-gray-500"
              />
            </div>
          </div>

          {/* Estado */}
          <div className="mb-4">
            <label htmlFor="estado" className="mb-2 block text-sm font-medium">
              Estado del reporte
            </label>
            <select
              id="estado"
              name="estado"
              className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-3 text-sm outline-2"
              defaultValue="PENDIENTE"
            >
              <option value="PENDIENTE">Pendiente</option>
              <option value="GENERANDO">Generando</option>
              <option value="COMPLETADO">Completado</option>
              <option value="FALLIDO">Fallido</option>
              <option value="CANCELADO">Cancelado</option>
              <option value="ARCHIVADO">Archivado</option>
            </select>
          </div>

          {/* Formato */}
          <div className="mb-4">
            <label htmlFor="formato" className="mb-2 block text-sm font-medium">
              Formato de salida
            </label>
            <select
              id="formato"
              name="formato"
              className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-3 text-sm outline-2"
              defaultValue="PDF"
            >
              <option value="JSON">JSON</option>
              <option value="PDF">PDF</option>
              <option value="EXCEL">Excel</option>
              <option value="CSV">CSV</option>
              <option value="HTML">HTML</option>
            </select>
          </div>

          {/* Total de registros esperados */}
          <div className="mb-4">
            <label htmlFor="totalRegistros" className="mb-2 block text-sm font-medium">
              Total de registros esperados
            </label>
            <input
              id="totalRegistros"
              name="totalRegistros"
              type="number"
              min="0"
              placeholder="100"
              className="peer block w-full rounded-md border border-gray-200 py-2 pl-3 text-sm outline-2 placeholder:text-gray-500"
            />
          </div>

          {/* Parámetros del reporte */}
          <div className="mb-4">
            <label htmlFor="parametros" className="mb-2 block text-sm font-medium">
              Parámetros del reporte
            </label>
            <textarea
              id="parametros"
              name="parametros"
              placeholder="Parámetros específicos del reporte en formato JSON o texto..."
              className="peer block w-full rounded-md border border-gray-200 py-2 pl-3 text-sm outline-2 placeholder:text-gray-500"
              rows={3}
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
              placeholder="Observaciones adicionales sobre el reporte..."
              className="peer block w-full rounded-md border border-gray-200 py-2 pl-3 text-sm outline-2 placeholder:text-gray-500"
              rows={3}
            />
          </div>
        </div>

        <div className="mt-6 flex justify-end gap-4">
          <Link
            href="/dashboard/reportes"
            className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
          >
            Cancelar
          </Link>
          <Button type="submit">Actualizar Reporte</Button>
        </div>
      </form>
    </div>
  );
}
