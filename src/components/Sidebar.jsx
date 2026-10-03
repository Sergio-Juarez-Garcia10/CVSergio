import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

const menuItems = [
  { id: 'about', label: 'Acerca de' },
  { id: 'experience', label: 'Experiencia' },
  { id: 'projects', label: 'Proyectos' },
  { id: 'skills', label: 'Habilidades' },
  { id: 'education', label: 'Educación' },
  { id: 'interests', label: 'Intereses' },
]

function Sidebar({ activeSection }) {
  const [isOpen, setIsOpen] = useState(false)

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsOpen(false)
  }

  return (
    <>
      <button
        className="sidebar-toggle"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle navigation"
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      <nav className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div className="sidebar-profile">
          <img
            src="/CVSergio/assets/img/profile.jpg"
            alt="Sergio Juárez García"
            className="profile-img"
          />
        </div>
        <ul className="nav-menu">
          {menuItems.map((item) => (
            <li key={item.id}>
              <button
                className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                onClick={() => scrollToSection(item.id)}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </>
  )
}

export default Sidebar
