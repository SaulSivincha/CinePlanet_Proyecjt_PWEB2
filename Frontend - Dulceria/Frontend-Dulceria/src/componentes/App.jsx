import { useState } from 'react'
import './App.css'

function App({ imagen_url, nombre, descripcion, precio }) {
  const [cantidad, setCantidad] = useState(0);

  const agregarProducto = () => {
    setCantidad((prevCantidad) => prevCantidad + 1);
  };

  const quitarProducto = () => {
    setCantidad((prevCantidad) => (prevCantidad > 0 ? prevCantidad - 1 : 0));
  };

  return (
    <div className="card">
      <img src={imagen_url} alt={nombre} className="imagen" />
      <div className="detalle">
        <p className="titulo">
          <strong>{nombre}</strong>
        </p>
        <p className="descripcion">
          <span>{descripcion}</span>
        </p>
        <p className="precio">
          <strong>S/ {precio.toFixed(2)}</strong>
        </p>
        <div className="controles">
          <button className="boton" onClick={quitarProducto}>
            -
          </button>
          <p className="cantidad">{cantidad}</p>
          <button className="boton" onClick={agregarProducto}>
            +
          </button>
        </div>
      </div>
    </div>
  );
}

export default App
