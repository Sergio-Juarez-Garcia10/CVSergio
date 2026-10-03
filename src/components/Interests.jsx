import React from 'react'
import { FaFutbol, FaBiking, FaFilm, FaLaptopCode } from 'react-icons/fa'

const interests = [
  {
    icon: <FaFutbol />,
    title: 'Fútbol',
    description: 'Apasionado por el fútbol, tanto practicándolo como siguiendo los torneos más importantes.',
  },
  {
    icon: <FaBiking />,
    title: 'Ciclismo de Montaña',
    description: 'Disfruto explorar rutas y senderos en bicicleta de montaña, combinando deporte y naturaleza.',
  },
  {
    icon: <FaFilm />,
    title: 'Ciencia Ficción & Fantasía',
    description: 'Fanático de las series y películas de ciencia ficción y fantasía, siempre buscando nuevas historias.',
  },
  {
    icon: <FaLaptopCode />,
    title: 'Tecnología',
    description: 'Explorar constantemente los últimos avances en desarrollo de software y nuevas tecnologías.',
  },
]

function Interests() {
  return (
    <section id="interests" className="section interests-section">
      <div className="container">
        <h2 className="section-title">Intereses</h2>
        <div className="interests-grid">
          {interests.map((interest, index) => (
            <div key={index} className="interest-card">
              <div className="interest-icon">{interest.icon}</div>
              <h3 className="interest-title">{interest.title}</h3>
              <p className="interest-description">{interest.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Interests
