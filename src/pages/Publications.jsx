import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import './Publications.css';

function Publications() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filterYear, setFilterYear] = useState('all');
  const [filterType, setFilterType] = useState('all');
  const [filterResearchLine, setFilterResearchLine] = useState('all');
  const [expandedId, setExpandedId] = useState(null);

  // Aplicar filtro de línea de investigación desde URL
  useEffect(() => {
    const lineaParam = searchParams.get('linea');
    if (lineaParam) {
      setFilterResearchLine(lineaParam);
    }
  }, [searchParams]);

  const publications = [
    {
      id: 1,
      title: 'Transiciones agroecológicas en sistemas alimentarios locales: un análisis comparativo',
      authors: 'González, M., Ramírez, C., López, A.',
      journal: 'Revista Latinoamericana de Sistemas Alimentarios',
      year: 2025,
      area: 'Agroecología',
      doi: '10.1234/rlsa.2025.001',
      indexed: true,
      researchLine: 'Seguridad Alimentaria y Nutricional',
      abstract: 'Este estudio examina los procesos de transición agroecológica en tres comunidades rurales de Ecuador, identificando factores clave que facilitan u obstaculizan estos procesos. Los resultados muestran que el apoyo institucional y las redes sociales son determinantes críticos del éxito.'
    },
    {
      id: 2,
      title: 'Seguridad alimentaria urbana en contextos de cambio climático',
      authors: 'López, A., Martínez, J., González, M.',
      journal: 'Environmental Research Letters',
      year: 2025,
      area: 'Seguridad Alimentaria',
      doi: '10.1234/erl.2025.045',
      indexed: true,
      researchLine: 'Seguridad Alimentaria y Nutricional',
      abstract: 'Analizamos la vulnerabilidad de los sistemas alimentarios urbanos frente al cambio climático en cinco ciudades ecuatorianas. Proponemos un marco de adaptación basado en la diversificación de fuentes de abastecimiento y el fortalecimiento de redes locales.'
    },
    {
      id: 3,
      title: 'Políticas públicas para sistemas alimentarios sustentables: experiencias latinoamericanas',
      authors: 'Martínez, J., Ramírez, C.',
      journal: 'Food Policy',
      year: 2024,
      area: 'Políticas Públicas',
      doi: '10.1234/fp.2024.123',
      indexed: true,
      researchLine: 'Sistemas Alimentarios Sustentables',
      abstract: 'Evaluamos políticas públicas orientadas a promover sistemas alimentarios sustentables en seis países de la región. Identificamos mejores prácticas y desafíos comunes en la implementación de estas políticas.'
    },
    {
      id: 4,
      title: 'Sistemas alimentarios y sustentabilidad: hacia un marco integrador',
      authors: 'González, M., López, A., Ramírez, C., Martínez, J.',
      journal: 'Sustainability Science',
      year: 2024,
      area: 'Sustentabilidad',
      doi: '10.1234/ss.2024.089',
      indexed: true,
      researchLine: 'Sistemas Alimentarios Sustentables',
      abstract: 'Presentamos un marco conceptual integrador para analizar la sustentabilidad de sistemas alimentarios, considerando dimensiones ambientales, sociales y económicas. El marco es validado mediante estudios de caso en contextos diversos.'
    },
    {
      id: 5,
      title: 'Agricultura urbana y periurbana: contribuciones a la seguridad alimentaria',
      authors: 'Ramírez, C., López, A.',
      journal: 'Urban Agriculture Magazine',
      year: 2023,
      area: 'Agricultura Urbana',
      doi: '10.1234/uam.2023.067',
      indexed: false,
      researchLine: 'Seguridad Alimentaria y Nutricional',
      abstract: 'Evaluamos el potencial de la agricultura urbana y periurbana para contribuir a la seguridad alimentaria en ciudades medianas. Los resultados indican que estas prácticas pueden complementar significativamente el abastecimiento alimentario urbano.'
    },
    {
      id: 6,
      title: 'Redes alimentarias alternativas en Ecuador: características y desafíos',
      authors: 'González, M., Martínez, J.',
      journal: 'Agriculture and Human Values',
      year: 2023,
      area: 'Sistemas Alimentarios',
      doi: '10.1234/ahv.2023.145',
      indexed: false,
      researchLine: 'Sistemas Alimentarios Sustentables',
      abstract: 'Caracterizamos las redes alimentarias alternativas en Ecuador, identificando sus principales modalidades organizativas, desafíos y oportunidades. Discutimos su potencial para transformar los sistemas alimentarios convencionales.'
    }
  ];

  const years = ['all', ...new Set(publications.map(p => p.year))].sort((a, b) => {
    if (a === 'all') return -1;
    if (b === 'all') return 1;
    return b - a;
  });

  const researchLines = ['all', ...new Set(publications.map(p => p.researchLine))];

  const filteredPublications = publications.filter(pub => {
    const yearMatch = filterYear === 'all' || pub.year === parseInt(filterYear);
    const typeMatch = filterType === 'all' || 
                     (filterType === 'indexed' && pub.indexed) || 
                     (filterType === 'not-indexed' && !pub.indexed);
    const researchLineMatch = filterResearchLine === 'all' || pub.researchLine === filterResearchLine;
    return yearMatch && typeMatch && researchLineMatch;
  });

  const toggleAbstract = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const clearResearchLineFilter = () => {
    setFilterResearchLine('all');
    setSearchParams({});
  };

  return (
    <div className="publications">
      {/* Banner */}
      <section className="publications-banner">
        <div className="banner-content">
          <h1>Publicaciones</h1>
          <p>Nuestra producción científica y académica</p>
        </div>
      </section>

      {/* Filters */}
      <section className="filters-section">
        <div className="section-container">
          <div className="filters">
            <div className="filter-group">
              <label htmlFor="year-filter">Año:</label>
              <select 
                id="year-filter"
                value={filterYear} 
                onChange={(e) => setFilterYear(e.target.value)}
                className="filter-select"
              >
                {years.map(year => (
                  <option key={year} value={year}>
                    {year === 'all' ? 'Todos' : year}
                  </option>
                ))}
              </select>
            </div>

            <div className="filter-group">
              <label htmlFor="type-filter">Tipo:</label>
              <select 
                id="type-filter"
                value={filterType} 
                onChange={(e) => setFilterType(e.target.value)}
                className="filter-select"
              >
                <option value="all">Todas</option>
                <option value="indexed">Indexadas</option>
                <option value="not-indexed">No Indexadas</option>
              </select>
            </div>

            <div className="filter-group">
              <label htmlFor="line-filter">Línea de Investigación:</label>
              <select 
                id="line-filter"
                value={filterResearchLine} 
                onChange={(e) => setFilterResearchLine(e.target.value)}
                className="filter-select"
              >
                {researchLines.map(line => (
                  <option key={line} value={line}>
                    {line === 'all' ? 'Todas' : line}
                  </option>
                ))}
              </select>
            </div>
          </div>
          
          {/* <div className="results-count">
            Mostrando {filteredPublications.length} publicacion{filteredPublications.length !== 1 ? 'es' : ''}
          </div> */}
        </div>
      </section>

      {/* Publications List */}
      <section className="publications-list">
        <div className="section-container">
          {filteredPublications.map(pub => (
            <div key={pub.id} className="publication-card">
              <div className="pub-header">
                <div className="pub-meta">
                  <span className="pub-year">{pub.year}</span>
                  <span className="pub-type">{pub.indexed ? 'Indexada' : 'No Indexada'}</span>
                  <span className="pub-area">{pub.area}</span>
                </div>
              </div>
              
              <h3 className="pub-title">{pub.title}</h3>
              
              <p className="pub-authors">{pub.authors}</p>
              
              <p className="pub-journal">
                <strong>{pub.journal}</strong> ({pub.year})
              </p>
              
              <div className="pub-links">
                <a href={`https://doi.org/${pub.doi}`} target="_blank" rel="noopener noreferrer" className="pub-link">
                  📄 DOI: {pub.doi}
                </a>
              </div>
              
              <div className="pub-abstract">
                <button 
                  className="abstract-toggle"
                  onClick={() => toggleAbstract(pub.id)}
                >
                  {expandedId === pub.id ? '▼' : '▶'} Resumen
                </button>
                
                {expandedId === pub.id && (
                  <div className="abstract-content">
                    <p>{pub.abstract}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
          
          {filteredPublications.length === 0 && (
            <div className="no-results">
              <p>No se encontraron publicaciones con los filtros seleccionados.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export default Publications;
