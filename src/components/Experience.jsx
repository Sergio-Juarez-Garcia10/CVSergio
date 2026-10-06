import React from 'react'

const experiences = [
  {
    title: 'Desarrollador de Software',
    company: 'LiveFree Emergency Response',
    location: 'Remoto',
    period: 'Abril 2025 - Julio 2026',
    description: [
      'Desarrollo de aplicaciones web con React y JavaScript',
      'Integración con APIs REST y bases de datos SQL Server',
      'Implementación de pipelines CI/CD con Azure DevOps',
      'Trabajo en entorno Monorepo para gestión eficiente de código',
    ],
    technologies: ['React', 'JavaScript', 'SQL Server', 'Azure DevOps', 'REST APIs'],
  },
  {
    title: 'Líder de Desarrollo de Software',
    company: 'Pixir',
    location: 'Tula de Allende, Hidalgo',
    period: 'Junio 2018 - Marzo 2025',
    description: [
      'Liderazgo y coordinación de equipos de desarrollo',
      'Administración y configuración de servidores VPS',
      'Gestión de requerimientos con stakeholders',
      'Implementación de mejores prácticas de desarrollo',
    ],
    technologies: ['Liderazgo', 'VPS', 'Gestión de Proyectos', 'Desarrollo Web'],
  },
]

function Experience() {
  return (
    <section id="experience" className="section experience-section">
      <div className="container">
        <h2 className="section-title">Experiencia</h2>
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-content">
                <h3 className="job-title">{exp.title}</h3>
                <h4 className="company-name">{exp.company}</h4>
                <p className="job-location">{exp.location}</p>
                <p className="job-period">{exp.period}</p>
                <ul className="job-description">
                  {exp.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
                <div className="tech-tags">
                  {exp.technologies.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
