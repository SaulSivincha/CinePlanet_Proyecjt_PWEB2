import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './NavbarAdmin.css';

function Admin() {
  const [active, setActive] = useState('Cineplanet');

  return (
    <div className="navbar-admin">
      <h1>Administrador</h1>
      <nav>
        <button className={active === 'Cineplanet' ? 'active' : ''} onClick={() => { setActive('Cineplanet'); navigate(''); }}>CineplanetForm</button>
        <button className={active === 'Cines' ? 'active' : ''} onClick={() => { setActive('Cines'); navigate(''); }}>CinesForm</button>
        <button className={active === 'Películas' ? 'active' : ''} onClick={() => { setActive('Películas'); navigate(''); }}>PelículasForm</button>
        <button className={active === 'Promociones' ? 'active' : ''} onClick={() => { setActive('Promociones'); navigate(''); }}>PromocionesForm</button>
        <button className={active === 'Dulcería' ? 'active' : ''} onClick={() => { setActive('Dulcería'); navigate(''); }}>DulceríaForm</button>
      </nav>
    </div>
  );
}

export default Admin;