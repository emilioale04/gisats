import { useState } from 'react';
import { Link } from 'react-router-dom';
import './News.css';

function News() {
  const [currentPage, setCurrentPage] = useState(1);
  const [filterCategory, setFilterCategory] = useState('all');
  const itemsPerPage = 6;

  const allNews = [
    {
      id: 1,
      title: 'Nueva investigación sobre sistemas alimentarios urbanos',
      date: '5 Oct 2025',
      category: 'Investigación',
      image: '🌱',
      summary: 'Publicamos hallazgos importantes sobre la transición hacia sistemas alimentarios más sustentables en zonas urbanas. El estudio abarca cinco ciudades ecuatorianas y propone estrategias innovadoras de adaptación.',
      content: 'Nuestro equipo ha completado un estudio de tres años sobre sistemas alimentarios urbanos en Ecuador...'
    },
    {
      id: 2,
      title: 'Convenio con institución internacional',
      date: '28 Sep 2025',
      category: 'Colaboración',
      image: '🤝',
      summary: 'Firmamos un acuerdo de colaboración con la Universidad de Agricultura Sustentable de Europa para desarrollar proyectos conjuntos de investigación.',
      content: 'Este convenio permitirá el intercambio de investigadores y estudiantes, así como el desarrollo de proyectos colaborativos...'
    },
    {
      id: 3,
      title: 'Conferencia anual de sistemas alimentarios',
      date: '15 Sep 2025',
      category: 'Eventos',
      image: '🎓',
      summary: 'Participamos como ponentes principales en la conferencia internacional sobre sistemas alimentarios celebrada en Quito.',
      content: 'La Dra. González presentó los resultados más recientes de nuestra investigación sobre transiciones agroecológicas...'
    },
    {
      id: 4,
      title: 'Publicación en revista de alto impacto',
      date: '2 Sep 2025',
      category: 'Investigación',
      image: '📚',
      summary: 'Nuestro artículo sobre seguridad alimentaria y cambio climático fue aceptado en Environmental Research Letters.',
      content: 'Este artículo presenta un marco innovador para analizar la vulnerabilidad de sistemas alimentarios urbanos...'
    },
    {
      id: 5,
      title: 'Taller con pequeños productores',
      date: '20 Ago 2025',
      category: 'Eventos',
      image: '🌾',
      summary: 'Realizamos un taller sobre prácticas agroecológicas con 50 productores de comunidades rurales de Manabí.',
      content: 'Durante tres días, compartimos conocimientos sobre técnicas de producción sustentable y gestión de recursos naturales...'
    },
    {
      id: 6,
      title: 'Nuevo proyecto financiado',
      date: '10 Ago 2025',
      category: 'Investigación',
      image: '💰',
      summary: 'Obtuvimos financiamiento para un proyecto de tres años sobre adaptación climática en sistemas alimentarios.',
      content: 'El Fondo para el Medio Ambiente aprobó nuestro proyecto de investigación sobre estrategias de adaptación...'
    },
    {
      id: 7,
      title: 'Estudiante recibe premio nacional',
      date: '5 Ago 2025',
      category: 'Colaboración',
      image: '🏆',
      summary: 'Una estudiante de nuestro grupo recibió el premio a la mejor tesis de maestría en agricultura sustentable.',
      content: 'María Rodríguez fue reconocida por su investigación sobre redes alimentarias alternativas en zonas periurbanas...'
    },
    {
      id: 8,
      title: 'Participación en panel de expertos',
      date: '25 Jul 2025',
      category: 'Eventos',
      image: '🎤',
      summary: 'Nuestros investigadores participaron en un panel sobre políticas alimentarias organizado por el Senado.',
      content: 'El Dr. Martínez presentó recomendaciones para mejorar los programas de apoyo a agricultura sustentable...'
    },
    {
      id: 9,
      title: 'Curso de verano sobre agroecología',
      date: '15 Jul 2025',
      category: 'Eventos',
      image: '📖',
      summary: 'Impartimos un curso intensivo de verano sobre principios y prácticas agroecológicas a 30 estudiantes.',
      content: 'El curso combinó sesiones teóricas con visitas de campo a sistemas de producción agroecológicos...'
    }
  ];

  const categories = ['all', ...new Set(allNews.map(n => n.category))];

  const filteredNews = allNews.filter(news => 
    filterCategory === 'all' || news.category === filterCategory
  );

  const totalPages = Math.ceil(filteredNews.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentNews = filteredNews.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCategoryChange = (category) => {
    setFilterCategory(category);
    setCurrentPage(1);
  };

  return (
    <div className="news">
      {/* Banner */}
      <section className="news-banner">
        <div className="banner-content">
          <h1>Noticias</h1>
          <p>Mantente informado sobre nuestras actividades</p>
        </div>
      </section>

      {/* Filter by Category */}
      <section className="filter-section">
        <div className="section-container">
          <div className="category-filters">
            {categories.map(category => (
              <button
                key={category}
                className={`category-btn ${filterCategory === category ? 'active' : ''}`}
                onClick={() => handleCategoryChange(category)}
              >
                {category === 'all' ? 'Todas' : category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="news-grid-section">
        <div className="section-container">
          <div className="news-grid">
            {currentNews.map(item => (
              <article key={item.id} className="news-card">
                <div className="news-image">{item.image}</div>
                <div className="news-content">
                  <div className="news-meta">
                    <span className="news-category">{item.category}</span>
                    <span className="news-date">{item.date}</span>
                  </div>
                  <h2>{item.title}</h2>
                  <p>{item.summary}</p>
                  <Link to={`/noticias/${item.id}`} className="read-more-btn">Leer más →</Link>
                </div>
              </article>
            ))}
          </div>

          {filteredNews.length === 0 && (
            <div className="no-news">
              <p>No hay noticias en esta categoría.</p>
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="pagination">
              <button
                className="pagination-btn"
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
              >
                ← Anterior
              </button>
              
              <div className="page-numbers">
                {[...Array(totalPages)].map((_, index) => (
                  <button
                    key={index + 1}
                    className={`page-btn ${currentPage === index + 1 ? 'active' : ''}`}
                    onClick={() => handlePageChange(index + 1)}
                  >
                    {index + 1}
                  </button>
                ))}
              </div>
              
              <button
                className="pagination-btn"
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
              >
                Siguiente →
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export default News;
