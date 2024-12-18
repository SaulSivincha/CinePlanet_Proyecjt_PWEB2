import FormPromociones from './FormPromociones';
import EliminarPromociones from './EliminarPromociones'
import FormFunsion from './CompPeliculas/FormFunsion';
import EliminarFunsion from './CompPeliculas/EliminarFunsion';
import DulceriaForm from './DulceriaForm';
import EliminarDulceria from './EliminarDulceria';
import CineForm from './CineForm';
import EliminarCines from './EliminarCines';
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
                {activeSection === 'Cine' && <EliminarCines />}
                {activeSection === 'Peliculas' && <FormFunsion />}
                {activeSection === 'Peliculas' && <EliminarFunsion />}
                {activeSection === 'Promociones' && <FormPromociones />}
                {activeSection === 'Promociones' && <EliminarPromociones />}
                {activeSection === 'Dulceria' && <DulceriaForm />}
                {activeSection === 'Dulceria' && <EliminarDulceria />}
            </div>
        </div>
    );
}

export default Administrador;

