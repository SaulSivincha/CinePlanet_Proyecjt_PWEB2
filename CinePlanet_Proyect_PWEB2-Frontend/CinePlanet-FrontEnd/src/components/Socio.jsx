import React, { useState } from 'react';
import '../styles/Socio.css';
import Register from './Register.jsx'; 
import IniciarSesion from './IniciarSesion.jsx';

function Socio() {
  const [showRegister, setShowRegister] = useState(false);

  const toggleForm = () => {
    setShowRegister(!showRegister);
  };

  return (
    <div className="socio">
      <div className="form-container">
        {showRegister ? (
          <div className="Register">
            <Register />
          </div>
        ) : (
          <div className="IniciarSesion">
            <IniciarSesion />
          </div>
        )}
      </div>
      <div className="toggle-button">
        <button onClick={toggleForm}>
          {showRegister ? '¿Ya tienes cuenta? Iniciar sesión' : '¿No tienes cuenta? Regístrate'}
        </button>
      </div>
    </div>
  );
}

export default Socio;


