import { useState } from 'react';
import './Research.css';

function Research() {
  const [showCompleted, setShowCompleted] = useState(false);

  const researchLines = [
    {
      title: 'Sistemas Alimentarios Urbanos',
      description: 'Investigamos las dinámicas de producción, distribución y consumo de alimentos en contextos urbanos, con énfasis en la sustentabilidad y la equidad.',
      icon: '🏙️'
    },
    {
      title: 'Agroecología y Transiciones',
      description: 'Estudiamos los procesos de transición hacia sistemas agroecológicos y sus impactos en la sustentabilidad ambiental y social.',
      icon: '🌾'
    },
    {
      title: 'Seguridad Alimentaria',
      description: 'Analizamos las dimensiones de acceso, disponibilidad, uso y estabilidad alimentaria en diferentes contextos socioeconómicos.',
      icon: '🍽️'
    },
    {
      title: 'Políticas Públicas Alimentarias',
      description: 'Evaluamos y diseñamos políticas públicas para promover sistemas alimentarios más justos y sustentables.',
      icon: '📋'
    }
  ];

  const activeProjects = [
    {
      title: 'Transición Agroecológica en Pequeños Productores',
      objective: 'Analizar los factores que facilitan u obstaculizan la adopción de prácticas agroecológicas en comunidades rurales.',
      duration: '2024-2026',
      funding: 'Consejo Nacional de Ciencia y Tecnología',
      team: 'Dra. María González, Dr. Carlos Ramírez'
    },
    {
      title: 'Sistemas Alimentarios Urbanos Sustentables',
      objective: 'Desarrollar modelos de abastecimiento alimentario urbano que integren criterios de sustentabilidad ambiental y social.',
      duration: '2023-2025',
      funding: 'Fundación Internacional para el Desarrollo',
      team: 'Dra. Ana López, Dr. Jorge Martínez'
    },
    {
      title: 'Seguridad Alimentaria en Contextos de Cambio Climático',
      objective: 'Evaluar la vulnerabilidad de sistemas alimentarios locales frente al cambio climático y desarrollar estrategias de adaptación.',
      duration: '2024-2027',
      funding: 'Fondo para el Medio Ambiente',
      team: 'Dr. Carlos Ramírez, Dra. Ana López'
    }
  ];

  const completedProjects = [
    {
      title: 'Redes Alimentarias Alternativas en México',
      objective: 'Mapear y caracterizar las redes alimentarias alternativas en zonas urbanas del país.',
      duration: '2020-2023',
      results: '15 publicaciones, 3 tesis de posgrado, 2 políticas públicas influenciadas'
    },
    {
      title: 'Evaluación de Programas de Agricultura Sustentable',
      objective: 'Evaluar el impacto de programas gubernamentales de promoción de agricultura sustentable.',
      duration: '2019-2022',
      results: '8 publicaciones, 20 talleres con productores, 1 manual de buenas prácticas'
    }
  ];

  return (
    <div className="research">
      {/* Banner */}
      <section className="research-banner">
        <div className="banner-content">
          <h1>Investigación</h1>
          <p>Nuestras líneas de investigación y proyectos activos</p>
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Active Projects */}
      <section className="active-projects">
        <div className="section-container">
          <h2 className="section-title">Proyectos Activos</h2>
          <div className="projects-list">
            {activeProjects.map((project, index) => (
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
                    <strong>Financiamiento:</strong>
                    <p>{project.funding}</p>
                  </div>
                  <div className="project-field">
                    <strong>Equipo:</strong>
                    <p>{project.team}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Completed Projects */}
      <section className="completed-projects">
        <div className="section-container">
          <div className="completed-header">
            <h2 className="section-title">Proyectos Completados</h2>
            <button 
              className="toggle-btn"
              onClick={() => setShowCompleted(!showCompleted)}
            >
              {showCompleted ? 'Ocultar' : 'Mostrar'} proyectos completados
            </button>
          </div>
          
          {showCompleted && (
            <div className="projects-list">
              {completedProjects.map((project, index) => (
                <div key={index} className="project-card completed">
                  <div className="project-header">
                    <h3>{project.title}</h3>
                    <span className="project-duration completed-badge">{project.duration}</span>
                  </div>
                  <div className="project-body">
                    <div className="project-field">
                      <strong>Objetivo:</strong>
                      <p>{project.objective}</p>
                    </div>
                    <div className="project-field">
                      <strong>Resultados:</strong>
                      <p>{project.results}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export default Research;
