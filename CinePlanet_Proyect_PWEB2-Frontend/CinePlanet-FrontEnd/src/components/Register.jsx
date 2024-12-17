import React, { useState } from 'react';
import axios from 'axios';
import { FaUser, FaEnvelope, FaLock, FaPhoneAlt } from 'react-icons/fa';
import '../styles/Register.css';

function Register() {
  const [formData, setFormData] = useState({
    nombres: '',
    apellidos: '',
    correo: '',
    fechaNacimiento: '',
    numero_celular: '',
    sexo: '',
    contrasena: '',
    confirmarContrasena: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    let formErrors = {};
    if (!formData.nombres) formErrors.nombres = 'El nombre es obligatorio';
    if (!formData.apellidos) formErrors.apellidos = 'El apellido es obligatorio';
    if (!formData.correo || !/\S+@\S+\.\S+/.test(formData.correo))
      formErrors.correo = 'El correo electrónico es inválido';
    if (!formData.fechaNacimiento) formErrors.fechaNacimiento = 'La fecha de nacimiento es obligatoria';
    if (!formData.numero_celular || !/^\d{9}$/.test(formData.numero_celular))
      formErrors.numero_celular = 'El número de celular debe tener 9 dígitos';
    if (!formData.sexo) formErrors.sexo = 'Selecciona un sexo';
    if (!formData.contrasena || formData.contrasena.length < 8)
      formErrors.contrasena = 'La contraseña debe tener al menos 8 caracteres';
    if (formData.contrasena !== formData.confirmarContrasena)
      formErrors.confirmarContrasena = 'Las contraseñas no coinciden';

    return formErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      console.log('Datos enviados:', formData);
      setIsSubmitting(true);
      try {
        const response = await axios.post('http://localhost:8000/usuarios/register/', {
          nombres: formData.nombres,
          apellidos: formData.apellidos,
          correo: formData.correo,
          fecha_nacimiento: formData.fechaNacimiento,
          numero_celular: formData.numero_celular,
          sexo: formData.sexo,
          contrasena: formData.contrasena,
        });
        setSuccessMessage(response.data.mensaje);
        setFormData({
          nombres: '',
          apellidos: '',
          correo: '',
          fechaNacimiento: '',
          numero_celular: '',
          sexo: '',
          contrasena: '',
        });
      } catch (error) {
        if (error.response) {
          setErrors(error.response.data);
        } else {
          console.error('Error al registrar usuario:', error.message);
        }
      } finally {
        setIsSubmitting(false);
      }
      console.log('Formulario enviado:', formData);
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <div className="register-container">
      <div className="register-form">
        <h2 className="form-title">Formulario de Registro</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="nombres" className="form-label">
              <FaUser /> Nombres
            </label>
            <input
              type="text"
              id="nombres"
              name="nombres"
              value={formData.nombres}
              onChange={handleChange}
              placeholder="Nombres"
              className="form-input"
            />
            {errors.nombres && <span className="error">{errors.nombres}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="apellidos" className="form-label">
              <FaUser /> Apellidos
            </label>
            <input
              type="text"
              id="apellidos"
              name="apellidos"
              value={formData.apellidos}
              onChange={handleChange}
              placeholder="Apellidos"
              className="form-input"
            />
            {errors.apellidos && <span className="error">{errors.apellidos}</span>}
          </div>

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
            <label htmlFor="fechaNacimiento" className="form-label">
              Fecha de Nacimiento
            </label>
            <input
              type="date"
              id="fechaNacimiento"
              name="fechaNacimiento"
              value={formData.fechaNacimiento}
              onChange={handleChange}
              className="form-input"
            />
            {errors.fechaNacimiento && <span className="error">{errors.fechaNacimiento}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="numero_celular" className="form-label">
              <FaPhoneAlt /> Número de Celular
            </label>
            <input
              type="text"
              id="numero_celular"
              name="numero_celular"
              value={formData.numero_celular}
              onChange={handleChange}
              placeholder="Número de Celular"
              className="form-input"
            />
            {errors.numero_celular && <span className="error">{errors.numero_celular}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="sexo" className="form-label">
              Sexo
            </label>
            <select
              id="sexo"
              name="sexo"
              value={formData.sexo}
              onChange={handleChange}
              className="form-input"
            >
              <option value="">Selecciona tu sexo</option>
              <option value="M">Masculino</option>
              <option value="F">Femenino</option>
              <option value="O">Otro</option>
            </select>
            {errors.sexo && <span className="error">{errors.sexo}</span>}
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

          <div className="form-group">
            <label htmlFor="confirmarContrasena" className="form-label">
              Confirmar Contraseña
            </label>
            <input
              type="password"
              id="confirmarContrasena"
              name="confirmarContrasena"
              value={formData.confirmarContrasena}
              onChange={handleChange}
              placeholder="Confirmar Contraseña"
              className="form-input"
            />
            {errors.confirmarContrasena && (
              <span className="error">{errors.confirmarContrasena}</span>
            )}
          </div>
          <div className="form-buttons">
            <button type="submit" className="btn-register" disabled={isSubmitting}>
              Registrarse
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;

