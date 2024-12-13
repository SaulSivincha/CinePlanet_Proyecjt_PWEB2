import React from 'react';
import './CineCard.css';

function CineCard({ nombre, direccion, imagen }) {
  return (
    <div className="cine-card">
      <img src={imagen} alt={nombre} className="cine-card-img" />
      <h2>{nombre}</h2>
      <p>{direccion}</p>
    </div>
  );
}

export default CineCard;
