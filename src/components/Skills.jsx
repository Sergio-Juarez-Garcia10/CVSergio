import React from 'react'
import { 
  FaMicrosoft, 
  FaReact, 
  FaJs, 
  FaDatabase, 
  FaServer, 
  FaCode, 
  FaTools,
  FaChartBar,
  FaCloud,
} from 'react-icons/fa'
import { DiMongodb } from "react-icons/di";
import { SiDotnet, SiMysql } from 'react-icons/si'

const skillCategories = [
  {
    title: 'Lenguajes de Programación',
    icon: <FaCode />,
    skills: [
      { name: 'C#', icon: <FaMicrosoft />, color: '#9b4f96' },
      { name: 'JavaScript', icon: <FaJs />, color: '#f7df1e' },
      { name: 'SQL', icon: <FaDatabase />, color: '#cc2927' },
    ],
  },
  {
    title: 'Frameworks & Tecnologías',
    icon: <FaServer />,
    skills: [
      { name: '.NET Core', icon: <SiDotnet />, color: '#512bd4' },
      { name: 'ASP.NET Core', icon: <FaServer />, color: '#512bd4' },
      { name: 'React', icon: <FaReact />, color: '#61dafb' },
      { name: 'Razor Pages', icon: <FaCode />, color: '#512bd4' },
    ],
  },
  {
    title: 'Bases de Datos',
    icon: <FaDatabase />,
    skills: [
      { name: 'SQL Server', icon: <FaDatabase />, color: '#cc2927' },
      { name: 'MySQL', icon: <SiMysql />, color: '#4479a1' },
      {name: 'MongoDB', icon: <DiMongodb />, color: '#4db33d' },
    ],
  },
  {
    title: 'Herramientas & DevOps',
    icon: <FaTools />,
    skills: [
      { name: 'Azure DevOps', icon: <FaCloud />, color: '#0078d4' },
      { name: 'CI/CD', icon: <FaTools />, color: '#4caf50' },
      { name: 'Git', icon: <FaCode />, color: '#f05032' },
      { name: 'VPS', icon: <FaServer />, color: '#ff6b35' },
    ],
  },
  {
    title: 'Análisis de Datos',
    icon: <FaChartBar />,
    skills: [
      { name: 'Power BI', icon: <FaChartBar />, color: '#f2c811' },
      { name: 'ETL', icon: <FaChartBar />, color: '#4caf50' },
    ],
  },
]

const softSkills = [
  'Liderazgo técnico',
  'Gestión de requerimientos',
  'Pensamiento analítico',
  'Resolución de problemas',
  'Aprendizaje rápido',
  'Trabajo en equipo',
  'Comunicación efectiva',
  'Gestión de proyectos',
]

function Skills() {
  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <h2 className="section-title">Habilidades</h2>
        
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <div className="skill-category-header">
                <span className="skill-category-icon">{category.icon}</span>
                <h3 className="skill-category-title">{category.title}</h3>
              </div>
              <div className="skills-list">
                {category.skills.map((skill, i) => (
                  <div key={i} className="skill-item">
                    <span className="skill-icon" style={{ color: skill.color }}>
                      {skill.icon}
                    </span>
                    <span className="skill-name">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="soft-skills">
          <h3 className="skill-category-title">Competencias</h3>
          <div className="soft-skills-tags">
            {softSkills.map((skill, index) => (
              <span key={index} className="soft-skill-tag">{skill}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
