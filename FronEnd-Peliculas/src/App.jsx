import React from "react";
import Peliculas from "./components/Peliculas";

const App = () => {
  return (
    <div>
      <h1 className="text-center mt-4">Cartelera de Películas</h1>
      <Peliculas />
    </div>
  );
};

export default App;

