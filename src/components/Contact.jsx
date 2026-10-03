import React, { useState } from 'react'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaPaperPlane } from 'react-icons/fa'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [status, setStatus] = useState('')

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const mailtoLink = `mailto:sergio.juarez.garcia2@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Hola Sergio,\n\n${formData.message}\n\nSaludos,\n${formData.name}\n${formData.email}`)}`
    window.location.href = mailtoLink
    setStatus('success')
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <h2 className="section-title">Contacto</h2>
        <p className="contact-intro">
          ¿Tienes un proyecto en mente o una oportunidad laboral? 
          Me encantaría escucharte. Completa el formulario y te responderé lo antes posible.
        </p>

        <div className="contact-grid">
          <div className="contact-info-card">
            <h3 className="contact-info-title">Información de Contacto</h3>
            
            <div className="contact-info-item">
              <div className="contact-icon">
                <FaEnvelope />
              </div>
              <div>
                <h4>Email</h4>
                <a href="mailto:sergio.juarez.garcia2@gmail.com">sergio.juarez.garcia2@gmail.com</a>
              </div>
            </div>

            <div className="contact-info-item">
              <div className="contact-icon">
                <FaPhone />
              </div>
              <div>
                <h4>Teléfono</h4>
                <a href="tel:+527731331419">+52 773 133 1419</a>
              </div>
            </div>

            <div className="contact-info-item">
              <div className="contact-icon">
                <FaMapMarkerAlt />
              </div>
              <div>
                <h4>Ubicación</h4>
                <p>Tula de Allende, Hidalgo, México</p>
              </div>
            </div>

            <div className="contact-social">
              <h4>Sígueme en:</h4>
              <div className="social-links">
                <a href="https://github.com/Sergio-Juarez-Garcia10" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <FaGithub />
                </a>
                <a href="https://www.linkedin.com/in/sergio-ju%C3%A1rez-garc%C3%ADa-55460b23b/?isSelfProfile=true" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <FaLinkedin />
                </a>
                
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Nombre completo</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Tu nombre"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="tu@email.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Asunto</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="¿En qué puedo ayudarte?"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Mensaje</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                placeholder="Cuéntame sobre tu proyecto o propuesta..."
              ></textarea>
            </div>

            <button type="submit" className="btn-submit">
              <FaPaperPlane /> Enviar Mensaje
            </button>

            {status === 'success' && (
              <p className="form-success">¡Mensaje enviado! Te responderé pronto.</p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
