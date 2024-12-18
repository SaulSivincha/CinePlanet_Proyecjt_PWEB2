import React, { useState } from "react";
import "../../styles/stylePeliculas/FormFunsion.css/";
import axios from 'axios';

function FormFunsion() {
  const [formData, setFormData] = useState({
    titulo: "",
    fechaLanzamiento: "",
    tipoFuncion: "2D",
    imagen: null,
  });

  const [preview, setPreview] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setFormData({
      ...formData,
      imagen: file,
    });

    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Datos del formulario:", formData);
    alert("Formulario enviado correctamente.");
  };

  return (
    <section className="formulario-container container mt-4">
      <form onSubmit={handleSubmit} className="formulario shadow-sm p-4 rounded">
        <h2 className="form-title">Añadir Película</h2>

        <div className="form-group mb-3">
          <label className="form-label">Subir Imagen</label>
          <input
            type="file"
            accept="image/*"
            className="form-control"
            onChange={handleImageChange}
          />
          {preview && <img src={preview} alt="Previsualización" className="img-preview mt-2" />}
        </div>

        <div className="form-group mb-3">
          <label className="form-label">Título de la Película</label>
          <input
            type="text"
            name="titulo"
            value={formData.titulo}
            onChange={handleChange}
            placeholder="Ingrese el título"
            className="form-control"
            required
          />
        </div>

        <div className="form-group mb-3">
          <label className="form-label">Fecha de Lanzamiento</label>
          <input
            type="date"
            name="fechaLanzamiento"
            value={formData.fechaLanzamiento}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>

        <div className="form-buttons">
          <button type="submit" className="btn">Guardar Película</button>
        </div>
      </form>
    </section>
  );
}

export default FormFunsion;
