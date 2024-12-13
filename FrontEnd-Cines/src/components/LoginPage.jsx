import React from 'react';

function LoginPage() {
  return (
    <div>
      <h1>Iniciar Sesión</h1>
      <form>
        <label htmlFor="email">Correo electrónico:</label>
        <input type="email" id="email" name="email" required />
        <br />
        <label htmlFor="password">Contraseña:</label>
        <input type="password" id="password" name="password" required />
        <br />
        <button type="submit">Ingresar</button>
      </form>
    </div>
  );
}

export default LoginPage;
