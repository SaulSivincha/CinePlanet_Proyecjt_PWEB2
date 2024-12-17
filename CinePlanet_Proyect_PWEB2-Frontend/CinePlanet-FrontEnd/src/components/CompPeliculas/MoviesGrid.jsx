import React, { useState } from "react";
import "../../styles/stylePeliculas/MoviesGrid.css";

function MoviesGrid() {
  const [selected, setSelected] = useState("enCartelera"); // Estado para controlar selección

  return (
      <div className="movies-grid">
          <div className="movies-title">Películas</div>
          <div className="movies-buttons">
              <button
                  className={`movies-btn ${selected === "enCartelera" ? "active" : ""}`}
                  onClick={() => setSelected("enCartelera")}
              >
                  Cartelera
              </button>
              <button
                  className={`movies-btn ${selected === "proximosEstrenos" ? "active" : ""}`}
                  onClick={() => setSelected("proximosEstrenos")}
              >
                  Próximos estrenos
              </button>
          </div>
      </div>
  );
}

export default MoviesGrid;