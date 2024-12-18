import React, { useState } from 'react';
import './DulceriaForm.css';

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
    <form className="dulceria-form p-4 border rounded shadow" onSubmit={handleSubmit}>
      <h2 className="text-center mb-4">Agregar Producto a la Dulcería</h2>

      <div className="mb-3">
        <label className="form-label">Imagen:</label>
        <input
          type="file"
          className="form-control"
          onChange={handleImageChange}
          accept="image/*"
          required
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Título:</label>
        <input
          type="text"
          className="form-control"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
          placeholder="Nombre del producto"
          required
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Descripción:</label>
        <textarea
          className="form-control"
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
          placeholder="Descripción del producto"
          required
        ></textarea>
      </div>

      <div className="mb-3">
        <label className="form-label">Precio:</label>
        <div className="input-group">
          <span className="input-group-text">S/</span>
          <input
            type="number"
            className="form-control"
            value={precio}
            onChange={(e) => setPrecio(e.target.value)}
            placeholder="Precio en soles"
            step="0.01"
            required
          />
        </div>
      </div>

      <div className="d-flex justify-content-between">
        <button type="submit" className="btn btn-primary">Agregar Producto</button>
        <button type="button" className="btn btn-primary edit-button" onClick={handleEdit}>
          Editar Producto
        </button>
      </div>
    </form>
  );
}

export default DulceriaForm;