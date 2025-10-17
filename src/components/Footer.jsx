import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Departamento</h3>
          <p>Departamento de Sistemas Alimentarios Sustentables</p>
          <p>Escuela Politécnica Nacional</p>
          <p>Ladrón de Guevara E11-253, Quito 170525</p>
          <p>Quito, Ecuador</p>
        </div>
        
        <div className="footer-section">
          <h3>Contacto</h3>
          <p>Email: <a href="mailto:contacto@gisats.ec">contacto@gisats.ec</a></p>
          <p>Tel: +593 (2) 1234-5678</p>
          <p>Horario: Lun - Vie, 9:00 - 18:00</p>
        </div>
        
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} GISATs - Todos los derechos reservados</p>
      </div>
    </footer>
  );
}

export default Footer;
