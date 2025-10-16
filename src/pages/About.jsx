import './About.css';

function About() {
  const team = [
    {
      name: 'Dra. María González',
      role: 'Directora de Investigación',
      bio: 'Especialista en sistemas alimentarios sustentables con 15 años de experiencia en investigación y políticas públicas.',
      image: '👩‍🔬',
      links: {
        orcid: 'https://orcid.org',
        researchgate: 'https://researchgate.net',
        linkedin: 'https://linkedin.com'
      }
    },
    {
      name: 'Dr. Carlos Ramírez',
      role: 'Investigador Principal',
      bio: 'Experto en transiciones alimentarias y agricultura sustentable, con énfasis en pequeños productores.',
      image: '👨‍🔬',
      links: {
        orcid: 'https://orcid.org',
        researchgate: 'https://researchgate.net',
        linkedin: 'https://linkedin.com'
      }
    },
    {
      name: 'Dra. Ana López',
      role: 'Investigadora Senior',
      bio: 'Especialista en seguridad alimentaria y sistemas de producción agroecológicos.',
      image: '👩‍🎓',
      links: {
        orcid: 'https://orcid.org',
        researchgate: 'https://researchgate.net',
        linkedin: 'https://linkedin.com'
      }
    },
    {
      name: 'Dr. Jorge Martínez',
      role: 'Investigador Asociado',
      bio: 'Enfocado en políticas públicas y gobernanza de sistemas alimentarios urbanos.',
      image: '👨‍💼',
      links: {
        orcid: 'https://orcid.org',
        researchgate: 'https://researchgate.net',
        linkedin: 'https://linkedin.com'
      }
    }
  ];

  const collaborators = [
    { name: 'Dr. Roberto Silva', institution: 'Universidad de Agricultura', area: 'Agroecología' },
    { name: 'Dra. Patricia Fernández', institution: 'Instituto de Nutrición', area: 'Seguridad Alimentaria' },
    { name: 'Dr. Luis Hernández', institution: 'Centro de Investigación Ambiental', area: 'Sustentabilidad' },
    { name: 'Dra. Carmen Ruiz', institution: 'Fundación Desarrollo Rural', area: 'Desarrollo Comunitario' }
  ];

  return (
    <div className="about">
      {/* Banner */}
      <section className="about-banner">
        <div className="banner-content">
          <h1>Nosotros</h1>
          <p>Conoce nuestro equipo y misión</p>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="mission-vision">
        <div className="section-container">
          <div className="mv-grid">
            <div className="mv-card">
              <div className="mv-icon">🎯</div>
              <h2>Misión</h2>
              <p>
                Generar conocimiento científico de frontera y soluciones innovadoras para la 
                transformación de los sistemas alimentarios hacia modelos más sustentables, 
                resilientes y equitativos, que contribuyan a la seguridad alimentaria y el 
                bienestar de las comunidades, mientras se preservan los recursos naturales 
                para las generaciones futuras.
              </p>
            </div>
            <div className="mv-card">
              <div className="mv-icon">🌟</div>
              <h2>Visión</h2>
              <p>
                Ser un grupo de investigación líder en América Latina, reconocido 
                internacionalmente por su excelencia académica y su impacto en la 
                transformación de sistemas alimentarios, contribuyendo activamente al 
                desarrollo de políticas públicas basadas en evidencia y a la formación 
                de recursos humanos altamente calificados.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Objectives */}
      <section className="objectives">
        <div className="section-container">
          <h2 className="section-title">Objetivos</h2>
          <div className="objectives-grid">
            <div className="objective-card">
              <span className="objective-number">01</span>
              <h3>Investigación de Excelencia</h3>
              <p>
                Desarrollar investigación científica de alta calidad que contribuya al 
                entendimiento de los sistemas alimentarios y sus transiciones.
              </p>
            </div>
            <div className="objective-card">
              <span className="objective-number">02</span>
              <h3>Incidencia en Políticas</h3>
              <p>
                Traducir el conocimiento científico en recomendaciones prácticas para el 
                diseño e implementación de políticas públicas efectivas.
              </p>
            </div>
            <div className="objective-card">
              <span className="objective-number">03</span>
              <h3>Formación de Talento</h3>
              <p>
                Formar investigadores y profesionales capaces de abordar los desafíos 
                complejos de los sistemas alimentarios contemporáneos.
              </p>
            </div>
            <div className="objective-card">
              <span className="objective-number">04</span>
              <h3>Colaboración Internacional</h3>
              <p>
                Establecer y fortalecer redes de colaboración con instituciones nacionales 
                e internacionales de prestigio.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* History */}
      <section className="history">
        <div className="section-container">
          <h2 className="section-title">Historia</h2>
          <div className="history-content">
            <p>
              El grupo GISATS fue fundado en 2015 con la visión de crear un espacio 
              interdisciplinario dedicado al estudio y transformación de los sistemas 
              alimentarios en México y América Latina. Desde sus inicios, el grupo ha 
              mantenido un compromiso firme con la excelencia académica y el impacto social.
            </p>
            <p>
              A lo largo de estos años, hemos desarrollado más de 20 proyectos de investigación, 
              publicado decenas de artículos en revistas de alto impacto, y contribuido al 
              diseño de políticas públicas en materia de seguridad alimentaria y sustentabilidad. 
              Nuestro enfoque integrador combina perspectivas agronómicas, ecológicas, sociales 
              y económicas para abordar los complejos desafíos de los sistemas alimentarios 
              contemporáneos.
            </p>
            <p>
              Hoy, somos reconocidos como un grupo de referencia en la región, con una red 
              de colaboración que abarca instituciones de investigación, organizaciones 
              de la sociedad civil, y agencias gubernamentales en múltiples países.
            </p>
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="team">
        <div className="section-container">
          <h2 className="section-title">Nuestro Equipo</h2>
          <div className="team-grid">
            {team.map((member, index) => (
              <div key={index} className="team-card">
                <div className="team-photo">{member.image}</div>
                <div className="team-info">
                  <h3>{member.name}</h3>
                  <p className="team-role">{member.role}</p>
                  <p className="team-bio">{member.bio}</p>
                  <div className="team-links">
                    <a href={member.links.orcid} target="_blank" rel="noopener noreferrer">
                      ORCID
                    </a>
                    <a href={member.links.researchgate} target="_blank" rel="noopener noreferrer">
                      ResearchGate
                    </a>
                    <a href={member.links.linkedin} target="_blank" rel="noopener noreferrer">
                      LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Collaborators */}
      <section className="collaborators">
        <div className="section-container">
          <h2 className="section-title">Colaboradores</h2>
          <div className="collaborators-grid">
            {collaborators.map((collab, index) => (
              <div key={index} className="collaborator-card">
                <div className="collab-icon">🤝</div>
                <h3>{collab.name}</h3>
                <p className="collab-institution">{collab.institution}</p>
                <p className="collab-area">{collab.area}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
