import React from 'react'
import { FaGraduationCap } from 'react-icons/fa'

const education = [
  {
    degree: 'Ingeniería en Desarrollo y Gestión de Software Multiplataforma',
    institution: 'Universidad Tecnológica Tula-Tepeji',
    location: 'Tula de Allende, Hidalgo',
    period: 'Junio 2018 - Mayo 2022',
    description: 'Formación integral en desarrollo de software, gestión de proyectos tecnológicos y soluciones multiplataforma.',
  },
  {
    degree: 'Técnico en Mecatrónica',
    institution: 'CETIS No. 26',
    location: 'Atitalaquia, Hidalgo',
    period: '2015 - Mayo 2018',
    description: 'Especialización en sistemas mecatrónicos, automatización y control de procesos industriales.',
  },
]

function Education() {
  return (
    <section id="education" className="section education-section">
      <div className="container">
        <h2 className="section-title">Educación</h2>
        <div className="education-timeline">
          {education.map((edu, index) => (
            <div key={index} className="education-item">
              <div className="education-icon">
                <FaGraduationCap />
              </div>
              <div className="education-content">
                <h3 className="degree-title">{edu.degree}</h3>
                <h4 className="institution-name">{edu.institution}</h4>
                <p className="institution-location">{edu.location}</p>
                <p className="education-period">{edu.period}</p>
                <p className="education-description">{edu.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education
