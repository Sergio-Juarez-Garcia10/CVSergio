import React from 'react'
import { FaDownload } from 'react-icons/fa'

function About() {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        <div className="about-grid">
          <div className="about-content">
            <p className="greeting">Hola, soy</p>
            <h1 className="name-title">
              Sergio <span className="last-name">Juárez García</span>
            </h1>
            <p className="tagline">Software Engineer</p>
            <p className="specialty">Desarrollador .NET & React</p>

            <p className="summary">
              Desarrollador de Software con más de 6 años de experiencia en el diseño, 
              desarrollo e implementación de aplicaciones web escalables y de alto rendimiento. 
              Especializado en tecnologías .NET y React, con un enfoque sólido en la creación de 
              soluciones tecnológicas que impulsan la eficiencia operativa y la experiencia del usuario.
              <br /><br />
              A lo largo de mi trayectoria, he liderado equipos de desarrollo, gestionado proyectos 
              de principio a fin y colaborado estrechamente con stakeholders para traducir requerimientos 
              de negocio en soluciones técnicas robustas.
              <br /><br />
              Apasionado por la innovación tecnológica y el aprendizaje continuo, busco constantemente 
              nuevas oportunidades para mejorar procesos, adoptar mejores prácticas y aportar valor 
              a equipos de trabajo dinámicos y orientados a resultados.
            </p>

            <div className="about-actions">
              <a
                href="/CVSergio/assets/img/CV Sergio Juarez Garcia.pdf"
                download
                className="btn-primary"
              >
                <FaDownload /> Descargar CV
              </a>
              <a href="#contact" className="btn-secondary">
                Contáctame
              </a>
            </div>
          </div>

          <div className="about-image">
            <img
              src="/CVSergio/assets/img/Sergio CV.jpeg"
              alt="Sergio Juárez García"
              className="profile-photo"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
