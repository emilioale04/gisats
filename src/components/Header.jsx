import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../assets/logo.png';

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo-link">
          <div className="logo">
            <img src={logo} alt="GISATS Logo" className="logo-image" />
          </div>
        </Link>
        <nav className="nav">
          <Link to="/">Inicio</Link>
          <Link to="/nosotros">Nosotros</Link>
          <Link to="/investigacion">Investigación</Link>
          <Link to="/publicaciones">Publicaciones</Link>
          <Link to="/noticias">Noticias</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
