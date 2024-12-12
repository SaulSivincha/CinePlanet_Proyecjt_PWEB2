import { useState } from 'react'
import './App.css'

function App() {
  const [cantidad, setCantidad] = useState(0);

  const agregarProducto = () => {
    setCantidad((prevCantidad) => prevCantidad + 1);
  };

  const quitarProducto = () => {
    setCantidad((prevCantidad) => (prevCantidad > 0 ? prevCantidad - 1 : 0));
  };

  return (
    <>
      <div className="lista">
      <div className="card">
        <img
          src="https://via.placeholder.com/150"
          alt="Producto"
          className="imagen"
        />
        <div className="detalle">
          <p className="titulo">COMBO DUO7 GLADIADOR 2</p>
          <p className="descripcion">
            2 Gaseosas grandes + 2 canchitas grandes saladas + 1 barril gladiador sin canchita + 1 frankfurter + 1 nachos con queso
          </p>
          <p className="precio">S/ 89.90</p>
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
    </div>

    </>
  )
}

export default App
