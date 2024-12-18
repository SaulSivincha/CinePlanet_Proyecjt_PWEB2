import React, { useState } from "react";
import "../../styles/stylePeliculas/FormFunsion.css";
import axios from "axios";

function FormFunsion() {
  const [formData, setFormData] = useState({
    titulo: "",
    sinopsis: "",
    idioma: "",
    disponible: true,
    fechaLanzamiento: "",
    poster: null, // Cambia el nombre aquí a 'poster'
  });

  const [preview, setPreview] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setFormData({
      ...formData,
      poster: file, // Actualiza 'poster' aquí
    });

    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("titulo", formData.titulo);
    data.append("sinopsis", formData.sinopsis);
    data.append("idioma", formData.idioma);
    data.append("disponible", formData.disponible);
    data.append("fecha_lanzamiento", formData.fechaLanzamiento);
    data.append("poster", formData.poster); // Asegúrate de enviar 'poster'

    try {
      const response = await axios.post("http://localhost:8000/peliculas/", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log("Película guardada:", response.data);
      setSuccessMessage("Película guardada exitosamente.");
      setErrorMessage("");
      setFormData({
        titulo: "",
        sinopsis: "",
        idioma: "",
        disponible: true,
        fechaLanzamiento: "",
        poster: null,
      });
      setPreview(null);
    } catch (error) {
      console.error("Error al enviar la película:", error.response?.data || error.message);
      setErrorMessage("Error al guardar la película. Verifica los campos.");
      setSuccessMessage("");
    }
  };

  return (
    <section className="formulario-container container mt-4">
      <form onSubmit={handleSubmit} className="formulario shadow-sm p-4 rounded">
        <h2 className="form-title">Añadir Película</h2>

        {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
        {successMessage && <div className="alert alert-success">{successMessage}</div>}

        <div className="form-group mb-3">
          <label className="form-label">Subir Imagen</label>
          <input
            type="file"
            accept="image/*"
            className="form-control"
            onChange={handleImageChange}
            required
          />
          {preview && (
            <img
              src={preview}
              alt="Previsualización"
              className="img-preview mt-2"
              style={{ maxWidth: "200px", height: "auto" }}
            />
          )}
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
          <label className="form-label">Sinopsis</label>
          <textarea
            name="sinopsis"
            value={formData.sinopsis}
            onChange={handleChange}
            placeholder="Ingrese la sinopsis"
            rows="3"
            className="form-control"
            required
          ></textarea>
        </div>

        <div className="form-group mb-3">
          <label className="form-label">Idioma</label>
          <input
            type="text"
            name="idioma"
            value={formData.idioma}
            onChange={handleChange}
            placeholder="Ingrese el idioma"
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

        <div className="form-group mb-3">
          <label className="form-label me-2">Disponible</label>
          <input
            type="checkbox"
            name="disponible"
            checked={formData.disponible}
            onChange={handleChange}
            className="form-check-input"
          />
        </div>

        <div className="form-buttons">
          <button type="submit" className="btn btn-primary">
            Guardar Película
          </button>
        </div>
      </form>
    </section>
  );
}

export default FormFunsion;
