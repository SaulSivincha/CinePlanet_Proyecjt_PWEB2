import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/EliminarCines.css";

const EliminarCines = () => {
  const [cines, setCines] = useState([]);

  const fetchCines = async () => {
    try {
      const response = await axios.get("http://localhost:8000/cines/");
      setCines(response.data);
    } catch (error) {
      console.error("Error al obtener los cines:", error);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("¿Estás seguro de eliminar este cine?")) return;

    try {
      await axios.delete(`http://localhost:8000/cines/${id}/`);
      setCines((prevCines) => prevCines.filter((cine) => cine.id !== id));
      alert("Cine eliminado exitosamente.");
    } catch (error) {
      console.error("Error al eliminar el cine:", error);
      alert("Hubo un error al eliminar el cine.");
    }
  };

  useEffect(() => {
    fetchCines();
  }, []);

  return (
    <section className="cines-eliminar-container mt-4">
      <div className="cines-eliminar-table-responsive">
        <h2 className="cines-eliminar-title mb-4">Lista de Cines</h2>
        <table className="cines-eliminar-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Imagen</th>
              <th>Nombre</th>
              <th>Ubicación</th>
              <th>Formato</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {cines.map((cine, index) => (
              <tr key={cine.id}>
                <td>{index + 1}</td>
                <td>
                  <img
                    src={`http://localhost:8000${cine.foto_sede}`}
                    alt={cine.nombre}
                    className="cine-imagen"
                  />
                </td>
                <td className="text-wrap">{cine.nombre}</td>
                <td className="text-wrap">{cine.ubicacion}</td>
                <td className="text-wrap">{cine.tipos_funcion}</td>
                <td>
                  <button
                    className="cine-btn-eliminar"
                    onClick={() => handleDelete(cine.id)}
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {cines.length === 0 && (
          <p className="text-center">No hay cines disponibles.</p>
        )}
      </div>
    </section>
  );
};

export default EliminarCines;
