import React from 'react';
import '../styles/CineCard.css';

function CineCard({ nombre, direccion, imagen, formatos, onConfirm }) {
  return (
    <div className="cine-card">
      <img src={imagen} alt={nombre} className="cine-card-img" />
      <h2>{nombre}</h2>
      <p>{direccion}</p>
      <p className="formatos">{formatos}</p> 
      
    </div>
  );
}

export default CineCard;
