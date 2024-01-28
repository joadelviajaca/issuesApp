// services/api.js
import axios from 'axios';

const API_BASE_URL = 'https://issues2.vercel.app/api'; // Cambiar la URL base según sea necesario

const api = axios.create({
  baseURL: API_BASE_URL,
});

export const getAllIssues = async () => {
  try {
    const response = await api.get('/issues');
    return response.data.issues;
  } catch (error) {
    console.error('Error al obtener las incidencias:', error);
    throw error;
  }
};

export const deleteIssue = async (id) => {
  try {
    const response = await api.delete(`/issues/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error al eliminar la incidencia:', error);
    throw error;
  }
};

// Agrega otras funciones necesarias para interactuar con la API (añadir, editar, etc.)
