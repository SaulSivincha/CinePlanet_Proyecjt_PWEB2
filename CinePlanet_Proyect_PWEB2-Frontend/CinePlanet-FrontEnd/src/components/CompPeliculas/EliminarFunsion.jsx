import React, { useState } from "react";
import "../../styles/stylePeliculas/EliminarFunsion.css/";

const ListaPeliculas = () => {
  // Datos simulados
  const datosEjemplo = [
    {
      id: 1,
      imagenUrl: "https://via.placeholder.com/100", // Imagen de ejemplo
      titulo: "El Padrino",
      fechaLanzamiento: "1972-03-24",
    },
    {
      id: 2,
      imagenUrl: "https://via.placeholder.com/100",
      titulo: "Interestelar",
      fechaLanzamiento: "2014-11-07",
    },
    {
      id: 3,
      imagenUrl: "https://via.placeholder.com/100",
      titulo: "Inception",
      fechaLanzamiento: "2010-07-16",
    },
  ];

  const [peliculas, setPeliculas] = useState(datosEjemplo);

  const handleDelete = (id) => {
    const nuevasPeliculas = peliculas.filter((pelicula) => pelicula.id !== id);
    setPeliculas(nuevasPeliculas);
  };

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
                    src={pelicula.imagenUrl}
                    alt={pelicula.titulo}
                    className="pelicula-imagen"
                    width="100"
                  />
                </td>
                <td>{pelicula.titulo}</td>
                <td>{pelicula.fechaLanzamiento}</td>
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
      </div>
    </section>
  );
};

export default ListaPeliculas;
