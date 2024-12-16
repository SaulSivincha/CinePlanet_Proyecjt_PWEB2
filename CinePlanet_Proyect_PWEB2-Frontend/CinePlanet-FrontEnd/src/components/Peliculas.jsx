import React from 'react';
import NavBar from './NavBar.jsx';
import '../styles/Peliculas.css';
import Funsion from './Funsion.jsx';
import Device from '../devices/Device.jsx';
import FooterP1 from './FooterP1.jsx';
import FooterP2 from './FooterP2.jsx';

function Peliculas() {
    return (
        <div>
            <NavBar />
            <Funsion />
            <div className="peliculas-container">
                <h2>Listado de Películas</h2>
                <Device table="peliculas" />
            </div>
            <FooterP1 />
            <FooterP2 />
        </div>
    );
}

export default Peliculas;
