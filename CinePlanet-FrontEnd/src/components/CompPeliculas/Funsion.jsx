import React from "react";
import "../../styles/stylePeliculas/Funsion.css/";

const peliculas = [
  {
    id: 1,
    titulo: "Al filo del mañana",
    genero: "Acción",
    duracion: "2.3h",
    clasificacion: "+14",
    imagen: "https://decine21.com/img/upload/obras/all-you-need-is-kill-25384/all-you-need-is-kill-25384-c.jpg", 
  },
  {
    id: 2,
    titulo: "Al filo del mañana",
    genero: "Acción",
    duracion: "2.3h",
    clasificacion: "+14",
    imagen: "https://decine21.com/img/upload/obras/all-you-need-is-kill-25384/all-you-need-is-kill-25384-c.jpg", 
  },
  {
    id: 3,
    titulo: "Al filo del mañana",
    genero: "Acción",
    duracion: "2.3h",
    clasificacion: "+14",
    imagen: "https://decine21.com/img/upload/obras/all-you-need-is-kill-25384/all-you-need-is-kill-25384-c.jpg", 
  },
  {
    id: 4,
    titulo: "Al filo del mañana",
    genero: "Acción",
    duracion: "2.3h",
    clasificacion: "+14",
    imagen: "https://decine21.com/img/upload/obras/all-you-need-is-kill-25384/all-you-need-is-kill-25384-c.jpg", 
  },
  {
    id: 5,
    titulo: "Al filo del mañana",
    genero: "Acción",
    duracion: "2.3h",
    clasificacion: "+14",
    imagen: "https://decine21.com/img/upload/obras/all-you-need-is-kill-25384/all-you-need-is-kill-25384-c.jpg", 
  },
  {
    id: 6,
    titulo: "Al filo del mañana",
    genero: "Acción",
    duracion: "2.3h",
    clasificacion: "+14",
    imagen: "https://decine21.com/img/upload/obras/all-you-need-is-kill-25384/all-you-need-is-kill-25384-c.jpg", 
  },
  {
    id: 7,
    titulo: "Al filo del mañana",
    genero: "Acción",
    duracion: "2.3h",
    clasificacion: "+14",
    imagen: "https://decine21.com/img/upload/obras/all-you-need-is-kill-25384/all-you-need-is-kill-25384-c.jpg", 
  },
  {
    id: 8,
    titulo: "Al filo del mañana",
    genero: "Acción",
    duracion: "2.3h",
    clasificacion: "+14",
    imagen: "https://decine21.com/img/upload/obras/all-you-need-is-kill-25384/all-you-need-is-kill-25384-c.jpg", 
  },
  {
    id: 9,
    titulo: "Al filo del mañana",
    genero: "Acción",
    duracion: "2.3h",
    clasificacion: "+14",
    imagen: "https://decine21.com/img/upload/obras/all-you-need-is-kill-25384/all-you-need-is-kill-25384-c.jpg", 
  },
  {
    id: 10,
    titulo: "Al filo del mañana",
    genero: "Acción",
    duracion: "2.3h",
    clasificacion: "+14",
    imagen: "https://decine21.com/img/upload/obras/all-you-need-is-kill-25384/all-you-need-is-kill-25384-c.jpg", 
  }
];

function Funsion() {
  return (
      <section className="funsion-section container">
          <div className="row">
              {peliculas.map((pelicula) => (
                  <div key={pelicula.id} className="col-6 col-sm-4 col-md-3">
                      <div className="card shadow-sm funsion-movie-card">
                          <img
                              src={pelicula.imagen}
                              className="card-img-top"
                              alt={pelicula.titulo}
                          />
                          <div className="card-body text-center">
                              <h5 className="card-title">{pelicula.titulo}</h5>
                              <p className="card-text text-muted">
                                  {pelicula.genero}, {pelicula.duracion}, {pelicula.clasificacion}
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