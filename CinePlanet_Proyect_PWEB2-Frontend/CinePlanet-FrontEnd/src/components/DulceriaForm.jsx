import React, { useState } from 'react';
import '../styles/DulceriaForm.css';

function DulceriaForm({ onSubmit, onEdit }) {
  const [imagen, setImagen] = useState('');
  const [titulo, setTitulo] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [precio, setPrecio] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const dulceriaItem = { imagen, titulo, descripcion, precio };
    onSubmit(dulceriaItem);
    setImagen('');
    setTitulo('');
    setDescripcion('');
    setPrecio('');
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setImagen(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handleEdit = () => {
    const dulceriaItem = { imagen, titulo, descripcion, precio };
    onEdit && onEdit(dulceriaItem);
  };

  return (
    <div className="dulceria-form-container">
      <h2 className="dulceria-form-title">Agregar Producto a la Dulcería</h2>
      <form onSubmit={handleSubmit} className="dulceria-form shadow-sm">
        <div className="mb-3">
          <label htmlFor="imagen" className="form-label">Imagen:</label>
          <input
            type="file"
            id="imagen"
            className="form-control"
            onChange={handleImageChange}
            accept="image/*"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="titulo" className="form-label">Título:</label>
          <input
            type="text"
            id="titulo"
            className="form-control"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            placeholder="Nombre del producto"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="descripcion" className="form-label">Descripción:</label>
          <textarea
            id="descripcion"
            className="form-control"
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
            placeholder="Descripción del producto"
            required
          ></textarea>
        </div>

        <div className="mb-3">
          <label htmlFor="precio" className="form-label">Precio:</label>
          <div className="input-group">
            <span className="input-group-text">S/</span>
            <input
              type="number"
              id="precio"
              className="form-control"
              value={precio}
              onChange={(e) => setPrecio(e.target.value)}
              placeholder="Precio en soles"
              step="0.01"
              required
            />
          </div>
        </div>

        <div className="dulceria-form-buttons">
          <button type="submit" className="btn-submit">Agregar Producto</button>
          <button type="button" className="btn-edit" onClick={handleEdit}>Editar Producto</button>
        </div>
      </form>
    </div>
  );
}

export default DulceriaForm;