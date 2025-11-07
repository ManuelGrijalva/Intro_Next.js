'use server'

import { componenteAClient } from '@/app/lib/api-clients';
import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';

export async function createProyecto(formData: FormData) {
  try {
    const emailResponsable = formData.get('emailResponsable') as string;

    const proyectoData = {
      nombre: formData.get('nombre') as string,
      codigoProyecto: formData.get('codigoProyecto') as string,
      descripcion: formData.get('descripcion') as string || null,
      fechaInicio: formData.get('fechaInicio') as string,
      fechaFin: formData.get('fechaFin') as string || null,
      presupuestoTotal: parseFloat(formData.get('presupuestoTotal') as string),
      clienteResponsable: formData.get('clienteResponsable') as string,
      emailResponsable: emailResponsable && emailResponsable.trim() !== '' ? emailResponsable.trim() : null,
      prioridad: formData.get('prioridad') as string,
      estado: formData.get('estado') as string || 'PLANIFICACION',
      ubicacion: formData.get('ubicacion') as string || null,
    };

    // Validaciones básicas
    if (!proyectoData.nombre || !proyectoData.codigoProyecto || !proyectoData.fechaInicio || !proyectoData.presupuestoTotal || !proyectoData.clienteResponsable) {
      throw new Error('Campos requeridos faltantes');
    }

    if (proyectoData.presupuestoTotal <= 0) {
      throw new Error('El presupuesto debe ser mayor a 0');
    }

    // Validar email si se proporciona
    if (proyectoData.emailResponsable) {
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!emailRegex.test(proyectoData.emailResponsable)) {
        throw new Error('El formato del email del responsable no es válido');
      }
    }

    console.log('Creando proyecto:', proyectoData);

    // Llamar a la API del Componente A
    const response = await componenteAClient.createProyecto(proyectoData);

    console.log('Respuesta de la API:', response);

    if (response.exito) {
      // Revalidar cache y redirigir
      revalidatePath('/dashboard/proyectos');
      redirect('/dashboard/proyectos');
    } else {
      throw new Error(response.mensaje || 'Error al crear el proyecto');
    }
  } catch (error) {
    console.error('Error creando proyecto:', error);
    throw error;
  }
}

export async function createRecurso(formData: FormData) {
  try {
    const recursoData = {
      nombre: formData.get('nombre') as string,
      descripcion: formData.get('descripcion') as string || null,
      tipoRecurso: formData.get('tipoRecurso') as string,
      costoUnitario: parseFloat(formData.get('costoUnitario') as string),
      cantidad: parseInt(formData.get('cantidad') as string),
      proyectoId: parseInt(formData.get('proyectoId') as string),
      fechaAsignacion: formData.get('fechaAsignacion') as string,
      estado: formData.get('estado') as string,
      proveedor: formData.get('proveedor') as string || null,
      unidadMedida: formData.get('unidadMedida') as string || null,
      observaciones: formData.get('observaciones') as string || null,
    };

    // Validaciones básicas
    if (!recursoData.nombre || !recursoData.costoUnitario || !recursoData.cantidad || !recursoData.proyectoId || !recursoData.fechaAsignacion) {
      throw new Error('Campos requeridos faltantes');
    }

    if (recursoData.costoUnitario <= 0 || recursoData.cantidad <= 0) {
      throw new Error('El costo y cantidad deben ser mayores a 0');
    }

    console.log('Creando recurso:', recursoData);

    // Llamar a la API del Componente A
    const response = await componenteAClient.createRecurso(recursoData);

    console.log('Respuesta de la API:', response);

    if (response.exito) {
      // Revalidar cache y redirigir
      revalidatePath('/dashboard/recursos');
      redirect('/dashboard/recursos');
    } else {
      throw new Error(response.mensaje || 'Error al crear el recurso');
    }
  } catch (error) {
    console.error('Error creando recurso:', error);
    throw error;
  }
}

export async function updateProyecto(formData: FormData) {
  try {
    const id = formData.get('id') as string;
    const proyectoData = {
      id: parseInt(id),
      nombre: formData.get('nombre') as string,
      codigoProyecto: formData.get('codigoProyecto') as string,
      descripcion: formData.get('descripcion') as string || null,
      fechaInicio: formData.get('fechaInicio') as string,
      fechaFin: formData.get('fechaFin') as string || null,
      presupuestoTotal: parseFloat(formData.get('presupuestoTotal') as string),
      presupuestoGastado: parseFloat(formData.get('presupuestoGastado') as string) || 0,
      clienteResponsable: formData.get('clienteResponsable') as string,
      emailResponsable: formData.get('emailResponsable') as string || null,
      estado: formData.get('estado') as string,
      prioridad: formData.get('prioridad') as string,
      ubicacion: formData.get('ubicacion') as string || null,
      observaciones: formData.get('observaciones') as string || null,
    };

    // Validaciones básicas
    if (!proyectoData.nombre || !proyectoData.codigoProyecto || !proyectoData.fechaInicio || !proyectoData.presupuestoTotal || !proyectoData.clienteResponsable) {
      throw new Error('Campos requeridos faltantes');
    }

    if (proyectoData.presupuestoTotal <= 0) {
      throw new Error('El presupuesto debe ser mayor a 0');
    }

    console.log('Actualizando proyecto:', proyectoData);

    // Llamar a la API del Componente A
    const response = await componenteAClient.updateProyecto(proyectoData);

    console.log('Respuesta de la API:', response);

    if (response.exito) {
      // Revalidar cache y redirigir
      revalidatePath('/dashboard/proyectos');
      redirect('/dashboard/proyectos');
    } else {
      throw new Error(response.mensaje || 'Error al actualizar el proyecto');
    }
  } catch (error) {
    console.error('Error actualizando proyecto:', error);
    throw error;
  }
}

export async function updateRecurso(formData: FormData) {
  try {
    const id = formData.get('id') as string;
    const recursoData = {
      id: parseInt(id),
      nombre: formData.get('nombre') as string,
      descripcion: formData.get('descripcion') as string || null,
      tipoRecurso: formData.get('tipoRecurso') as string,
      costoUnitario: parseFloat(formData.get('costoUnitario') as string),
      cantidad: parseInt(formData.get('cantidad') as string),
      cantidadUtilizada: parseInt(formData.get('cantidadUtilizada') as string) || 0,
      proyectoId: parseInt(formData.get('proyectoId') as string),
      fechaAsignacion: formData.get('fechaAsignacion') as string,
      estado: formData.get('estado') as string,
      proveedor: formData.get('proveedor') as string || null,
      unidadMedida: formData.get('unidadMedida') as string || null,
      observaciones: formData.get('observaciones') as string || null,
    };

    // Validaciones básicas
    if (!recursoData.nombre || !recursoData.costoUnitario || !recursoData.cantidad || !recursoData.proyectoId || !recursoData.fechaAsignacion) {
      throw new Error('Campos requeridos faltantes');
    }

    if (recursoData.costoUnitario <= 0 || recursoData.cantidad <= 0) {
      throw new Error('El costo y cantidad deben ser mayores a 0');
    }

    console.log('Actualizando recurso:', recursoData);

    // Llamar a la API del Componente A
    const response = await componenteAClient.updateRecurso(recursoData);

    console.log('Respuesta de la API:', response);

    if (response.exito) {
      // Revalidar cache y redirigir
      revalidatePath('/dashboard/recursos');
      redirect('/dashboard/recursos');
    } else {
      throw new Error(response.mensaje || 'Error al actualizar el recurso');
    }
  } catch (error) {
    console.error('Error actualizando recurso:', error);
    throw error;
  }
}
