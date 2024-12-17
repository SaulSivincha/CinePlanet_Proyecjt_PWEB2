import React, { useState } from 'react';
import { FaEnvelope, FaLock } from 'react-icons/fa';
import '../styles/IniciarSesion.css';
function IniciarSesion() {
  const [formData, setFormData] = useState({
    correo: '',
    contrasena: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    let formErrors = {};
    if (!formData.correo || !/\S+@\S+\.\S+/.test(formData.correo))
      formErrors.correo = 'El correo electrónico es inválido';
    if (!formData.contrasena || formData.contrasena.length < 8)
      formErrors.contrasena = 'La contraseña debe tener al menos 8 caracteres';

    return formErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      setIsSubmitting(true);
      // lógica para enviar el formulario al backend
      console.log('Iniciando sesión con:', formData);
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2 className="form-title">Iniciar Sesión</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="correo" className="form-label">
              <FaEnvelope /> Correo Electrónico
            </label>
            <input
              type="email"
              id="correo"
              name="correo"
              value={formData.correo}
              onChange={handleChange}
              placeholder="Correo Electrónico"
              className="form-input"
            />
            {errors.correo && <span className="error">{errors.correo}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="contrasena" className="form-label">
              <FaLock /> Contraseña
            </label>
            <input
              type="password"
              id="contrasena"
              name="contrasena"
              value={formData.contrasena}
              onChange={handleChange}
              placeholder="Contraseña"
              className="form-input"
            />
            {errors.contrasena && <span className="error">{errors.contrasena}</span>}
          </div>

          <div className="form-buttons">
            <button type="submit" className="btn-login" disabled={isSubmitting}>
              {isSubmitting ? 'Iniciando sesión...' : 'Iniciar Sesión'}
            </button>
            <button type="button" className="btn-register">
              Registrarse
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default IniciarSesion;

