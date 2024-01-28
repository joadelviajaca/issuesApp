// IssuesForm.js
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getIssueById, createIssue, updateIssue } from '../services/api';

const IssueForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('');
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      // Si hay un ID en la ruta, es una edición, así que recuperamos la incidencia por su ID
      fetchIssue(id);
    }
  }, [id]);

  const fetchIssue = async (id) => {
    try {
      const issue = await getIssueById(id);
      setTitle(issue.title);
      setDescription(issue.description);
      setStatus(issue.status);
    } catch (error) {
      console.error('Error al obtener la incidencia:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const issueData = { title, description, status };
    try {
      if (id) {
        // Si hay un ID en la ruta, actualizamos la incidencia
        await updateIssue(id, issueData);
      } else {
        // Si no hay un ID en la ruta, creamos una nueva incidencia
        await createIssue(issueData);
      }
      // Redireccionar a la lista de incidencias después de guardar
      navigate('/issues');
    } catch (error) {
      console.error('Error al guardar la incidencia:', error);
    }
  };

  return (
    <div>
      <h2>{id ? 'Editar Incidencia' : 'Añadir Incidencia'}</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Título</label>
          <input type="text" className="form-control" id="title" value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">Descripción</label>
          <textarea className="form-control" id="description" rows="3" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
        </div>
        { id && (

        <div className="mb-3">
          <label htmlFor="status" className="form-label">Estado</label>
          <select className="form-select" id="status" value={status} onChange={(e) => setStatus(e.target.value)}>
            <option value="abierta">Abierta</option>
            <option value="cerrada">Cerrada</option>
            <option value="en_proceso">En proceso</option>
          </select>
        </div>
        ) 
            
        }
        <button type="submit" className="btn btn-primary">Guardar</button>
      </form>
    </div>
  );
};

export default IssueForm;
