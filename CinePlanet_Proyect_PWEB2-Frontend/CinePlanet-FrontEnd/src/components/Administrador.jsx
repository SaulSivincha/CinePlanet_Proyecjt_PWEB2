import FormPromociones from './FormPromociones';
import FormFunsion from './CompPeliculas/FormFunsion';
import EliminarFunsion from './CompPeliculas/EliminarFunsion';
import DulceriaForm from './DulceriaForm';
import CineForm from './CineForm';
import React, { useState } from 'react';
import '../styles/Admi.css';

function Administrador() {
    const [activeSection, setActiveSection] = useState('Cine');

    const handleSectionClick = (section) => {
        setActiveSection(section);
    };

    return (
        <div className="main-container">
            <div className="nav-container">
                <ul>
                    <li onClick={() => handleSectionClick('Cine')}>Form. Cines</li>
                    <li onClick={() => handleSectionClick('Peliculas')}>Form. Películas</li>
                    <li onClick={() => handleSectionClick('Promociones')}>Form. Promociones</li>
                    <li onClick={() => handleSectionClick('Dulceria')}>Form. Dulcería</li>
                </ul>
            </div>
            <div>
                {activeSection === 'Cine' && <CineForm />}
                {activeSection === 'Peliculas' && <FormFunsion />}
                {activeSection === 'Peliculas' && <EliminarFunsion />}
                {activeSection === 'Promociones' && <FormPromociones />}
                {activeSection === 'Dulceria' && <DulceriaForm />}
            </div>
        </div>
    );
}

export default Administrador;

