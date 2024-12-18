import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/NavBar.css';

function NavBar() {
    const navigate = useNavigate();

    return (
        <nav>  
            <ul>
                <li><button onclick={() => navigate('/administrador')}>Administrador</button></li>
                <li><button onClick={() => navigate('/homepage')}>Cineplanet</button></li>
                <li><button onClick={() => navigate('/cines')}>Cines</button></li>
                <li><button onClick={() => navigate('/peliculas')}>Películas</button></li>
                <li><button onClick={() => navigate('/promociones')}>Promociones</button></li>
                <li><button onClick={() => navigate('/dulceria')}>Dulcería</button></li>
                <li><button onClick={() => navigate('/carrito')}><i className="bi bi-cart4"></i></button></li>
                  <li><button onClick={() => navigate('/socio')}><i class="bi bi-person-circle"></i> </button></li>
            </ul>
        </nav>
    );
}

export default NavBar;
