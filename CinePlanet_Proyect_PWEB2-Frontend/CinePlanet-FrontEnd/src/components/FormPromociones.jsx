import React, { useState } from 'react';
import axios from 'axios';
import '../styles/FormPromociones.css';

function FormPromociones() {
  const [titulo, setTitulo] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [imagen, setImagen] = useState(null);
  const [mensaje, setMensaje] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    const formData = new FormData();
    formData.append('titulo', titulo);
    formData.append('descripcion', descripcion);
    formData.append('imagen', imagen);
  
    try {
      const response = await axios.post('http://localhost:8000/promociones/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data', // Este encabezado debe ser opcional
        },
      });
      console.log('Promoción guardada:', response.data);
    } catch (error) {
      console.error('Error al enviar la promoción:', error.response?.data || error.message);
    }
  };
  
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImagen(file);
    }
  };

  return (
    <div className="FormPromociones">
      <form onSubmit={handleSubmit}>
        <h2>Guardar Promoción</h2>

        {mensaje && <p className="form-message">{mensaje}</p>}

        <label htmlFor="titulo">Nombre de la promoción:</label>
        <input
          type="text"
          id="titulo"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
          placeholder="Nombre de la promoción"
          required
        />

        <label htmlFor="descripcion">Descripción:</label>
        <textarea
          id="descripcion"
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
          placeholder="Escribe la descripción"
          required
        />

        <label htmlFor="imagen">Subir imagen:</label>
        <input
          type="file"
          id="imagen"
          accept="image/*"
          onChange={handleFileChange}
          required
        />

        <button type="submit" className="btn-submit">Guardar Promoción</button>
      </form>
    </div>
  );
}

export default FormPromociones;
