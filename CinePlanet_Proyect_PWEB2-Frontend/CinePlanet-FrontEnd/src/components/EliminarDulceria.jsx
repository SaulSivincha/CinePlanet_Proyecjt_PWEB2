import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/EliminarDulceria.css";

const EliminarDulceria = () => {
  const [productos, setProductos] = useState([]);

  const fetchProductos = async () => {
    try {
      const response = await axios.get("http://localhost:8000/dulceria/");
      setProductos(response.data);
    } catch (error) {
      console.error("Error al obtener los productos de la dulcería:", error);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("¿Estás seguro de eliminar este producto?")) return;

    try {
      await axios.delete(`http://localhost:8000/dulceria/${id}/`);
      setProductos((prevProductos) =>
        prevProductos.filter((producto) => producto.id !== id)
      );
      alert("Producto eliminado exitosamente.");
    } catch (error) {
      console.error("Error al eliminar el producto:", error);
      alert("Hubo un error al eliminar el producto.");
    }
  };

  useEffect(() => {
    fetchProductos();
  }, []);

  return (
    <section className="dulceria-eliminar-container mt-4">
      <div className="dulceria-eliminar-table-responsive">
        <h2 className="dulceria-eliminar-title mb-4">Lista de Productos</h2>
        <table className="dulceria-eliminar-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Imagen</th>
              <th>Título</th>
              <th>Descripción</th>
              <th>Precio</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {productos.map((producto, index) => (
              <tr key={producto.id}>
                <td>{index + 1}</td>
                <td>
                  <img
                    src={`http://localhost:8000${producto.imagen}`}
                    alt={producto.titulo}
                    className="dulceria-imagen"
                  />
                </td>
                <td className="text-wrap">{producto.titulo}</td>
                <td className="text-wrap">{producto.descripcion}</td>
                <td>S/ {producto.precio ? Number(producto.precio).toFixed(2) : "0.00"}</td>
                <td>
                  <button
                    className="dulceria-btn-eliminar"
                    onClick={() => handleDelete(producto.id)}
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {productos.length === 0 && (
          <p className="text-center">No hay productos disponibles.</p>
        )}
      </div>
    </section>
  );
};

export default EliminarDulceria;
