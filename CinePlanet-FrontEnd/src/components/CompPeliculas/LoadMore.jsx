import React from 'react'
import "../../styles/stylePeliculas/Loadmore.css/";

function LoadMore() {
  return (
    <section className="restriccion-section">
            <a href="#" className="ver-mas-button">
                 Ver más películas
            </a>
            <p className="restriccion-text">
                <span className="resaltado">( R ) Película con restricción del distribuidor.</span> 
                No válida para promociones, boletos corporativos, ni pases libres.
            </p>
        </section>
  )
}

export default LoadMore;
