import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import App from './componentes/App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className="container">
      <div className="lista">
        <App
          imagen_url="https://via.placeholder.com/150"
          nombre="COMBO DUO7 GLADIADOR 2"
          descripcion="2 Gaseosas grandes + 2 canchitas grandes saladas + 1 barril gladiador sin canchita + 1 frankfurter + 1 nachos con queso"
          precio={89.9}
        />
        <App
          imagen_url="https://via.placeholder.com/150"
          nombre="COMBO DUO8 FANTASIA 2"
          descripcion="2 Gaseosas medianas + 2 canchitas grandes dulces + 1 barril de fantasía sin canchita + 2 nachos con queso"
          precio={79.9}
        />
        <App
          imagen_url="https://via.placeholder.com/150"
          nombre="COMBO FIESTA 3"
          descripcion="3 Gaseosas pequeñas + 3 canchitas saladas + 1 nacho con queso + 1 bolsa de papas fritas"
          precio={65.5}
        />
        <App
          imagen_url="https://via.placeholder.com/150"
          nombre="COMBO 4 JUMBO"
          descripcion="1 Gaseosa grande + 4 canchitas grandes saladas + 2 nachos con queso + 1 hamburguesa pequeña"
          precio={120.0}
        />
        <App
          imagen_url="https://via.placeholder.com/150"
          nombre="COMBO FAMILIAR"
          descripcion="2 Gaseosas grandes + 1 pizza mediana + 2 nachos con queso + 2 porciones de helado"
          precio={150.75}
        />
        <App
          imagen_url="https://via.placeholder.com/150"
          nombre="COMBO ENERGÍA"
          descripcion="2 Bebidas energéticas + 1 barra de chocolate + 1 paquete de galletas"
          precio={40.5}
        />
        <App
          imagen_url="https://via.placeholder.com/150"
          nombre="COMBO TROPICAL"
          descripcion="2 Jugo natural + 1 ensalada de frutas + 1 sándwich vegetariano"
          precio={45.0}
        />
        <App
          imagen_url="https://via.placeholder.com/150"
          nombre="COMBO PICNIC"
          descripcion="1 Gaseosa pequeña + 1 paquete de galletas saladas + 1 fruta de temporada"
          precio={35.0}
        />
        <App
          imagen_url="https://via.placeholder.com/150"
          nombre="COMBO NOCHE DE PELÍCULA"
          descripcion="1 Gaseosa grande + 1 pop corn gigante + 1 pizza familiar"
          precio={98.99}
        />
        <App
          imagen_url="https://via.placeholder.com/150"
          nombre="COMBO DEPOSTE"
          descripcion="1 Helado grande + 1 pie de manzana + 1 chocolate caliente"
          precio={55.5}
        />
      </div>
    </div>
  </StrictMode>,
)
