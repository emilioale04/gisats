import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Research.css';

function Research() {
  const [searchTerm, setSearchTerm] = useState('');

  const researchLines = [
    {
      title: 'Sistemas Alimentarios Sustentables',
      description: 'Investigamos las dinámicas de producción, distribución y consumo de alimentos en contextos urbanos, con énfasis en la sustentabilidad y la equidad.',
      icon: '🏙️',
      publicationsFilter: 'Sistemas Alimentarios Sustentables'
    },
    {
      title: 'Seguridad Alimentaria y Nutricional',
      description: 'Estudiamos los procesos de transición hacia sistemas agroecológicos y sus impactos en la sustentabilidad ambiental y social.',
      icon: '🌾',
      publicationsFilter: 'Seguridad Alimentaria y Nutricional'
    }
  ];

  const activeProjects = [
    {
      title: 'Transición Agroecológica en Pequeños Productores',
      objective: 'Analizar los factores que facilitan u obstaculizan la adopción de prácticas agroecológicas en comunidades rurales.',
      duration: '2024-2026',
      team: 'Dra. María González, Dr. Carlos Ramírez',
      keywords: ['agroecología', 'transición', 'productores', 'comunidades rurales', 'sustentabilidad']
    },
    {
      title: 'Sistemas Alimentarios Urbanos Sustentables',
      objective: 'Desarrollar modelos de abastecimiento alimentario urbano que integren criterios de sustentabilidad ambiental y social.',
      duration: '2023-2025',
      team: 'Dra. Ana López, Dr. Jorge Martínez',
      keywords: ['sistemas alimentarios', 'urbano', 'sustentabilidad', 'abastecimiento', 'ambiental']
    },
    {
      title: 'Seguridad Alimentaria en Contextos de Cambio Climático',
      objective: 'Evaluar la vulnerabilidad de sistemas alimentarios locales frente al cambio climático y desarrollar estrategias de adaptación.',
      duration: '2024-2027',
      team: 'Dr. Carlos Ramírez, Dra. Ana López',
      keywords: ['seguridad alimentaria', 'cambio climático', 'vulnerabilidad', 'adaptación', 'sistemas locales']
    }
  ];

  const filteredProjects = activeProjects.filter(project => {
    if (!searchTerm) return true;
    
    const searchLower = searchTerm.toLowerCase();
    return (
      project.title.toLowerCase().includes(searchLower) ||
      project.objective.toLowerCase().includes(searchLower) ||
      project.team.toLowerCase().includes(searchLower) ||
      project.keywords.some(keyword => keyword.toLowerCase().includes(searchLower))
    );
  });

  return (
    <div className="research">
      {/* Banner */}
      <section className="research-banner">
        <div className="banner-content">
          <h1>Investigación</h1>
          <p>Nuestras líneas de investigación y proyectos</p>
        </div>
      </section>

      {/* Research Lines */}
      <section className="research-lines">
        <div className="section-container">
          <h2 className="section-title">Líneas de Investigación</h2>
          <div className="lines-grid">
            {researchLines.map((line, index) => (
              <div key={index} className="line-card">
                <div className="line-icon">{line.icon}</div>
                <h3>{line.title}</h3>
                <p>{line.description}</p>
                <Link 
                  to={`/publicaciones?linea=${encodeURIComponent(line.publicationsFilter)}`}
                  className="view-publications-btn"
                >
                  Ver Publicaciones →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Active Projects */}
      <section className="active-projects">
        <div className="section-container">
          <h2 className="section-title">Proyectos</h2>
          
          <div className="search-container">
            <input
              type="text"
              placeholder="Buscar proyectos por título, objetivo, equipo o palabras clave..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
            {searchTerm && (
              <button 
                className="clear-search"
                onClick={() => setSearchTerm('')}
                aria-label="Limpiar búsqueda"
              >
                ✕
              </button>
            )}
          </div>

          <div className="results-count">
            Mostrando {filteredProjects.length} proyecto{filteredProjects.length !== 1 ? 's' : ''}
          </div>

          <div className="projects-list">
            {filteredProjects.map((project, index) => (
              <div key={index} className="project-card">
                <div className="project-header">
                  <h3>{project.title}</h3>
                  <span className="project-duration">{project.duration}</span>
                </div>
                <div className="project-body">
                  <div className="project-field">
                    <strong>Objetivo:</strong>
                    <p>{project.objective}</p>
                  </div>
                  <div className="project-field">
                    <strong>Equipo:</strong>
                    <p>{project.team}</p>
                  </div>
                  <div className="project-field">
                    <strong>Palabras clave:</strong>
                    <div className="keywords-list">
                      {project.keywords.map((keyword, idx) => (
                        <span key={idx} className="keyword-tag">{keyword}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="no-results">
              <p>No se encontraron proyectos que coincidan con la búsqueda.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export default Research;
