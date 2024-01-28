import React, { useEffect, useState } from 'react';
import { getAllIssues, deleteIssue } from '../services/api';
import { useNavigate } from 'react-router-dom';

const IssueList = () => {
    const [issues, setIssues] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        const fetchIssues = async () => {
            try {
                const data = await getAllIssues();
                setIssues(data);
            } catch (error) {
                // Manejar el error
            }
        };

        fetchIssues();
    }, []);

    const handleDelete = async (id) => {
        try {
            await deleteIssue(id);
            // Actualizar la lista de incidencias después de eliminar
            setIssues(issues.filter(issue => issue._id !== id));
        } catch (error) {
            // Manejar el error
        }
    };

    const handleEdit = async (id) => {
        navigate(`/issues/${id}`)
    }

    return (
        <>

            <h1> Listado de incidencias</h1>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Título</th>
                        <th scope="col">Estado</th>
                        <th scope="col">Editar/Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                    {issues.map((issue, index) => (
                        <tr key={issue._id}>
                            <th scope="row">{index + 1}</th>
                            <td>{issue.title}</td>
                            <td>{issue.status}</td>
                            <td>
                                <i className="bi bi-pencil mx-2" onClick={() => handleEdit(issue._id)}></i>
                                <i className="bi bi-trash" onClick={() => handleDelete(issue._id)}></i>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
};

export default IssueList;
