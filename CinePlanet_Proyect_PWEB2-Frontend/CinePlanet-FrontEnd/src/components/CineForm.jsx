import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/CineForm.css';

function CineForm({ onCineAdded }) {
  const [nuevoCine, setNuevoCine] = useState({
    nombre: '',
    ubicacion: '',
    tipos_funcion: [],
    foto_sede: null,
  });

  const [tiposFuncionDisponibles, setTiposFuncionDisponibles] = useState([]);

  useEffect(() => {
    const fetchTiposFuncion = async () => {
      try {
        const response = await axios.get('http://localhost:8000/cines/tipos-funcion/');
        setTiposFuncionDisponibles(response.data);
      } catch (error) {
        console.error('Error al cargar tipos de función:', error);
      }
    };

    fetchTiposFuncion();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNuevoCine({ ...nuevoCine, [name]: value });
  };

  const handleFileChange = (e) => {
    setNuevoCine({ ...nuevoCine, foto_sede: e.target.files[0] });
  };

  const handleTiposFuncionChange = (e) => {
    const selectedOptions = Array.from(e.target.selectedOptions, (option) => option.value);
    setNuevoCine({ ...nuevoCine, tipos_funcion: selectedOptions });
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('nombre', nuevoCine.nombre);
    formData.append('ubicacion', nuevoCine.ubicacion);
    formData.append('foto_sede', nuevoCine.foto_sede);

    nuevoCine.tipos_funcion.forEach((tipo) => {
      formData.append('tipos_funcion', tipo);
    });

    try {
      const response = await axios.post('http://localhost:8000/cines/', formData);
      setNuevoCine({ nombre: '', ubicacion: '', tipos_funcion: [], foto_sede: null });
      alert('Cine agregado exitosamente.');
    } catch (error) {
      console.error('Error al agregar cine:', error);
    }
  };


  return (
    <div className="cine-form-container">
      <h2 className="cine-form-title">Agregar Nuevo Cine</h2>
      <form onSubmit={handleSubmit} encType="multipart/form-data" className="cine-form">
        <div className="mb-3">
          <label htmlFor="nombre" className="form-label">Nombre del Cine</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={nuevoCine.nombre}
            onChange={handleInputChange}
            placeholder="Ingrese el nombre del cine"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="ubicacion" className="form-label">Ubicación</label>
          <input
            type="text"
            id="ubicacion"
            name="ubicacion"
            value={nuevoCine.ubicacion}
            onChange={handleInputChange}
            placeholder="Ingrese la ubicación"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="tipos_funcion" className="form-label">Tipos de Función</label>
          <select
            multiple
            id="tipos_funcion"
            name="tipos_funcion"
            onChange={handleTiposFuncionChange}
            className="form-select"
          >
            {tiposFuncionDisponibles.map((tipo) => (
              <option key={tipo.id} value={tipo.id}>
                {tipo.nombre}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-3">
          <label htmlFor="foto_sede" className="form-label">Foto de la Sede</label>
          <input
            type="file"
            id="foto_sede"
            name="foto_sede"
            onChange={handleFileChange}
            required
          />
        </div>

        <button type="submit" className="btn-submit">Agregar Cine</button>
      </form>
    </div>
  );
}

export default CineForm;
