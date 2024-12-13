import React, { useState } from 'react'; // Elimina StrictMode aquí si ya lo declaraste antes
import { StrictMode } from 'react'; // Si ya está incluido en React, no lo declares nuevamente
import { createRoot } from 'react-dom/client';
import '../styles/Dulceria.css';
import ProductoC from './ProductoC.jsx';

function DulceriaP() {
  const [total, setTotal] = useState(0);

  const actualizarTotal = (monto) => {
    setTotal((prevTotal) => Math.max(0, prevTotal + monto)); // Asegura que nunca sea negativo
  };

  return (
    <StrictMode>
      <div className="container">
        <h1 class="Principal">CONFITERÍA REGULAR</h1>
        <div className="lista">
          <ProductoC
            imagen_url="https://via.placeholder.com/150"
            nombre="COMBO FIESTA 3"
            descripcion="3 Gaseosas pequeñas + 3 canchitas saladas + 1 nacho con queso + 1 bolsa de papas fritas"
            precio={65.5}
            actualizarTotal={actualizarTotal}
          />
          <ProductoC
            imagen_url="https://via.placeholder.com/150"
            nombre="COMBO 4 JUMBO"
            descripcion="1 Gaseosa grande + 4 canchitas grandes saladas + 2 nachos con queso + 1 hamburguesa pequeña"
            precio={120.0}
            actualizarTotal={actualizarTotal}
          />
          <ProductoC
            imagen_url="https://via.placeholder.com/150"
            nombre="COMBO FAMILIAR"
            descripcion="2 Gaseosas grandes + 1 pizza mediana + 2 nachos con queso + 2 porciones de helado"
            precio={150.75}
            actualizarTotal={actualizarTotal}
          />
          <ProductoC
            imagen_url="https://via.placeholder.com/150"
            nombre="COMBO ENERGÍA"
            descripcion="2 Bebidas energéticas + 1 barra de chocolate + 1 paquete de galletas"
            precio={40.5}
            actualizarTotal={actualizarTotal}
          />
          <ProductoC
            imagen_url="https://via.placeholder.com/150"
            nombre="COMBO TROPICAL"
            descripcion="2 Jugos naturales + 1 ensalada de frutas + 1 sándwich vegetariano"
            precio={45.0}
            actualizarTotal={actualizarTotal}
          />
          <ProductoC
            imagen_url="https://via.placeholder.com/150"
            nombre="COMBO PICNIC"
            descripcion="1 Gaseosa pequeña + 1 paquete de galletas saladas + 1 fruta de temporada"
            precio={35.0}
            actualizarTotal={actualizarTotal}
          />
          <ProductoC
            imagen_url="https://via.placeholder.com/150"
            nombre="COMBO NOCHE DE PELÍCULA"
            descripcion="1 Gaseosa grande + 1 pop corn gigante + 1 pizza familiar"
            precio={98.99}
            actualizarTotal={actualizarTotal}
          />
          <ProductoC
            imagen_url="https://via.placeholder.com/150"
            nombre="COMBO POSTRE"
            descripcion="1 Helado grande + 1 pie de manzana + 1 chocolate caliente"
            precio={55.5}
            actualizarTotal={actualizarTotal}
          />
          <ProductoC
            imagen_url="https://via.placeholder.com/150"
            nombre="COMBO FITNESS"
            descripcion="1 Agua mineral + 1 ensalada light + 1 barra de proteína"
            precio={50.0}
            actualizarTotal={actualizarTotal}
          />
          <ProductoC
            imagen_url="https://via.placeholder.com/150"
            nombre="COMBO VEGETARIANO"
            descripcion="1 Smoothie de frutas + 1 wrap vegetariano + 1 ensalada de quinoa"
            precio={60.0}
            actualizarTotal={actualizarTotal}
          />
          <ProductoC
            imagen_url="https://via.placeholder.com/150"
            nombre="COMBO SNACK"
            descripcion="1 Paquete de papas fritas + 1 galleta + 1 gaseosa mediana"
            precio={30.0}
            actualizarTotal={actualizarTotal}
          />
          {/* Agrega los demás productos de la misma forma */}
        </div>
        <div className="total">
          <h3>TOTAL</h3>
          <h2 style={{ color: "red" }}>S/ {total.toFixed(2)}</h2>
        </div>
        <button class="boton-pagar" onclick="redirigir()">Pagar</button>
      </div>
    </StrictMode>
  );
}

export default DulceriaP;
