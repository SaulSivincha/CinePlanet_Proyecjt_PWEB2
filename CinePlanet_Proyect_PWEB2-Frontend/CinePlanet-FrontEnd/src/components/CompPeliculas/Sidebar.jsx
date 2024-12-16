import React from 'react'
import "../../styles/stylePeliculas/Sidebar.css/";

const filtros = ["Ciudad", "Cine", "Día", "Género", "Idioma", "Formato", "Censura"];

function Sidebar() {
  return (
      <section className="sidebar p-3 bg-light border">
        <h5 className="fw-bold mb-3">Filtrar Por:</h5>
        <ul className="list-unstyled">
          {filtros.map((filtro, index) => (
            <li key={index} className="mb-2">
              <button className="btn btn-link text-dark text-decoration-none">
                {filtro} <span className="text-muted">+</span>
              </button>
            </li>
          ))}
        </ul>
      </section>
  );
}

export default Sidebar;