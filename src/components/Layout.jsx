import { Link, NavLink, Outlet } from 'react-router-dom';


export const Navbar = () => {
    return (
        <div className='container-fluid'>


            <nav className="navbar navbar-expand-sm navbar-dark bg-dark">

                <Link
                    className="navbar-brand"
                    to="/"
                >
                    JacaIssues
                </Link>

                <div className="navbar-collapse">
                    <div className="navbar-nav">

                        <NavLink
                            className="nav-item nav-link"
                            to="/home"
                        >
                            Inicio
                        </NavLink>

                        <NavLink
                            className="nav-item nav-link"
                            to="/issues"
                            end
                        >
                            Incidencias
                        </NavLink>
                    </div>
                </div>

                <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
                    <ul className="navbar-nav ml-auto">
                        <NavLink
                            className="nav-item nav-link"
                            to="/issues/add"
                        >
                            Nueva incidencia
                        </NavLink>
                    </ul>
                </div>
            </nav>
            <main>

                <Outlet />
            </main>
        </div>
    )
}
export default Navbar;