import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../styles/stylePeliculas/Funsion.css/";

function Funsion() {
  const [peliculas, setPeliculas] = useState([]);

  useEffect(() => {
    const fetchPeliculas = async () => {
      try {
        const response = await axios.get("http://localhost:8000/peliculas/");
        setPeliculas(response.data);
      } catch (error) {
        console.error("Error al obtener las películas:", error);
      }
    };

    fetchPeliculas();
  }, []);

  return (
    <section className="funsion-section container">
    <div className="row">
        {peliculas.map((pelicula) => (
            <div key={pelicula.id} className="col-6 col-sm-4 col-md-3">
                <div className="card shadow-sm funsion-movie-card">
                    <img
                        src={`http://localhost:8000${pelicula.poster}`}
                        className="card-img-top"
                        alt={pelicula.titulo}
                    />
                    <div className="card-body text-center">
                        <h5 className="card-title">{pelicula.titulo}</h5>
                        <p className="card-text text-muted">
                            Fecha de lanzamiento: {pelicula.fecha_lanzamiento}
                        </p>
                    </div>
                </div>
            </div>
        ))}
    </div>
</section>
  );
}

export default Funsion;