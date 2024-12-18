import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/EliminarPromociones.css";

const EliminarPromociones = () => {
  const [promociones, setPromociones] = useState([]);

  // Obtener promociones de la API
  const fetchPromociones = async () => {
    try {
      const response = await axios.get("http://localhost:8000/promociones/");
      setPromociones(response.data);
    } catch (error) {
      console.error("Error al obtener las promociones:", error);
    }
  };

  // Eliminar una promoción específica
  const handleDelete = async (id) => {
    if (!window.confirm("¿Estás seguro de eliminar esta promoción?")) return;

    try {
      await axios.delete(`http://localhost:8000/promociones/${id}/`);
      setPromociones((prevPromociones) =>
        prevPromociones.filter((promocion) => promocion.id !== id)
      );
      alert("Promoción eliminada exitosamente.");
    } catch (error) {
      console.error("Error al eliminar la promoción:", error);
      alert("Hubo un error al eliminar la promoción.");
    }
  };

  useEffect(() => {
    fetchPromociones();
  }, []);

  return (
    <section className="promociones-eliminar-container mt-4">
      <div className="promociones-eliminar-table-responsive">
        <h2 className="promociones-eliminar-title mb-4">Lista de Promociones</h2>
        <table className="promociones-eliminar-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Imagen</th>
              <th>Título</th>
              <th>Descripción</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {promociones.map((promocion, index) => (
              <tr key={promocion.id}>
                <td>{index + 1}</td>
                <td>
                  <img
                    src={`http://localhost:8000${promocion.imagen}`}
                    alt={promocion.titulo}
                    className="promocion-imagen"
                    width="100"
                  />
                </td>
                <td>{promocion.titulo}</td>
                <td>{promocion.descripcion}</td>
                <td>
                  <button
                    className="promocion-btn-eliminar"
                    onClick={() => handleDelete(promocion.id)}
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {promociones.length === 0 && (
          <p className="text-center">No hay promociones disponibles.</p>
        )}
      </div>
    </section>
  );
};

export default EliminarPromociones;
