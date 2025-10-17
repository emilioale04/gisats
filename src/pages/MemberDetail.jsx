import { useParams, Link } from 'react-router-dom';
import { useEffect } from 'react';
import './MemberDetail.css';
import miembro1 from '../assets/miembro1.jpg';

function MemberDetail() {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // En una implementación real, aquí obtendrías los datos del miembro basado en el ID
  // Para este ejemplo, usamos datos estáticos
  const member = {
    name: 'Dra. María González',
    role: 'Directora de Investigación',
    image: miembro1,
    email: 'maria.gonzalez@epn.edu.ec',
    phone: '+593 (2) 297-6300 ext. 1234',
    office: 'Edificio de Investigación, Of. 301',
    biography: `
      La Dra. María González es Doctora en Ciencias Agrícolas por la Universidad de Wageningen, 
      Países Bajos, con especialización en sistemas alimentarios sustentables. Cuenta con 
      más de 15 años de experiencia en investigación y desarrollo de políticas públicas 
      relacionadas con la seguridad alimentaria y la agricultura sostenible.
      
      Su trabajo se ha centrado en el análisis de transiciones agroecológicas en América 
      Latina, con especial énfasis en pequeños y medianos productores. Ha liderado proyectos 
      de investigación financiados por organismos nacionales e internacionales, y ha publicado 
      más de 50 artículos científicos en revistas de alto impacto.
      
      Como Directora de Investigación del grupo GISATs, coordina las actividades de investigación 
      y fomenta la colaboración interdisciplinaria entre los diferentes miembros del equipo. 
      También supervisa estudiantes de maestría y doctorado en temas relacionados con sistemas 
      alimentarios, sustentabilidad y políticas agrarias.
    `,
    education: [
      {
        degree: 'Doctorado en Ciencias Agrícolas',
        institution: 'Universidad de Wageningen, Países Bajos',
        year: '2010'
      },
      {
        degree: 'Maestría en Desarrollo Rural',
        institution: 'Universidad Autónoma de Barcelona, España',
        year: '2005'
      },
      {
        degree: 'Ingeniería Agronómica',
        institution: 'Escuela Politécnica Nacional, Ecuador',
        year: '2002'
      }
    ],
    researchAreas: [
      'Sistemas alimentarios sustentables',
      'Transiciones agroecológicas',
      'Políticas públicas agrarias',
      'Seguridad alimentaria',
      'Agricultura familiar',
      'Desarrollo rural sostenible'
    ],
    links: {
      orcid: 'https://orcid.org/0000-0000-0000-0000',
      researchgate: 'https://researchgate.net/profile/maria-gonzalez',
      linkedin: 'https://linkedin.com/in/maria-gonzalez',
      scholar: 'https://scholar.google.com/citations?user=example'
    }
  };

  return (
    <div className="member-detail">
      {/* Banner */}
      <section className="member-banner">
        <div className="banner-content">
          <Link to="/nosotros" className="back-link">← Volver al Equipo</Link>
        </div>
      </section>

      {/* Member Profile */}
      <section className="member-profile">
        <div className="section-container">
          <div className="profile-header">
            <div className="profile-photo">
              <img src={member.image} alt={member.name} />
            </div>
            <div className="profile-info">
              <h1>{member.name}</h1>
              <p className="profile-role">{member.role}</p>
              <div className="contact-info">
                <div className="contact-item">
                  <span className="contact-icon">📧</span>
                  <a href={`mailto:${member.email}`}>{member.email}</a>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">📞</span>
                  <span>{member.phone}</span>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">🏢</span>
                  <span>{member.office}</span>
                </div>
              </div>
              <div className="social-links">
                <a href={member.links.orcid} target="_blank" rel="noopener noreferrer" className="social-link" title="ORCID">
                  <span className="social-icon">🔗</span>
                  ORCID
                </a>
                <a href={member.links.researchgate} target="_blank" rel="noopener noreferrer" className="social-link" title="ResearchGate">
                  <span className="social-icon">📊</span>
                  ResearchGate
                </a>
                <a href={member.links.linkedin} target="_blank" rel="noopener noreferrer" className="social-link" title="LinkedIn">
                  <span className="social-icon">💼</span>
                  LinkedIn
                </a>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Biography */}
      <section className="biography">
        <div className="section-container">
          <h2 className="section-title">Biografía</h2>
          <div className="biography-content">
            {member.biography.trim().split('\n\n').map((paragraph, index) => (
              <p key={index}>{paragraph.trim()}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="education">
        <div className="section-container">
          <h2 className="section-title">Formación Académica</h2>
          <div className="education-list">
            {member.education.map((edu, index) => (
              <div key={index} className="education-item">
                <div className="edu-icon">🎓</div>
                <div className="edu-content">
                  <h3>{edu.degree}</h3>
                  <p className="edu-institution">{edu.institution}</p>
                  <p className="edu-year">{edu.year}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Areas */}
      <section className="research-areas">
        <div className="section-container">
          <h2 className="section-title">Áreas de Investigación</h2>
          <div className="areas-grid">
            {member.researchAreas.map((area, index) => (
              <div key={index} className="area-tag">
                {area}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default MemberDetail;
