import React, { useState, useEffect } from 'react';
import '../styles/Dulceria.css';
import ProductoC from './ProductoC.jsx';
import axios from 'axios';

function DulceriaP() {
  const [productos, setProductos] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const response = await axios.get('http://localhost:8000/dulceria/');
        setProductos(response.data);
      } catch (error) {
        console.error('Error fetching dulceria data:', error);
      }
    };

    fetchProductos();
  }, []);

  const actualizarTotal = (monto) => {
    setTotal((prevTotal) => Math.max(0, prevTotal + monto));
  };

  return (
    <div className="container">
      <h1 className="Principal">CONFITERÍA REGULAR</h1>
      <div className="lista">
        {productos.map((producto) => (
          <ProductoC
            key={producto.id}
            imagen_url={`http://localhost:8000${producto.imagen}`}
            nombre={producto.titulo}
            descripcion={producto.descripcion}
            precio={producto.precio}
            actualizarTotal={actualizarTotal}
          />
        ))}
      </div>
      <div className="total">
        <h3>TOTAL</h3>
        <h2 style={{ color: 'red' }}>S/ {total.toFixed(2)}</h2>
      </div>
      <button className="boton-pagar" onClick={() => alert('Redirigiendo a pago...')}>
        Pagar
      </button>
    </div>
  );
}

export default DulceriaP;