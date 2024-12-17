import React from "react";
import "../../styles/stylePeliculas/Sidebar.css";

function Sidebar() {
  return (
    <div className="filtro-container">
      <span className="filtro-icon">&#9776;</span>
      <span className="filtro-title">Filtrar Por:</span>
    </div>
  );
}

export default Sidebar;

