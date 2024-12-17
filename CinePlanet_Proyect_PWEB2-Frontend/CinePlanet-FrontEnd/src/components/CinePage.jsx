import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CineCard from './CineCard';
import '../styles/CinePage.css';

function CinePage() {
  const [cines, setCines] = useState([]);

  useEffect(() => {
    const fetchCines = async () => {
      try {
        const response = await axios.get('http://localhost:8000/cines/');
        setCines(response.data);
      } catch (error) {
        console.error('Error fetching data from API:', error);
      }
    };

    fetchCines();
  }, []);

  return (
    <div className='Caja-pagina'>
      <div className='cajatitle'>
        <h1 className="title">Cines</h1>
      </div>
      <div className="cine-grid">
        {cines.map((cine, index) => (
          <CineCard
            key={index}
            nombre={cine.nombre}
            direccion={cine.ubicacion}
            imagen={'http://localhost:8000${cine.foto_sede}'}
            formatos={cine.tipos_funcion.map((tipo) => tipo.nombre)}
          />
        ))}
      </div>
    </div>
  );
}

export default CinePage;