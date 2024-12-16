import './App.css'
import './index.css'

function Footer() {
  return (
    <footer className="footer-bg py-4">
      <div className="container">
        <div className="row text-center text-md-start">
          {/* Sección Nosotros */}
          <div className="col-md-4 mb-4">
            <div className="section-content">
              <h5 className="text-uppercase text-light mb-3">Nosotros</h5>
              <ul className="list-unstyled">
                <li><a href="/nosotros" className="text-light text-decoration-none">Conócenos</a></li>
                <li><a href="https://cineplanet.evaluar.com/" target="_blank" rel="noopener noreferrer" className="text-light text-decoration-none">Trabaja con nosotros</a></li>
                <li><a href="/ventas-corporativas" className="text-light text-decoration-none">Ventas Corporativas</a></li>
                <li><a href="https://cdnpe.cineplanet.com.pe/assets/c959094b-0d6b-40d9-9aea-45ea51159257" target="_blank" rel="noopener noreferrer" className="text-light text-decoration-none">Memoria de Gestión 2023</a></li>
              </ul>
            </div>
            <img src="https://www.cineplanet.com.pe/images/huellacarbono23.png" alt="Huella de Carbono" className="img-fluid mt-3" style={{ maxWidth: '120px' }} />
          </div>

          {/* Sección Atención al Cliente */}
          <div className="col-md-4 mb-4">
            <div className="section-content">
              <h5 className="text-uppercase text-light mb-3">Atención al cliente</h5>
              <ul className="list-unstyled">
                <li><a href="/boleta-electronica" className="text-light text-decoration-none">Ver mi boleta electrónica</a></li>
                <li><a href="/productos-permitidos" className="text-light text-decoration-none">Lista de productos permitidos</a></li>
              </ul>
              <a href="/contactenos" className="btn btn-outline-light d-inline-flex align-items-center">
                <i className="bi bi-envelope me-2"></i> Atención de Consultas o Incidencias por Contáctanos
              </a>
            </div>
          </div>

          {/* Sección Políticas y Condiciones */}
          <div className="col-md-4 mb-4">
            <div className="section-content">
              <h5 className="text-uppercase text-light mb-3">Políticas y condiciones</h5>
              <ul className="list-unstyled">
                <li><a href="/politica-sst" className="text-light text-decoration-none">Política de SST</a></li>
                <li><a href="/sostenibilidad" className="text-light text-decoration-none">Política de Sostenibilidad</a></li>
                <li><a href="/diversidad" className="text-light text-decoration-none">Política de Diversidad e Inclusión</a></li>
                <li><a href="/privacidad" className="text-light text-decoration-none">Política de Privacidad</a></li>
                <li><a href="/condiciones-uso" className="text-light text-decoration-none">Condiciones de uso</a></li>
                <li><a href="/reglas-convivencia" className="text-light text-decoration-none">Reglas de Convivencia</a></li>
                <li><a href="/terminos" className="text-light text-decoration-none">Términos y condiciones</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
