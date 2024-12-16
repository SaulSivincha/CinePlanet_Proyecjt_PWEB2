import React, { useState, useEffect } from 'react';
import '../styles/ComprasDulces.css';

function ComprasDulces({ productosSeleccionados }) {
  const [compras, setCompras] = useState([]);

  useEffect(() => {
    setCompras(productosSeleccionados.map(producto => ({ ...producto, cantidad: 1 })));
  }, [productosSeleccionados]);

  const actualizarCantidad = (index, cantidad) => {
    const nuevoCompras = [...compras];
    nuevoCompras[index].cantidad = cantidad;
    setCompras(nuevoCompras);
  };

  const calcularTotal = () => {
    return compras.reduce((acc, item) => acc + item.precio * item.cantidad, 0).toFixed(2);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Productos para comprar:', compras);
  };

  return (
    <form onSubmit={handleSubmit} className="compras-formulario">
      {compras.map((item, index) => (
        <div key={index} className="producto-en-compras">
          <img src={item.imagen_url} alt={item.nombre} />
          <div>
            <h3>{item.nombre}</h3>
            <p>{item.descripcion}</p>
            <input
              type="number"
              value={item.cantidad}
              min="1"
              onChange={(e) => actualizarCantidad(index, parseInt(e.target.value))}
            />
            <span>Precio: S/{(item.precio * item.cantidad).toFixed(2)}</span>
          </div>
        </div>
      ))}
      <div className="total-compras">
        <h3>Total: S/{calcularTotal()}</h3>
      </div>
      <button type="submit" className="boton-confirmar-compras">Confirmar Compra</button>
    </form>
  );
}

export default ComprasDulces;

