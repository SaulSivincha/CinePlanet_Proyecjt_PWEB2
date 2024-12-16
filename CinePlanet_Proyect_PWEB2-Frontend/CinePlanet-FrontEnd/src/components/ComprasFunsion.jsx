import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/ComprasFunsion.css';  // Asegúrate que el CSS es correcto

function ComprasFunsion() {
    const [peliculas, setPeliculas] = useState([]);

    useEffect(() => {
        const fetchPeliculas = async () => {
            try {
                const response = await axios.get('http://localhost:8000/peliculas/');
                const peliculasConDetalles = response.data.map(pelicula => ({
                    ...pelicula,
                    tipoFuncion: '2D',  // Valor predeterminado
                    cantidadEntradas: 1 // Valor predeterminado
                }));
                setPeliculas(peliculasConDetalles);
            } catch (error) {
                console.error('Error al obtener las películas:', error);
            }
        };

        fetchPeliculas();
    }, []);

    const handleTipoFuncionChange = (index, value) => {
        const updatedPeliculas = [...peliculas];
        updatedPeliculas[index].tipoFuncion = value;
        setPeliculas(updatedPeliculas);
    };

    const handleCantidadChange = (index, value) => {
        const updatedPeliculas = [...peliculas];
        updatedPeliculas[index].cantidadEntradas = parseInt(value);
        setPeliculas(updatedPeliculas);
    };

    const eliminarPelicula = (index) => {
        const updatedPeliculas = [...peliculas];
        updatedPeliculas.splice(index, 1);
        setPeliculas(updatedPeliculas);
    };

    const calcularPrecioTotal = (index) => {
        const pelicula = peliculas[index];
        const precios = { '2D': 10, '3D': 15, 'Regular': 7.5 };
        return (precios[pelicula.tipoFuncion] * pelicula.cantidadEntradas).toFixed(2);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Confirmación de compra para todos los productos:', peliculas);
        // Aquí se podría implementar la lógica para procesar todas las compras
    };

    return (
        <div className="compras-funsion-container">
            <h1 className="compras-funsion-header"></h1>
            <form onSubmit={handleSubmit} className="compras-formulario">
                {peliculas.map((pelicula, index) => (
                    <div key={pelicula.id} className="compras-funsion-item">
                        <h2 className="compras-funsion-title">{pelicula.titulo}</h2>
                        <p className="compras-funsion-date">Fecha de Lanzamiento: {pelicula.fecha_lanzamiento}</p>
                        <select 
                            className="compras-funsion-select" 
                            value={pelicula.tipoFuncion} 
                            onChange={(e) => handleTipoFuncionChange(index, e.target.value)}>
                            <option value="2D">2D</option>
                            <option value="3D">3D</option>
                            <option value="Regular">Regular</option>
                        </select>
                        <input 
                            className="compras-funsion-input"
                            type="number" 
                            value={pelicula.cantidadEntradas} 
                            onChange={(e) => handleCantidadChange(index, e.target.value)}
                            min="1"
                        />
                        <p className="compras-funsion-total">Total: ${calcularPrecioTotal(index)}</p>
                        <button className="compras-funsion-btn eliminar" onClick={() => eliminarPelicula(index)}>Eliminar</button>
                    </div>
                ))}
                <button type="submit" className="boton-confirmar-compras">Confirmar Todas las Compras</button>
            </form>
        </div>
    );
}

export default ComprasFunsion;

