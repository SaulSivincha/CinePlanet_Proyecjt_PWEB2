import '../styles/FooterP1.css'

function FooterP1() {
  return (
    <footer className="footer-bg py-4">
      <div className="container">
        <div className="row text-center text-md-start">
          <div className="col-md-4 mb-4 custom-section-container">
            <div className="custom-section-content">
              <h5 className="text-uppercase text-light mb-3">Nosotros</h5>
              <div className="footer-item"><a href="/nosotros" className="text-light text-decoration-none">Conócenos</a></div>
              <div className="footer-item"><a href="https://cineplanet.evaluar.com/" target="_blank" rel="noopener noreferrer" className="text-light text-decoration-none">Trabaja con nosotros</a></div>
              <div className="footer-item"><a href="/ventas-corporativas" className="text-light text-decoration-none">Ventas Corporativas</a></div>
              <div className="footer-item"><a href="https://cdnpe.cineplanet.com.pe/assets/c959094b-0d6b-40d9-9aea-45ea51159257" target="_blank" rel="noopener noreferrer" className="text-light text-decoration-none">Memoria de Gestión 2024</a></div>
            </div>
            <img src="https://www.cineplanet.com.pe/images/huellacarbono23.png" alt="Huella de Carbono" className="img-fluid mt-3" style={{ maxWidth: '120px' }} />
          </div>

          <div className="col-md-4 mb-4 custom-section-container">
            <div className="custom-section-content">
              <h5 className="text-uppercase text-light mb-3">Atención al cliente</h5>
              <div className="footer-item"><a href="/boleta-electronica" className="text-light text-decoration-none">Ver mi boleta electrónica</a></div>
              <div className="footer-item"><a href="/productos-permitidos" className="text-light text-decoration-none">Lista de productos permitidos</a></div>
              <a href="/contactenos" className="btn btn-outline-light d-inline-flex align-items-center">
                <i className="bi bi-envelope me-2"></i> Atención de Consultas o Incidencias por Contáctanos
              </a>
            </div>
          </div>

          <div className="col-md-4 mb-4 custom-section-container">
            <div className="custom-section-content">
              <h5 className="text-uppercase text-light mb-3">Políticas y condiciones</h5>
              <div className="footer-item"><a href="/politica-sst" className="text-light text-decoration-none">Política de SST</a></div>
              <div className="footer-item"><a href="/sostenibilidad" className="text-light text-decoration-none">Política de Sostenibilidad</a></div>
              <div className="footer-item"><a href="/diversidad" className="text-light text-decoration-none">Política de Diversidad e Inclusión</a></div>
              <div className="footer-item"><a href="/privacidad" className="text-light text-decoration-none">Política de Privacidad</a></div>
              <div className="footer-item"><a href="/condiciones-uso" className="text-light text-decoration-none">Condiciones de uso</a></div>
              <div className="footer-item"><a href="/reglas-convivencia" className="text-light text-decoration-none">Reglas de Convivencia</a></div>
              <div className="footer-item"><a href="/terminos" className="text-light text-decoration-none">Términos y condiciones</a></div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default FooterP1;
