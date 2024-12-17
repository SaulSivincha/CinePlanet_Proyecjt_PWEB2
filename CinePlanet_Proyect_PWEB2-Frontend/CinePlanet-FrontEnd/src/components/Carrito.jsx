import React from 'react';
import ComprasDulces from './ComprasDulces.jsx';
import ComprasFunsion from './ComprasFunsion.jsx';  // Importa el nuevo componente

function Carrito() {
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
      {/* Incluir Compras Dulces con productos de ejemplo */}
      <ComprasDulces productosSeleccionados={productosSeleccionados} />
      {/* Incluir Compras Funsion con productos de ejemplo */}
      <ComprasFunsion productosSeleccionados={productosSeleccionados} />
    </div>
  );
}       

export default Carrito;

