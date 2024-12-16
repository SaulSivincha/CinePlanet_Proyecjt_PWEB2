import React from 'react';
import NavBar from './NavBar.jsx';
import FooterP1 from './FooterP1.jsx';
import FooterP2 from './FooterP2.jsx';
import ComprasDulces from './ComprasDulces.jsx';

function Carrito() {
  // Ejemplo de productos seleccionados
  const productosSeleccionados = [
    {
      imagen_url: "https://via.placeholder.com/150",
      nombre: "Combo Fiesta 3",
      descripcion: "3 Gaseosas pequeñas + 3 canchitas saladas + 1 nacho con queso + 1 bolsa de papas fritas",
      precio: 65.5
    },
    {
      imagen_url: "https://via.placeholder.com/150",
      nombre: "Combo Jumbo 4",
      descripcion: "1 Gaseosa grande + 4 canchitas grandes saladas + 2 nachos con queso + 1 hamburguesa pequeña",
      precio: 120.0
    }
  ];

  return (
    <div>
      <NavBar />
      {/* Incluir Compras con productos de ejemplo */}
      <ComprasDulces productosSeleccionados={productosSeleccionados} />
      <FooterP1 />
      <FooterP2 />
    </div>
  );
}

export default Carrito;

