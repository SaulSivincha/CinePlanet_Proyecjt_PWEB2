import React, { useState } from 'react';
import { FaEnvelope, FaLock } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../styles/IniciarSesion.css';

function IniciarSesion() {
  const [formData, setFormData] = useState({
    correo: '',
    contrasena: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate(); // Inicializa navigate

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      setIsSubmitting(true);
      try {
        const response = await axios.post('http://localhost:8000/usuarios/token/', {
          correo: formData.correo,
          contrasena: formData.contrasena,
        });

        if (response.data.access && response.data.refresh) {
          localStorage.setItem('access_token', response.data.access);
          localStorage.setItem('refresh_token', response.data.refresh);
          localStorage.setItem('nombres', response.data.nombres);
          localStorage.setItem('apellidos', response.data.apellidos);

          navigate('/homepage');
        } else {
          setErrorMessage('Respuesta inválida del servidor.');
        }
      } catch (error) {
        if (error.response) {
          console.error('Error del servidor:', error.response.data);
          setErrorMessage(error.response.data.detail || 'Credenciales incorrectas. Inténtalo de nuevo.');
        } else {
          console.error('Error general:', error.message);
          setErrorMessage('Error de conexión con el servidor.');
        }
      } finally {
        setIsSubmitting(false);
      }
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2 className="form-title">Iniciar Sesión</h2>
        <h3 className='form-text-bienvenida'>Ingresa a tu cuenta para disfurtar de tus beneficios, acumular puntos y vivir al máximo la experinecia Cineplanet</h3>
        {errorMessage && <div className="error-message">{errorMessage}</div>}

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="correo" className="form-label">
            <i class="bi bi-envelope-fill"></i>Correo Electrónico
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
            <i class="bi bi-lock-fill"></i>Contraseña
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
          </div>
        </form>
      </div>
    </div>
  );
}

export default IniciarSesion;