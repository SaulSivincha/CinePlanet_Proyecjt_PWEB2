import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/Promocion.css';

function Promocion() {
  const [promociones, setPromociones] = useState([]);

  useEffect(() => {
    const fetchPromociones = async () => {
      try {
        const response = await axios.get('http://localhost:8000/promociones/');
        setPromociones(response.data);
      } catch (error) {
        console.error('Error fetching promociones:', error);
      }
    };

    fetchPromociones();
  }, []);

  return (
    <div className="promotion-cards">
      {promociones.map((promocion) => (
        <div key={promocion.id} className="promotion-card">
          <div className="promotion-text">
            <h1 className="Titulo-promocion">{promocion.titulo}</h1>
            <p>{promocion.descripcion}</p>
            <button className="terms-button">Términos y condiciones</button>
          </div>
          <div className="Imagen-promocion">
            <img
              src={`http://localhost:8000${promocion.imagen}`}
              alt={promocion.imagen}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default Promocion;
