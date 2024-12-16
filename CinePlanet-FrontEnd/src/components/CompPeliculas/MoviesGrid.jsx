import React, { useState } from "react";
import "../../styles/stylePeliculas/MoviesGrid.css";

function MoviesGrid() {
  const [activeTab, setActiveTab] = useState("cartelera");

  return (
    <section className="movies-header container">
      <h1 className="movies-title">Películas</h1>
      <nav className="movies-nav">
        <ul>
          <li>
            <button
              className={`nav-link ${activeTab === "cartelera" ? "active" : ""}`}
              onClick={() => setActiveTab("cartelera")}
            >
              En cartelera
            </button>
          </li>
          <li>
            <button
              className={`nav-link ${activeTab === "estrenos" ? "active" : ""}`}
              onClick={() => setActiveTab("estrenos")}
            >
              Próximos estrenos
            </button>
          </li>
        </ul>
      </nav>
    </section>
  );
}

export default MoviesGrid;
