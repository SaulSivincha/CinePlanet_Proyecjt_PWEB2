import '../styles/Promocion.css';

function Promocion() {
  return (
    <div className="promotion-card">
      <div className="promotion-text">
        <h1 className="Titulo-promocion">Obtén tu dscto. en un Combo Grande Salado</h1>
        <p>Pide tus códigos por la App Mi Entel Perú de lunes a domingo, incluso feriados y canjea tu combo durante la misma semana en Cineplanet.</p>
        <button className="terms-button">Términos y condiciones</button>
      </div>
      <div className="Imagen-promocion">
        <img src="https://pbs.twimg.com/media/GWfvnu6WAAEo034.jpg" 
          alt="Combo Grande Salado" />
      </div>
    </div>
  );
}

export default Promocion;

