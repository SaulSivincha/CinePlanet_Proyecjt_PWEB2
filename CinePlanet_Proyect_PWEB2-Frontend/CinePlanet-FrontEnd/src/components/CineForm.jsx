import React, { useState } from 'react';
import '../styles/CineForm.css';

function CineForm({ onCineAdded, onClose }) {
  const [nuevoCine, setNuevoCine] = useState({
    nombre: '',
    direccion: '',
    imagen: null,
    formatos: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNuevoCine({ ...nuevoCine, [name]: value });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setNuevoCine({ ...nuevoCine, [name]: files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    
    const formData = new FormData();
    formData.append('nombre', nuevoCine.nombre);
    formData.append('ubicacion', nuevoCine.direccion);
    formData.append('foto_sede', nuevoCine.imagen); 
    formData.append('tipos_funcion', nuevoCine.formatos.split(',').map((formato) => formato.trim()));

    try {
      const response = await fetch('http://localhost:8000/cines/', {
        method: 'POST',
        body: formData, 
      });

      if (!response.ok) throw new Error('Error al agregar el cine');

      const data = await response.json();
      onCineAdded(data); 
      setNuevoCine({ nombre: '', direccion: '', imagen: null, formatos: '' }); 
      alert('Cine agregado exitosamente.');
      onClose(); 
    } catch (error) {
      console.error(error);
      alert('Hubo un error al agregar el cine. Intenta nuevamente.');
    }
  };

  return (
    <div className="cine-form-overlay">
      <div className="cine-form-container">
        <button className="close-button" onClick={onClose}>
          ×
        </button>
        <h2>Agregar Nuevo Cine</h2>
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <input
            type="text"
            name="nombre"
            placeholder="Nombre del Cine"
            value={nuevoCine.nombre}
            onChange={handleInputChange}
            required
          />
          <input
            type="text"
            name="direccion"
            placeholder="Dirección"
            value={nuevoCine.direccion}
            onChange={handleInputChange}
            required
          />
          <input
            type="file"
            name="imagen"
            onChange={handleFileChange}
            required
          />
          <input
            type="text"
            name="formatos"
            placeholder="Formatos (separados por coma)"
            value={nuevoCine.formatos}
            onChange={handleInputChange}
            required
          />
          <button type="submit">Agregar Cine</button>
        </form>
      </div>
    </div>
  );
}

export default CineForm;
