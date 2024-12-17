import React from 'react';
import { useNavigate } from 'react-router-dom';

function UsuarioNavBar() {
    const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem('access_token');
  const nombres = localStorage.getItem('nombres');
  const apellidos = localStorage.getItem('apellidos');

  const handleLogout = () => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    localStorage.removeItem('nombres');
    localStorage.removeItem('apellidos');
    console.log('Sesión cerrada.');
    navigate('/');
  };

  return (
    <>
      {isLoggedIn ? (
        <div className="auth-menu">
          <span className="user-info">
            <i className="bi bi-person-circle"></i> {nombres} {apellidos}
          </span>
          <button onClick={handleLogout} className="btn-logout">
            Cerrar Sesión
          </button>
        </div>
      ) : (
        <li><button onClick={() => navigate('/socio')}><i className="bi bi-person-circle"></i></button></li>
      )}
    </>
  );
}

export default UsuarioNavBar;
