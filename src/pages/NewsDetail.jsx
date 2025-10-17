import { useParams, Link } from 'react-router-dom';
import { useEffect } from 'react';
import './NewsDetail.css';
import noticia3 from '../assets/noticia_3.jpg';

function NewsDetail() {
  // Simulamos obtener la noticia por ID
  const { id } = useParams();

  // Datos de ejemplo de una noticia completa
  const newsDetail = {
    id: 1,
    title: 'Nueva investigación sobre sistemas alimentarios urbanos',
    date: '5 Oct 2025',
    category: 'Investigación',
    image: noticia3,
    summary: 'Publicamos hallazgos importantes sobre la transición hacia sistemas alimentarios más sustentables en zonas urbanas. El estudio abarca cinco ciudades ecuatorianas y propone estrategias innovadoras de adaptación.',
    content: `
      <p>Nuestro equipo ha completado un estudio de tres años sobre sistemas alimentarios urbanos en Ecuador, con resultados que prometen transformar la forma en que entendemos y gestionamos los alimentos en contextos urbanos.</p>

      <h2>Metodología del Estudio</h2>
      <p>La investigación se realizó en cinco ciudades principales de Ecuador: Quito, Guayaquil, Cuenca, Ambato y Loja. Utilizamos un enfoque mixto que combinó:</p>
      <ul>
        <li>Análisis cuantitativo de datos de producción y consumo alimentario</li>
        <li>Entrevistas en profundidad con productores urbanos y consumidores</li>
        <li>Mapeo geográfico de redes de distribución alimentaria</li>
        <li>Análisis de políticas públicas locales</li>
      </ul>

      <h2>Principales Hallazgos</h2>
      <p>Los resultados revelan que los sistemas alimentarios urbanos tradicionales están llegando a sus límites debido al crecimiento poblacional y los efectos del cambio climático. Sin embargo, identificamos estrategias innovadoras que pueden hacer estos sistemas más resilientes:</p>

      <h3>1. Agricultura Urbana Integrada</h3>
      <p>La integración de espacios verdes urbanos con sistemas de producción alimentaria puede aumentar la disponibilidad de alimentos frescos en un 30-40% en zonas metropolitanas.</p>

      <h3>2. Redes Alimentarias Cortas</h3>
      <p>El fortalecimiento de circuitos cortos de comercialización reduce las emisiones de carbono asociadas al transporte de alimentos y mejora la trazabilidad.</p>

      <h3>3. Tecnologías Digitales</h3>
      <p>El uso de plataformas digitales para conectar productores locales con consumidores puede optimizar la distribución y reducir el desperdicio alimentario.</p>

      <h2>Implicaciones para Políticas Públicas</h2>
      <p>Los resultados del estudio sugieren la necesidad de políticas públicas que:</p>
      <ul>
        <li>Incentiven la agricultura urbana mediante subsidios y capacitación</li>
        <li>Promuevan la creación de mercados locales y ferias urbanas</li>
        <li>Desarrollen marcos regulatorios para plataformas digitales de comercio alimentario</li>
        <li>Fomenten alianzas público-privadas para financiar iniciativas de transición</li>
      </ul>

      <h2>Próximos Pasos</h2>
      <p>Actualmente estamos trabajando en la implementación de un proyecto piloto en Quito que pondrá a prueba estas estrategias. Los resultados preliminares serán publicados en los próximos meses.</p>

      <p>Este estudio representa un paso importante hacia sistemas alimentarios urbanos más sustentables y equitativos, contribuyendo al desarrollo de ciudades más resilientes ante los desafíos del siglo XXI.</p>
    `,
    author: 'Dra. María González',
    tags: ['Sistemas Alimentarios Urbanos', 'Sustentabilidad', 'Cambio Climático', 'Políticas Públicas']
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="news-detail">
      {/* Banner */}
      <section className="news-detail-banner">
        <div className="banner-content">
          <Link to="/noticias" className="back-link">← Volver a Noticias</Link>
          <span className="news-category">{newsDetail.category}</span>
          <h1>{newsDetail.title}</h1>
          <div className="news-meta">
            <span className="news-date">{newsDetail.date}</span>
            <span className="news-author">Por {newsDetail.author}</span>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="news-detail-content">
        <div className="section-container">
          <div className="news-image-large">
            <img src={newsDetail.image} alt={newsDetail.title} />
          </div>

          <div className="news-body">
            <div
              className="news-text"
              dangerouslySetInnerHTML={{ __html: newsDetail.content }}
            />

            <div className="news-tags">
              <h3>Etiquetas:</h3>
              <div className="tags-list">
                {newsDetail.tags.map((tag, index) => (
                  <span key={index} className="tag">{tag}</span>
                ))}
              </div>
            </div>

            <div className="news-actions">
              <Link to="/noticias" className="btn btn-secondary">Ver Más Noticias</Link>
              <button className="btn btn-outline share-btn">Compartir</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default NewsDetail;