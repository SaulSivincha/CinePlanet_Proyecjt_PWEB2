import { useNavigate } from 'react-router-dom';
import '../styles/NavBar.css';
function NavBar() {
    const navigate = useNavigate();

    return (
        <nav>  
            <ul>
                <li><button onClick={() => navigate('/')}>Inicio</button></li>
                <li><button onClick={() => navigate('/cines')}>Cines</button></li>
                <li><button onClick={() => navigate('/peliculas')}>Películas</button></li>
                <li><button onClick={() => navigate('/promociones')}>Promociones</button></li>
                <li><button onClick={() => navigate('/dulceria')}>Dulcería</button></li>
                <li><button onClick={() => navigate('/carrito')}>Carrito</button></li>
                <li><button onClick={() => navigate('/homepage')}>Home</button></li>
            </ul>
        </nav>
    );
}

export default NavBar;

