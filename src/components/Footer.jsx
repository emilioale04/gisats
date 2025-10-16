import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Departamento</h3>
          <p>Departamento de Sistemas Alimentarios Sustentables</p>
          <p>Universidad Nacional Autónoma</p>
          <p>Av. Universidad 1000, Ciudad Universitaria</p>
          <p>CP 04510, CDMX, México</p>
        </div>
        
        <div className="footer-section">
          <h3>Contacto</h3>
          <p>Email: <a href="mailto:contacto@gisats.mx">contacto@gisats.mx</a></p>
          <p>Tel: +52 (55) 1234-5678</p>
          <p>Horario: Lun - Vie, 9:00 - 18:00</p>
        </div>
        
        <div className="footer-section">
          <h3>Síguenos</h3>
          <div className="social-links">
            <a href="#" aria-label="Facebook">Facebook</a>
            <a href="#" aria-label="Twitter">Twitter</a>
            <a href="#" aria-label="LinkedIn">LinkedIn</a>
            <a href="#" aria-label="ResearchGate">ResearchGate</a>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} GISATS - Todos los derechos reservados</p>
      </div>
    </footer>
  );
}

export default Footer;
