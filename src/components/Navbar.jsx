import React, { useState, useEffect } from 'react'
import { FaBars, FaTimes, FaDownload } from 'react-icons/fa'

const menuItems = [
  { id: 'about', label: 'Inicio' },
  { id: 'experience', label: 'Experiencia' },
  { id: 'education', label: 'Educación' },
  { id: 'skills', label: 'Habilidades' },
  { id: 'projects', label: 'Proyectos' },
  { id: 'contact', label: 'Contacto' },
]

function Navbar({ activeSection }) {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsOpen(false)
  }

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <button className="navbar-brand" onClick={() => scrollToSection('about')}>
          Sergio Juárez
        </button>

        <button
          className="navbar-toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

        <ul className={`navbar-menu ${isOpen ? 'open' : ''}`}>
          {menuItems.map((item) => (
            <li key={item.id}>
              <button
                className={`navbar-link ${activeSection === item.id ? 'active' : ''}`}
                onClick={() => scrollToSection(item.id)}
              >
                {item.label}
              </button>
            </li>
          ))}
          <li>
            <a
              href="/CVSergio/assets/img/CV Sergio Juarez Garcia.pdf"
              download
              className="btn-download"
            >
              <FaDownload /> Descargar CV
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
