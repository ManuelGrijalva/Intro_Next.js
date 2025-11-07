import { lusitana } from '@/app/ui/fonts';
import { Button } from '@/app/ui/button';
import Link from 'next/link';
import { updateDocumento } from '@/app/lib/actions-documentos';

interface EditDocumentoFormProps {
  id: string;
}

export default function EditDocumentoForm({ id }: EditDocumentoFormProps) {
  return (
    <div className="rounded-md bg-gray-50 p-4 md:p-6">
      <div className="mb-6">
        <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
          Editar Documento #{id}
        </h1>
      </div>

      <form action={updateDocumento}>
        <input type="hidden" name="id" value={id} />

        <div className="rounded-md bg-gray-50 p-4 md:p-6">
          {/* Título del documento */}
          <div className="mb-4">
            <label htmlFor="titulo" className="mb-2 block text-sm font-medium">
              Título del documento *
            </label>
            <input
              id="titulo"
              name="titulo"
              type="text"
              placeholder="Ingresa el título del documento"
              className="peer block w-full rounded-md border border-gray-200 py-2 pl-3 text-sm outline-2 placeholder:text-gray-500"
              required
            />
          </div>

          {/* Tipo de documento */}
          <div className="mb-4">
            <label htmlFor="tipoDocumento" className="mb-2 block text-sm font-medium">
              Tipo de documento
            </label>
            <select
              id="tipoDocumento"
              name="tipoDocumento"
              className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-3 text-sm outline-2"
              defaultValue="MANUAL"
            >
              <option value="ESPECIFICACION">Especificación</option>
              <option value="MANUAL">Manual</option>
              <option value="PROCEDIMIENTO">Procedimiento</option>
              <option value="INFORME">Informe</option>
              <option value="CONTRATO">Contrato</option>
              <option value="POLITICA">Política</option>
              <option value="GUIA">Guía</option>
              <option value="PRESENTACION">Presentación</option>
              <option value="OTRO">Otro</option>
            </select>
          </div>

          {/* Contenido */}
          <div className="mb-4">
            <label htmlFor="contenido" className="mb-2 block text-sm font-medium">
              Contenido del documento
            </label>
            <textarea
              id="contenido"
              name="contenido"
              placeholder="Ingresa el contenido del documento..."
              className="peer block w-full rounded-md border border-gray-200 py-2 pl-3 text-sm outline-2 placeholder:text-gray-500"
              rows={6}
            />
          </div>

          {/* Autor y email */}
          <div className="mb-4 grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <label htmlFor="autor" className="mb-2 block text-sm font-medium">
                Autor *
              </label>
              <input
                id="autor"
                name="autor"
                type="text"
                placeholder="Nombre del autor"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-3 text-sm outline-2 placeholder:text-gray-500"
                required
              />
            </div>
            <div>
              <label htmlFor="emailAutor" className="mb-2 block text-sm font-medium">
                Email del autor
              </label>
              <input
                id="emailAutor"
                name="emailAutor"
                type="email"
                placeholder="email@empresa.com"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-3 text-sm outline-2 placeholder:text-gray-500"
              />
            </div>
          </div>

          {/* Proyecto asociado */}
          <div className="mb-4">
            <label htmlFor="proyectoAsociado" className="mb-2 block text-sm font-medium">
              Proyecto asociado *
            </label>
            <select
              id="proyectoAsociado"
              name="proyectoAsociado"
              className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-3 text-sm outline-2"
              required
            >
              <option value="">Seleccionar proyecto...</option>
              <option value="1">Sistema ERP Empresarial 2024</option>
              <option value="2">Plataforma de Gestión Logística</option>
              <option value="3">Portal de Servicios Corporativos</option>
            </select>
          </div>

          {/* Estado */}
          <div className="mb-4">
            <label htmlFor="estado" className="mb-2 block text-sm font-medium">
              Estado del documento
            </label>
            <select
              id="estado"
              name="estado"
              className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-3 text-sm outline-2"
              defaultValue="BORRADOR"
            >
              <option value="BORRADOR">Borrador</option>
              <option value="REVISION">En Revisión</option>
              <option value="APROBADO">Aprobado</option>
              <option value="RECHAZADO">Rechazado</option>
              <option value="PUBLICADO">Publicado</option>
              <option value="ARCHIVADO">Archivado</option>
            </select>
          </div>

          {/* Prioridad */}
          <div className="mb-4">
            <label htmlFor="prioridad" className="mb-2 block text-sm font-medium">
              Prioridad
            </label>
            <select
              id="prioridad"
              name="prioridad"
              className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-3 text-sm outline-2"
              defaultValue="MEDIA"
            >
              <option value="BAJA">Baja</option>
              <option value="MEDIA">Media</option>
              <option value="ALTA">Alta</option>
              <option value="CRITICA">Crítica</option>
            </select>
          </div>

          {/* Versión */}
          <div className="mb-4">
            <label htmlFor="version" className="mb-2 block text-sm font-medium">
              Versión
            </label>
            <input
              id="version"
              name="version"
              type="text"
              placeholder="v1.0"
              className="peer block w-full rounded-md border border-gray-200 py-2 pl-3 text-sm outline-2 placeholder:text-gray-500"
            />
          </div>

          {/* Etiquetas */}
          <div className="mb-4">
            <label htmlFor="etiquetas" className="mb-2 block text-sm font-medium">
              Etiquetas
            </label>
            <input
              id="etiquetas"
              name="etiquetas"
              type="text"
              placeholder="manual,usuario,sistema,documentacion (separadas por comas)"
              className="peer block w-full rounded-md border border-gray-200 py-2 pl-3 text-sm outline-2 placeholder:text-gray-500"
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
            />
          </div>
        </div>

        <div className="mt-6 flex justify-end gap-4">
          <Link
            href="/dashboard/documentos"
            className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
          >
            Cancelar
          </Link>
          <Button type="submit">Actualizar Documento</Button>
        </div>
      </form>
    </div>
  );
}
