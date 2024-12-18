import React, { useState } from 'react';
import '../styles/FormPromociones.css';

function FormPromociones() {
    const [nombre, setNombre] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [archivo, setArchivo] = useState(null);

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log({ nombre, descripcion, archivo });
    };

    const handleFileChange = (event) => {
        setArchivo(event.target.files[0]);
    };

    return (
        <div className="FormPromociones">
    <form onSubmit={handleSubmit}>
        <h2>Guardar Promoción</h2> 
        <label htmlFor="nombre">
            Nombre de la promoción:
            <input
                type="text"
                id="nombre"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
            />
        </label>
        <label htmlFor="descripcion">
            Descripción:
            <textarea
                id="descripcion"
                value={descripcion}
                onChange={(e) => setDescripcion(e.target.value)}
            />
        </label>
        <label htmlFor="archivo">
            Subir archivo:
            <input
                type="file"
                id="archivo"
                onChange={handleFileChange}
            />
        </label>
        <button type="submit">Guardar Promoción</button> 
    </form>
</div>
 
    );
}

export default FormPromociones;

