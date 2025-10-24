import { Link } from 'react-router-dom';
import './Home.css';
import banner from '../assets/banner.jpg';
import noticia1 from '../assets/noticia_1.jpg';
import noticia2 from '../assets/noticia_2.jpg';
import noticia3 from '../assets/noticia_3.jpg';
import logoEpn from '../assets/logo_epn.png';

function Home() {
  const news = [
    {
      id: 1,
      title: 'Nueva investigación sobre sistemas alimentarios urbanos',
      date: '5 Oct 2025',
      summary: 'Publicamos hallazgos importantes sobre la transición hacia sistemas alimentarios más sustentables en zonas urbanas.',
      image: noticia1
    },
    {
      id: 2,
      title: 'Convenio con institución internacional',
      date: '28 Sep 2025',
      summary: 'Firmamos un acuerdo de colaboración con instituciones de investigación internacionales.',
      image: noticia2
    },
    {
      id: 3,
      title: 'Conferencia anual de sistemas alimentarios',
      date: '15 Sep 2025',
      summary: 'Participamos como ponentes principales en la conferencia internacional sobre sistemas alimentarios.',
      image: noticia3
    }
  ];

  const stats = [
    { number: '5+', label: 'Proyectos' },
    { number: '25+', label: 'Publicaciones' },
    { number: '20+', label: 'Colaboradores' },
    { number: '10+', label: 'Instituciones Aliadas' }
  ];

  const partners = [
    'Escuela Politécnica Nacional', 
    'Instituto Nacional de Investigaciones Agropecuarias', 
    'Centro de Investigación en Sistemas Alimentarios',
  ];

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-banner">
          <img src={banner} alt="Banner GISATs" className="hero-banner-image" />
          <div className="hero-overlay"></div>
        </div>
        <div className="hero-content">
          {/* <h1>GISATs</h1> */}
          <h1>Gestión Integrada de Sistemas Alimentarios, Transiciones y Sustentabilidad</h1>
          <p className="hero-description">
            Investigamos e implementamos soluciones innovadoras para transformar los sistemas alimentarios 
            hacia modelos más sustentables, resilientes y equitativos. Nuestro trabajo contribuye al 
            desarrollo de políticas públicas y prácticas que promueven la seguridad alimentaria y la 
            conservación ambiental.
          </p>
          <div className="hero-buttons">
            <Link to="/investigacion" className="btn btn-primary">Ver Investigación</Link>
            <Link to="/nosotros" className="btn btn-secondary">Conocer al Equipo</Link>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="stats">
        <div className="stats-container">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card">
              <h3>{stat.number}</h3>
              <p>{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Latest News Section */}
      <section className="latest-news">
        <div className="section-container">
          <h2 className="section-title">Últimas Noticias</h2>
          <div className="news-grid">
            {news.map(item => (
              <div key={item.id} className="news-card">
                <div className="news-icon">
                  <img src={item.image} alt={item.title} />
                </div>
                <div className="news-content">
                  <p className="news-date">{item.date}</p>
                  <h3>{item.title}</h3>
                  <p>{item.summary}</p>
                  <Link to={`/noticias/${item.id}`} className="read-more">Leer más →</Link>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link to="/noticias" className="btn btn-outline">Ver Todas las Noticias</Link>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="partners">
        <div className="section-container">
          <h2 className="section-title">Instituciones Aliadas</h2>
          <div className="partners-grid">
            {partners.map((partner, index) => (
              <div key={index} className="partner-card">
                <div className="partner-logo">🏛️</div>
                <p>{partner}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
