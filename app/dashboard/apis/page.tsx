// app/dashboard/apis/page.tsx
import { lusitana } from '@/app/ui/fonts';
import {
  CodeBracketIcon,
  ServerIcon,
  DocumentTextIcon,
  ChartBarIcon,
  CubeIcon,
  BriefcaseIcon
} from '@heroicons/react/24/outline';

export default function Page() {
  return (
    <div className="w-full">
      <h1 className={`${lusitana.className} mb-8 text-2xl`}>
        APIs del Sistema - Documentación Swagger
      </h1>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Componente A - Operaciones */}
        <div className="rounded-xl bg-blue-50 p-6 shadow-sm">
          <div className="flex items-center mb-4">
            <ServerIcon className="h-8 w-8 text-blue-600 mr-3" />
            <div>
              <h2 className="text-xl font-semibold text-blue-900">
                Componente A - Operaciones
              </h2>
              <p className="text-blue-600">Puerto 8080 | PostgreSQL</p>
            </div>
          </div>

          <p className="text-blue-700 mb-4">
            Gestión de proyectos empresariales y recursos asociados con cálculos automáticos y validaciones.
          </p>

          <div className="space-y-3 mb-6">
            <div className="flex items-center text-sm text-blue-600">
              <BriefcaseIcon className="h-4 w-4 mr-2" />
              <span>CRUD de Proyectos con presupuestos y estados</span>
            </div>
            <div className="flex items-center text-sm text-blue-600">
              <CubeIcon className="h-4 w-4 mr-2" />
              <span>CRUD de Recursos con control de stock</span>
            </div>
            <div className="flex items-center text-sm text-blue-600">
              <ChartBarIcon className="h-4 w-4 mr-2" />
              <span>Estadísticas y métricas empresariales</span>
            </div>
          </div>

          <div className="flex flex-col space-y-2">
            <a
              href="http://localhost:8080/swagger-ui.html"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              <CodeBracketIcon className="h-4 w-4 mr-2" />
              Abrir Swagger UI
            </a>
            <a
              href="http://localhost:8080/api-docs"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center border border-blue-600 text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-50 transition-colors"
            >
              <DocumentTextIcon className="h-4 w-4 mr-2" />
              Ver OpenAPI JSON
            </a>
          </div>

          <div className="mt-4 p-3 bg-blue-100 rounded-lg">
            <h4 className="font-medium text-blue-900 mb-2">Endpoints Principales:</h4>
            <ul className="text-xs text-blue-700 space-y-1">
              <li>• GET/POST /api/proyectos - Gestión de proyectos</li>
              <li>• GET/POST /api/recursos - Gestión de recursos</li>
              <li>• GET /api/proyectos/estadisticas - Métricas empresariales</li>
              <li>• POST /api/recursos/{`{id}`}/utilizar - Utilización de recursos</li>
            </ul>
          </div>
        </div>

        {/* Componente B - Documentos */}
        <div className="rounded-xl bg-green-50 p-6 shadow-sm">
          <div className="flex items-center mb-4">
            <ServerIcon className="h-8 w-8 text-green-600 mr-3" />
            <div>
              <h2 className="text-xl font-semibold text-green-900">
                Componente B - Documentos
              </h2>
              <p className="text-green-600">Puerto 8081 | MySQL</p>
            </div>
          </div>

          <p className="text-green-700 mb-4">
            Gestión documental empresarial con reportes, aprobaciones y integración con proyectos.
          </p>

          <div className="space-y-3 mb-6">
            <div className="flex items-center text-sm text-green-600">
              <DocumentTextIcon className="h-4 w-4 mr-2" />
              <span>CRUD de Documentos con estados y aprobaciones</span>
            </div>
            <div className="flex items-center text-sm text-green-600">
              <ChartBarIcon className="h-4 w-4 mr-2" />
              <span>Generación de Reportes con progreso</span>
            </div>
            <div className="flex items-center text-sm text-green-600">
              <BriefcaseIcon className="h-4 w-4 mr-2" />
              <span>Integración con proyectos del Componente A</span>
            </div>
          </div>

          <div className="flex flex-col space-y-2">
            <a
              href="http://localhost:8081/swagger-ui.html"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
            >
              <CodeBracketIcon className="h-4 w-4 mr-2" />
              Abrir Swagger UI
            </a>
            <a
              href="http://localhost:8081/api-docs"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center border border-green-600 text-green-600 px-4 py-2 rounded-lg hover:bg-green-50 transition-colors"
            >
              <DocumentTextIcon className="h-4 w-4 mr-2" />
              Ver OpenAPI JSON
            </a>
          </div>

          <div className="mt-4 p-3 bg-green-100 rounded-lg">
            <h4 className="font-medium text-green-900 mb-2">Endpoints Principales:</h4>
            <ul className="text-xs text-green-700 space-y-1">
              <li>• GET/POST /api/documentos - Gestión de documentos</li>
              <li>• POST /api/documentos/{`{id}`}/aprobar - Aprobaciones</li>
              <li>• GET/POST /api/reportes - Gestión de reportes</li>
              <li>• POST /api/reportes/{`{id}`}/iniciar - Generar reportes</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Información adicional */}
      <div className="mt-8 rounded-xl bg-gray-50 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Información del Sistema
        </h3>

        <div className="grid gap-4 md:grid-cols-3">
          <div className="bg-white p-4 rounded-lg">
            <h4 className="font-medium text-gray-900 mb-2">Arquitectura</h4>
            <p className="text-sm text-gray-600">
              Microservicios independientes con bases de datos separadas y comunicación HTTP
            </p>
          </div>

          <div className="bg-white p-4 rounded-lg">
            <h4 className="font-medium text-gray-900 mb-2">Tecnologías</h4>
            <p className="text-sm text-gray-600">
              Spring Boot 3.2, PostgreSQL, MySQL, Next.js 14, OpenAPI 3.0
            </p>
          </div>

          <div className="bg-white p-4 rounded-lg">
            <h4 className="font-medium text-gray-900 mb-2">Estado</h4>
            <p className="text-sm text-gray-600">
              Sistema completamente funcional con integración entre componentes
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
