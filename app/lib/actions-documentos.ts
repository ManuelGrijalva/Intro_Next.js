'use server';

import { z } from 'zod';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { componenteBClient } from '@/app/lib/api-clients';

export async function updateDocumento(formData: FormData) {
  try {
    const id = formData.get('id') as string;
    const documentoData = {
      id: parseInt(id),
      titulo: formData.get('titulo') as string,
      tipoDocumento: formData.get('tipoDocumento') as string,
      contenido: formData.get('contenido') as string || null,
      autor: formData.get('autor') as string,
      emailAutor: formData.get('emailAutor') as string || null,
      proyectoAsociado: parseInt(formData.get('proyectoAsociado') as string),
      estado: formData.get('estado') as string,
      prioridad: formData.get('prioridad') as string,
      version: formData.get('version') as string || 'v1.0',
      etiquetas: formData.get('etiquetas') as string || null,
      observaciones: formData.get('observaciones') as string || null,
    };

    // Validaciones básicas
    if (!documentoData.titulo || !documentoData.autor || !documentoData.proyectoAsociado) {
      throw new Error('Campos requeridos faltantes');
    }

    console.log('Actualizando documento:', documentoData);

    // Llamar a la API del Componente B
    const response = await componenteBClient.updateDocumento(documentoData);

    console.log('Respuesta de la API:', response);

    if (response.exito) {
      // Revalidar cache y redirigir
      revalidatePath('/dashboard/documentos');
      redirect('/dashboard/documentos');
    } else {
      throw new Error(response.mensaje || 'Error al actualizar el documento');
    }
  } catch (error) {
    console.error('Error actualizando documento:', error);
    throw error;
  }
}

export async function createDocumento(formData: FormData) {
  try {
    const documentoData = {
      titulo: formData.get('titulo') as string,
      tipoDocumento: formData.get('tipoDocumento') as string,
      contenido: formData.get('contenido') as string || null,
      autor: formData.get('autor') as string,
      emailAutor: formData.get('emailAutor') as string || null,
      proyectoAsociado: parseInt(formData.get('proyectoAsociado') as string),
      estado: formData.get('estado') as string,
      prioridad: formData.get('prioridad') as string,
      version: formData.get('version') as string || 'v1.0',
      etiquetas: formData.get('etiquetas') as string || null,
      observaciones: formData.get('observaciones') as string || null,
    };

    // Validaciones básicas
    if (!documentoData.titulo || !documentoData.autor || !documentoData.proyectoAsociado) {
      throw new Error('Campos requeridos faltantes');
    }

    console.log('Creando documento:', documentoData);

    // Llamar a la API del Componente B
    const response = await componenteBClient.createDocumento(documentoData);

    console.log('Respuesta de la API:', response);

    if (response.exito) {
      // Revalidar cache y redirigir
      revalidatePath('/dashboard/documentos');
      redirect('/dashboard/documentos');
    } else {
      throw new Error(response.mensaje || 'Error al crear el documento');
    }
  } catch (error) {
    console.error('Error creando documento:', error);
    throw error;
  }
}

export async function updateReporte(formData: FormData) {
  try {
    const id = formData.get('id') as string;
    const reporteData = {
      id: parseInt(id),
      titulo: formData.get('titulo') as string,
      tipoReporte: formData.get('tipoReporte') as string,
      descripcion: formData.get('descripcion') as string || null,
      documentoId: parseInt(formData.get('documentoId') as string),
      generadoPor: formData.get('generadoPor') as string,
      emailGenerador: formData.get('emailGenerador') as string || null,
      estado: formData.get('estado') as string,
      formato: formData.get('formato') as string,
      totalRegistros: parseInt(formData.get('totalRegistros') as string) || 0,
      parametros: formData.get('parametros') as string || null,
      observaciones: formData.get('observaciones') as string || null,
    };

    // Validaciones básicas
    if (!reporteData.titulo || !reporteData.documentoId || !reporteData.generadoPor) {
      throw new Error('Campos requeridos faltantes');
    }

    console.log('Actualizando reporte:', reporteData);

    // Llamar a la API del Componente B
    const response = await componenteBClient.updateReporte(reporteData);

    console.log('Respuesta de la API:', response);

    if (response.exito) {
      // Revalidar cache y redirigir
      revalidatePath('/dashboard/reportes');
      redirect('/dashboard/reportes');
    } else {
      throw new Error(response.mensaje || 'Error al actualizar el reporte');
    }
  } catch (error) {
    console.error('Error actualizando reporte:', error);
    throw error;
  }
}

export async function createReporte(formData: FormData) {
  try {
    const reporteData = {
      titulo: formData.get('titulo') as string,
      tipoReporte: formData.get('tipoReporte') as string,
      descripcion: formData.get('descripcion') as string || null,
      documentoId: parseInt(formData.get('documentoId') as string),
      generadoPor: formData.get('generadoPor') as string,
      emailGenerador: formData.get('emailGenerador') as string || null,
      estado: formData.get('estado') as string,
      formato: formData.get('formato') as string,
      totalRegistros: parseInt(formData.get('totalRegistros') as string) || 0,
      parametros: formData.get('parametros') as string || null,
      observaciones: formData.get('observaciones') as string || null,
    };

    // Validaciones básicas
    if (!reporteData.titulo || !reporteData.documentoId || !reporteData.generadoPor) {
      throw new Error('Campos requeridos faltantes');
    }

    console.log('Creando reporte:', reporteData);

    // Llamar a la API del Componente B
    const response = await componenteBClient.createReporte(reporteData);

    console.log('Respuesta de la API:', response);

    if (response.exito) {
      // Revalidar cache y redirigir
      revalidatePath('/dashboard/reportes');
      redirect('/dashboard/reportes');
    } else {
      throw new Error(response.mensaje || 'Error al crear el reporte');
    }
  } catch (error) {
    console.error('Error creando reporte:', error);
    throw error;
  }
}
