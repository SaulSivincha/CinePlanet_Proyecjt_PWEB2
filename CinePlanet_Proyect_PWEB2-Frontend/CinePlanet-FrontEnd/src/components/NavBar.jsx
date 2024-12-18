import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/NavBar.css';

function NavBar() {
    const navigate = useNavigate();
    const isLoggedIn = localStorage.getItem('access_token');
    const nombres = localStorage.getItem('nombres');
    const apellidos = localStorage.getItem('apellidos');
    const esAdmin = localStorage.getItem('esAdmin') === 'true';

    const handleLogout = () => {
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
        localStorage.removeItem('nombres');
        localStorage.removeItem('apellidos');
        localStorage.removeItem('esAdmin');
        console.log('Sesión cerrada.');
        navigate('/homepage');
    };

    return (
        <nav>
            <ul>
                {esAdmin && (
                    <li>
                        <button onClick={() => navigate('/administrador')}>Administrador</button>
                    </li>
                )}
                <li><button onClick={() => navigate('/homepage')}>Cineplanet</button></li>
                <li><button onClick={() => navigate('/cines')}>Cines</button></li>
                <li><button onClick={() => navigate('/peliculas')}>Películas</button></li>
                <li><button onClick={() => navigate('/promociones')}>Promociones</button></li>
                <li><button onClick={() => navigate('/dulceria')}>Dulcería</button></li>
                <li><button onClick={() => navigate('/carrito')}><i className="bi bi-cart4"></i></button></li>
                {isLoggedIn ? (
                    <div className="auth-menu">
                        <span className="user-info">
                            <i className="bi bi-person-circle"></i> {nombres} {apellidos}
                        </span>
                        <button onClick={handleLogout} className="btn-logout">
                            Cerrar Sesión
                        </button>
                    </div>
                ) : (
                    <li>
                        <button onClick={() => navigate('/socio')}>
                            <i className="bi bi-person-circle"></i>
                        </button>
                    </li>
                )}
            </ul>
        </nav>
    );
}

export default NavBar;
