import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../styles/stylePeliculas/Funsion.css/";
function Funsion() {
    const [peliculas, setPeliculas] = useState([]);
    const [tipoFuncion, setTipoFuncion] = useState("2D");
    const [cantidadEntradas, setCantidadEntradas] = useState(1);
    const precios = { "2D": 10, "3D": 15, "Regular": 7.5 };  // Ejemplo de precios

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

    const handleTipoFuncionChange = (event) => {
        setTipoFuncion(event.target.value);
    };

    const handleCantidadChange = (event) => {
        setCantidadEntradas(event.target.value);
    };

    const calcularPrecioTotal = () => {
        return precios[tipoFuncion] * cantidadEntradas;
    };

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
                                <select value={tipoFuncion} onChange={handleTipoFuncionChange}>
                                    <option value="2D">2D</option>
                                    <option value="3D">3D</option>
                                    <option value="Regular">Regular</option>
                                </select>
                                <input type="number" value={cantidadEntradas} onChange={handleCantidadChange} min="1" />
                                <p>Total: ${calcularPrecioTotal().toFixed(2)}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Funsion;

