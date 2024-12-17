import React from 'react';
import { useNavigate } from 'react-router-dom';
import UsuarioNavBar from './UsuarioNavBar';
import '../styles/NavBar.css';

function NavBar() {
    const navigate = useNavigate();

    return (
        <nav>  
            <ul>
                <li><button onClick={() => navigate('/homepage')}>Cineplanet</button></li>
                <li><button onClick={() => navigate('/cines')}>Cines</button></li>
                <li><button onClick={() => navigate('/peliculas')}>Películas</button></li>
                <li><button onClick={() => navigate('/promociones')}>Promociones</button></li>
                <li><button onClick={() => navigate('/dulceria')}>Dulcería</button></li>
                <li><button onClick={() => navigate('/carrito')}><i className="bi bi-cart4"></i></button></li>
                <UsuarioNavBar />
            </ul>
        </nav>
    );
}

export default NavBar;