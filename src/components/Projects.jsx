import React from 'react'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const projects = [
  {
    title: 'Sistema de Gestión de Emergencias',
    description: 'Aplicación web para gestión y seguimiento de emergencias en tiempo real, desarrollada con React y integrada con APIs de geolocalización.',
    technologies: ['React', 'JavaScript', 'REST APIs', 'SQL Server'],
    github: 'https://github.com/Sergio-Juarez-Garcia10',
    demo: null,
  },
  {
    title: 'Dashboard de Métricas de Negocio',
    description: 'Panel administrativo con visualización de datos y reportes interactivos para toma de decisiones empresariales.',
    technologies: ['React', 'Power BI', 'SQL Server', 'Azure DevOps'],
    github: 'https://github.com/Sergio-Juarez-Garcia10',
    demo: null,
  },
  {
    title: 'API REST para Gestión de Inventarios',
    description: 'Servicio backend escalable para control de inventarios con autenticación JWT y documentación Swagger.',
    technologies: ['.NET Core', 'ASP.NET Core', 'SQL Server', 'REST APIs'],
    github: 'https://github.com/Sergio-Juarez-Garcia10',
    demo: null,
  },
]

function Projects() {
  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <h2 className="section-title">Proyectos</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="tech-tags">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="tech-tag">{tech}</span>
                ))}
              </div>
              <div className="project-links">
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                  <FaGithub /> Código
                </a>
                {project.demo && (
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-link">
                    <FaExternalLinkAlt /> Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
