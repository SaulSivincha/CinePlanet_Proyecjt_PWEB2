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
    poster: null,
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
    setFormData({ ...formData, poster: file });

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
    data.append("poster", formData.poster);

    try {
      const response = await axios.post("http://localhost:8000/peliculas/", data, {
        headers: { "Content-Type": "multipart/form-data" },
      });
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
      setErrorMessage("Error al guardar la película. Verifica los campos.");
      setSuccessMessage("");
    }
  };

  return (
    <div className="form-funsion-container">
      <h2 className="form-funsion-title">Añadir Película</h2>
      <form onSubmit={handleSubmit} className="form-funsion shadow-sm">
        {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
        {successMessage && <div className="alert alert-success">{successMessage}</div>}

        <div className="form-group">
          <label>Subir Imagen:</label>
          <input
            type="file"
            accept="image/*"
            className="form-control"
            onChange={handleImageChange}
            required
          />
          {preview && <img src={preview} alt="Previsualización" className="img-preview" />}
        </div>

        <div className="form-group">
          <label>Título:</label>
          <input
            type="text"
            name="titulo"
            value={formData.titulo}
            onChange={handleChange}
            placeholder="Título de la película"
            className="form-control"
            required
          />
        </div>

        <div className="form-group">
          <label>Sinopsis:</label>
          <textarea
            name="sinopsis"
            value={formData.sinopsis}
            onChange={handleChange}
            placeholder="Sinopsis de la película"
            rows="3"
            className="form-control"
            required
          ></textarea>
        </div>

        <div className="form-group">
          <label>Idioma:</label>
          <input
            type="text"
            name="idioma"
            value={formData.idioma}
            onChange={handleChange}
            placeholder="Idioma de la película"
            className="form-control"
            required
          />
        </div>

        <div className="form-group">
          <label>Fecha de Lanzamiento:</label>
          <input
            type="date"
            name="fechaLanzamiento"
            value={formData.fechaLanzamiento}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>

        <div className="form-group form-group-checkbox">
          <label>Disponible:</label>
          <input
            type="checkbox"
            name="disponible"
            checked={formData.disponible}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="btn-submit">Guardar Película</button>
      </form>
    </div>
  );
}

export default FormFunsion;
