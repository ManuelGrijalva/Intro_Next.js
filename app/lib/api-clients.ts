// lib/api-clients.ts
// Cliente HTTP para conectar con los microservicios empresariales

interface ApiResponse<T> {
  exito: boolean;
  mensaje: string;
  datos: T;
  codigo?: string;
}

interface ErrorResponse {
  codigo: string;
  mensaje: string;
  timestamp: string;
  path: string;
  status: number;
}

// Cliente para Componente A (Operaciones - Proyectos y Recursos)
export class ComponenteAClient {
  private baseUrl: string;

  constructor() {
    this.baseUrl = process.env.NEXT_PUBLIC_API_A_URL || 'http://localhost:8080/api';
  }

  // Proyectos
  async getProyectos(page = 0, size = 10): Promise<ApiResponse<any>> {
    const response = await fetch(`${this.baseUrl}/proyectos?pagina=${page}&tamaño=${size}`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    });
    return response.json();
  }

  async getProyecto(id: number): Promise<ApiResponse<any>> {
    const response = await fetch(`${this.baseUrl}/proyectos/${id}`);
    return response.json();
  }

  async createProyecto(proyecto: any): Promise<ApiResponse<any>> {
    const response = await fetch(`${this.baseUrl}/proyectos`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(proyecto)
    });
    return response.json();
  }

  async updateProyecto(id: number, proyecto: any): Promise<ApiResponse<any>> {
    const response = await fetch(`${this.baseUrl}/proyectos/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(proyecto)
    });
    return response.json();
  }

  async deleteProyecto(id: number): Promise<ApiResponse<void>> {
    const response = await fetch(`${this.baseUrl}/proyectos/${id}`, {
      method: 'DELETE'
    });
    return response.json();
  }

  async getProyectosActivos(): Promise<ApiResponse<any[]>> {
    const response = await fetch(`${this.baseUrl}/proyectos/activos`);
    return response.json();
  }

  async getEstadisticasProyectos(): Promise<ApiResponse<any>> {
    const response = await fetch(`${this.baseUrl}/proyectos/estadisticas`);
    return response.json();
  }

  // Recursos
  async getRecursos(page = 0, size = 10): Promise<ApiResponse<any>> {
    const response = await fetch(`${this.baseUrl}/recursos?pagina=${page}&tamaño=${size}`);
    return response.json();
  }

  async getRecursosPorProyecto(proyectoId: number, page = 0, size = 10): Promise<ApiResponse<any>> {
    const response = await fetch(`${this.baseUrl}/recursos/proyecto/${proyectoId}?pagina=${page}&tamaño=${size}`);
    return response.json();
  }

  async createRecurso(recurso: any): Promise<ApiResponse<any>> {
    const response = await fetch(`${this.baseUrl}/recursos`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(recurso)
    });
    return response.json();
  }

  async updateRecurso(id: number, recurso: any): Promise<ApiResponse<any>> {
    const response = await fetch(`${this.baseUrl}/recursos/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(recurso)
    });
    return response.json();
  }

  async deleteRecurso(id: number): Promise<ApiResponse<void>> {
    const response = await fetch(`${this.baseUrl}/recursos/${id}`, {
      method: 'DELETE'
    });
    return response.json();
  }

  async getRecursosDisponibles(): Promise<ApiResponse<any[]>> {
    const response = await fetch(`${this.baseUrl}/recursos/disponibles`);
    return response.json();
  }

  async getRecursosConBajoStock(): Promise<ApiResponse<any[]>> {
    const response = await fetch(`${this.baseUrl}/recursos/bajo-stock`);
    return response.json();
  }

  async utilizarRecurso(id: number, cantidad: number): Promise<ApiResponse<any>> {
    const response = await fetch(`${this.baseUrl}/recursos/${id}/utilizar?cantidad=${cantidad}`, {
      method: 'POST'
    });
    return response.json();
  }

  async getEstadisticasRecursos(): Promise<ApiResponse<any>> {
    const response = await fetch(`${this.baseUrl}/recursos/estadisticas`);
    return response.json();
  }
}

