import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CineCard from './CineCard';
import CineForm from './CineForm';
import '../styles/CinePage.css';

function CinePage() {
  const [cines, setCines] = useState([]);
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [cargando, setCargando] = useState(true); 
  const [error, setError] = useState(null); 

  useEffect(() => {
    const fetchCines = async () => {
      try {
        setCargando(true);
        const response = await axios.get('http://localhost:8000/cines/');
        setCines(response.data);
      } catch (error) {
        setError('Error al obtener los cines');
        console.error('Error fetching data from API:', error);
      } finally {
        setCargando(false);
      }
    };

    fetchCines();
  }, []);

  const handleCineAdded = (nuevoCine) => {
    
    setCines((prevCines) => [...prevCines, nuevoCine]);
  };

  if (cargando) {
    return <div>Loading...</div>; 
  }

  if (error) {
    return <div>{error}</div>; 
  }

  return (
    <div className="Caja-pagina">
      <div className="cajatitle">
        <h1 className="title">Cines</h1>
        <button
          className="agregar-cine-button"
          onClick={() => setMostrarFormulario(true)}
        >
          Agregar Nuevo Cine
        </button>
      </div>

      {mostrarFormulario && (
        <CineForm
          onCineAdded={handleCineAdded}
          onClose={() => setMostrarFormulario(false)}
        />
      )}

      <div className="cine-grid">
        {cines.map((cine) => (
          <CineCard
            key={cine.id}
            nombre={cine.nombre}
            direccion={cine.ubicacion}
            imagen={`http://localhost:8000${cine.foto_sede}`}
            formatos={cine.tipos_funcion.map((tipo) => tipo.nombre).join(', ')} 
          />
        ))}
      </div>
    </div>
  );
}

export default CinePage;
