import React from 'react'
import '../styles/projects.scss'
import ProjectContent from './ProjectContent'
import ProjectTabs from './ProjectTabs'

const Projects = () => {
  const [activeTab, setActiveTab] = React.useState('Overview')

  return (
    <div className="projects-container">
      <h2>Projects.</h2>
      <ProjectTabs activeTab={activeTab} onTabClick={setActiveTab} />
      <div className="project-content">
        <ProjectContent activeTab={activeTab} />
      </div>
    </div>
  )
}

export default Projects
