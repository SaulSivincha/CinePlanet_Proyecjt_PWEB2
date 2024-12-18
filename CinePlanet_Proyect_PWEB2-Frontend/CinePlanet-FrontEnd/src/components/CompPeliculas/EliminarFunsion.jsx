import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../styles/stylePeliculas/EliminarFunsion.css/";

const ListaPeliculas = () => {
  const [peliculas, setPeliculas] = useState([]);

  const fetchPeliculas = async () => {
    try {
      const response = await axios.get("http://localhost:8000/peliculas/");
      setPeliculas(response.data);
    } catch (error) {
      console.error("Error al obtener las películas:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8000/peliculas/${id}/`);
      setPeliculas((prevPeliculas) => prevPeliculas.filter((p) => p.id !== id));
    } catch (error) {
      console.error("Error al eliminar la película:", error);
    }
  };

  useEffect(() => {
    fetchPeliculas();
  }, []);

  return (
    <section className="peliculas-eliminar-container mt-4">
      <div className="peliculas-eliminar-table-responsive">
        <h2 className="peliculas-eliminar-title mb-4">Lista de Películas</h2>
        <table className="peliculas-eliminar-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Imagen</th>
              <th>Título</th>
              <th>Sinopsis</th>
              <th>Lanzamiento</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {peliculas.map((pelicula, index) => (
              <tr key={pelicula.id}>
                <td>{index + 1}</td>
                <td>
                  <img
                    src={`http://localhost:8000${pelicula.poster}`}
                    alt={pelicula.titulo}
                    className="pelicula-imagen"
                    width="100"
                  />
                </td>
                <td>{pelicula.titulo}</td>
                <td>{pelicula.sinopsis}</td>
                <td>{pelicula.fecha_lanzamiento}</td>
                <td>
                  <button
                    className="pelicula-btn-eliminar"
                    onClick={() => handleDelete(pelicula.id)}
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {peliculas.length === 0 && (
          <p className="text-center">No hay películas disponibles.</p>
        )}
      </div>
    </section>
  );
};

export default ListaPeliculas;