import { useNavigate } from 'react-router-dom';
import logoUrl from '../assets/logoIssues2.jpeg';




const Home = () => {

    const navigate = useNavigate();

    return (
        <div className="px-4 py-5 my-5 text-center">
            <img className="d-block mx-auto mb-4" src={logoUrl} alt="" width="200" height="200"/>
                <h1 className="display-5 fw-bold">Jacarandá Helpdesk</h1>
                <div className="col-lg-6 mx-auto">
                    <p className="lead mb-4">Bienvenidos al sistema gestor de incidencias del IES Jacaránda. Aquí podrás crear las incidencias que encuentres en las aulas y serán atendidas por el equipo correspondiente.</p>
                    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                        <button onClick={()=> navigate('/issues')} type="button" className="btn btn-primary btn-lg px-4 gap-3">Ver incidencias</button>
                        <button onClick={()=> navigate('/issues/add')} type="button" className="btn btn-outline-secondary btn-lg px-4">Añadir incidencia</button>
                    </div>
                </div>
        </div>
    )
}

export default Home;