import './Footer.css';
import logoEpn from '../assets/logo_epn.png';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section footer-logo">
          <img src={logoEpn} alt="Logo EPN" className="footer-logo-img" />
        </div>
        
        <div className="footer-section">
          <h3>Departamento</h3>
          <p>Escuela Politécnica Nacional</p>
          <p>Ladrón de Guevara E11-253, Quito 170525</p>
          <p>Quito, Ecuador</p>
        </div>
        
        <div className="footer-section">
          <h3>Contacto</h3>
          <p>Email: <a href="mailto:contacto@gisats.ec">contacto@gisats.ec</a></p>
          <p>Tel: +593 (2) 1234-5678</p>
        </div>
        
      </div>
    </footer>
  );
}

export default Footer;
