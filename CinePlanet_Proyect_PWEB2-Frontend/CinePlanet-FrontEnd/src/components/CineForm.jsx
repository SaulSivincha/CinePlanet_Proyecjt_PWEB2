import React, { useState } from 'react';
import '../styles/CineForm.css';

function CineForm({ onCineAdded, onClose }) {
  const [nuevoCine, setNuevoCine] = useState({
    nombre: '',
    ubicacion: '',
    tipos_funcion: '',
    foto_sede: null,
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
    formData.append('ubicacion', nuevoCine.ubicacion);
    formData.append('foto_sede', nuevoCine.foto_sede); 
    formData.append('tipos_funcion', nuevoCine.tipos_funcion.split(',').map((tipos_funcion) => tipos_funcion.trim()));

    try {
      const response = await fetch('http://localhost:8000/cines/', {
        method: 'POST',
        body: formData, 
      });

      if (!response.ok) throw new Error('Error al agregar el cine');

      const data = await response.json();
      onCineAdded(data); 
      setNuevoCine({ nombre: '', ubicacion: '', foto_sede: null, tipos_funcion: '' }); 
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
          <div class="mb-3">
            <label  for="nombre" class="form-label">Nombre de Cine </label>
            <input type="text" name="nombre" placeholder="nombre" value={nuevoCine.nombre} onChange={handleInputChange} required ></input>
          </div>
          <div class="mb-3">
            <label for="Ubicacion" class="form-label">Ubicacion </label>
            <input type="text" name="ubicacion" placeholder="ubicacion" value={nuevoCine.ubicacion} onChange={handleInputChange} required></input>
          </div>
          <div class="mb-3">
            <label for="foto_sede" class="form-label">Imagen </label>
            <input type="file" name="foto_sede" onChange={handleFileChange} required></input>
          </div>
          <div className="mb-3">
            <label htmlFor="tipos_funcion" className="form-label">Formato</label>
            <select 
                name="tipos_funcion" 
                className="form-select" 
                aria-label="Seleccionar formato" 
                value={nuevoCine.tipos_funcion} 
                onChange={handleInputChange} 
                required
            >
                <option value="" disabled>Elegir Formato</option>
                <option value="3D">3D</option>
                <option value="2D">2D</option>
                <option value="Regular">Regular</option>
            </select>
        </div>

          <button type="submit">Agregar Cine</button>
        </form>
      </div>
    </div>
  );
}

export default CineForm;
