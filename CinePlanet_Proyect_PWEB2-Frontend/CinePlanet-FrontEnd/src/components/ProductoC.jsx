import { useState } from 'react';
import '../styles/Dulceria.css';

function ProductoC({ imagen_url, nombre, descripcion, precio, actualizarTotal }) {
  const [cantidad, setCantidad] = useState(0);

  // Convertir precio a número para evitar errores
  const precioNumerico = Number(precio);

  const agregarProducto = () => {
    setCantidad((prevCantidad) => {
      const nuevaCantidad = prevCantidad + 1;
      actualizarTotal(precioNumerico); // Usamos precio como número
      return nuevaCantidad;
    });
  };

  const quitarProducto = () => {
    setCantidad((prevCantidad) => {
      if (prevCantidad > 0) {
        const nuevaCantidad = prevCantidad - 1;
        actualizarTotal(-precioNumerico); // Restamos el precio como número
        return nuevaCantidad;
      }
      return prevCantidad;
    });
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
          <strong>S/ {precioNumerico.toFixed(2)}</strong> {/* Convertimos precio a número */}
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

export default ProductoC;