// Cliente para Componente B (Documentos y Reportes)
export class ComponenteBClient {
  private baseUrl: string;

  constructor() {
    this.baseUrl = process.env.NEXT_PUBLIC_API_B_URL || 'http://localhost:8081/api';
  }

  // Documentos
  async getDocumentos(page = 0, size = 10): Promise<ApiResponse<any>> {
    const response = await fetch(`${this.baseUrl}/documentos?pagina=${page}&tamaño=${size}`);
    return response.json();
  }

  async getDocumento(id: number): Promise<ApiResponse<any>> {
    const response = await fetch(`${this.baseUrl}/documentos/${id}`);
    return response.json();
  }

  async createDocumento(documento: any): Promise<ApiResponse<any>> {
    const response = await fetch(`${this.baseUrl}/documentos`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(documento)
    });
    return response.json();
  }

  async updateDocumento(id: number, documento: any): Promise<ApiResponse<any>> {
    const response = await fetch(`${this.baseUrl}/documentos/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(documento)
    });
    return response.json();
  }

  async deleteDocumento(id: number): Promise<ApiResponse<void>> {
    const response = await fetch(`${this.baseUrl}/documentos/${id}`, {
      method: 'DELETE'
    });
    return response.json();
  }

  async getDocumentosPorProyecto(proyectoId: number, page = 0, size = 10): Promise<ApiResponse<any>> {
    const response = await fetch(`${this.baseUrl}/documentos/proyecto/${proyectoId}?pagina=${page}&tamaño=${size}`);
    return response.json();
  }

  async getDocumentosActivos(): Promise<ApiResponse<any[]>> {
    const response = await fetch(`${this.baseUrl}/documentos/activos`);
    return response.json();
  }

  async aprobarDocumento(id: number, aprobadoPor: string): Promise<ApiResponse<any>> {
    const response = await fetch(`${this.baseUrl}/documentos/${id}/aprobar?aprobadoPor=${encodeURIComponent(aprobadoPor)}`, {
      method: 'POST'
    });
    return response.json();
  }

  async rechazarDocumento(id: number): Promise<ApiResponse<any>> {
    const response = await fetch(`${this.baseUrl}/documentos/${id}/rechazar`, {
      method: 'POST'
    });
    return response.json();
  }

  async publicarDocumento(id: number): Promise<ApiResponse<any>> {
    const response = await fetch(`${this.baseUrl}/documentos/${id}/publicar`, {
      method: 'POST'
    });
    return response.json();
  }

  async getEstadisticasDocumentos(): Promise<ApiResponse<any>> {
    const response = await fetch(`${this.baseUrl}/documentos/estadisticas`);
    return response.json();
  }

  // Reportes
  async getReportes(page = 0, size = 10): Promise<ApiResponse<any>> {
    const response = await fetch(`${this.baseUrl}/reportes?pagina=${page}&tamaño=${size}`);
    return response.json();
  }

  async getReporte(id: number): Promise<ApiResponse<any>> {
    const response = await fetch(`${this.baseUrl}/reportes/${id}`);
    return response.json();
  }

  async createReporte(reporte: any): Promise<ApiResponse<any>> {
    const response = await fetch(`${this.baseUrl}/reportes`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(reporte)
    });
    return response.json();
  }

  async getReportesEnProceso(): Promise<ApiResponse<any[]>> {
    const response = await fetch(`${this.baseUrl}/reportes/en-proceso`);
    return response.json();
  }

  async iniciarGeneracion(id: number): Promise<ApiResponse<any>> {
    const response = await fetch(`${this.baseUrl}/reportes/${id}/iniciar`, {
      method: 'POST'
    });
    return response.json();
  }

  async actualizarProgreso(id: number, progreso: number, registrosProcesados?: number): Promise<ApiResponse<any>> {
    let url = `${this.baseUrl}/reportes/${id}/progreso?progreso=${progreso}`;
    if (registrosProcesados !== undefined) {
      url += `&registrosProcesados=${registrosProcesados}`;
    }
    const response = await fetch(url, {
      method: 'POST'
    });
    return response.json();
  }

  async cancelarReporte(id: number): Promise<ApiResponse<any>> {
    const response = await fetch(`${this.baseUrl}/reportes/${id}/cancelar`, {
      method: 'POST'
    });
    return response.json();
  }

  async getEstadisticasReportes(): Promise<ApiResponse<any>> {
    const response = await fetch(`${this.baseUrl}/reportes/estadisticas`);
    return response.json();
  }
}

// Instancias globales
export const componenteAClient = new ComponenteAClient();
export const componenteBClient = new ComponenteBClient();

// Tipos de datos empresariales
export interface Proyecto {
  id?: number;
  nombre: string;
  codigoProyecto: string;
  descripcion?: string;
  fechaInicio: string;
  fechaFin?: string;
  presupuestoTotal: number;
  presupuestoGastado?: number;
  presupuestoDisponible?: number;
  estado: 'PLANIFICACION' | 'EN_CURSO' | 'EN_PAUSA' | 'COMPLETADO' | 'CANCELADO' | 'REVISION';
  prioridad: 'BAJA' | 'MEDIA' | 'ALTA' | 'CRITICA';
  clienteResponsable: string;
  emailResponsable?: string;
  telefonoResponsable?: string;
  ubicacion?: string;
  observaciones?: string;
}

export interface Recurso {
  id?: number;
  nombre: string;
  descripcion?: string;
  tipoRecurso: 'MATERIAL' | 'EQUIPO' | 'HERRAMIENTA' | 'PERSONAL' | 'SERVICIO' | 'SOFTWARE' | 'OTRO';
  costoUnitario: number;
  cantidad: number;
  cantidadUtilizada?: number;
  cantidadDisponible?: number;
  costoTotal?: number;
  proyectoId: number;
  fechaAsignacion: string;
  estado: 'DISPONIBLE' | 'EN_USO' | 'MANTENIMIENTO' | 'AGOTADO' | 'INACTIVO';
  proveedor?: string;
  unidadMedida?: string;
  observaciones?: string;
}

export interface Documento {
  id?: number;
  titulo: string;
  tipoDocumento: 'ESPECIFICACION' | 'MANUAL' | 'PROCEDIMIENTO' | 'INFORME' | 'CONTRATO' | 'POLITICA' | 'GUIA' | 'PRESENTACION' | 'OTRO';
  contenido?: string;
  autor: string;
  emailAutor?: string;
  proyectoAsociado: number;
  estado: 'BORRADOR' | 'REVISION' | 'APROBADO' | 'RECHAZADO' | 'PUBLICADO' | 'ARCHIVADO' | 'ELIMINADO';
  prioridad: 'BAJA' | 'MEDIA' | 'ALTA' | 'CRITICA';
  version?: string;
  observaciones?: string;
  etiquetas?: string;
}

export interface Reporte {
  id?: number;
  titulo: string;
  tipoReporte: 'PROYECTO_RESUMEN' | 'RECURSOS_UTILIZACION' | 'FINANCIERO' | 'PROGRESO_PROYECTO' | 'ESTADISTICAS_GENERALES' | 'AUDITORIA' | 'PERSONALIZADO';
  descripcion?: string;
  documentoId: number;
  generadoPor: string;
  emailGenerador?: string;
  estado: 'PENDIENTE' | 'GENERANDO' | 'COMPLETADO' | 'FALLIDO' | 'CANCELADO' | 'ARCHIVADO';
  formato: 'JSON' | 'PDF' | 'EXCEL' | 'CSV' | 'HTML';
  progreso?: number;
  totalRegistros?: number;
  observaciones?: string;
  parametros?: string;
}
