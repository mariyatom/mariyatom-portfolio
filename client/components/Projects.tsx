import React from 'react'
import '../styles/projects.scss' // Create this SCSS file

const Projects = () => {
  const [activeTab, setActiveTab] = React.useState('Overview')

  const handleTabClick = (tab: string) => {
    setActiveTab(tab)
  }

  const renderTabContent = () => {
    switch (activeTab) {
      case 'Overview':
        return (
          <div className="tab-content">
            <h3>Overview.</h3>
            <p>
              These projects are a combination of collaborative work in a team
              environment utilising Agile Methodologies, and solo projects I
              have designed myself. At Dev Academy, we are trained in human
              skills with an emphasis on personal growth and effective
              collaboration, made possible through daily pair programming and
              intentional feedback sessions.
            </p>
            <p>
              I have achieved the New Zealand Certificate of Applied Software
              Development (Level 6, Computer Science). During this intensive
              course, I have become proficient in the fundamentals of software
              development, building my knowledge base and ensuring that I am
              work ready for a career as a full-stack software engineer.
            </p>
            <p>Click on a tab to find out more!</p>
          </div>
        )
      case 'Staigic':
        return (
          <div className="tab-content">
            <h3>Staigic Project</h3>
            <p>Details about the Staigic project will go here.</p>
            {/* Add more information, links, images, etc. */}
          </div>
        )
      case 'Snake':
        return (
          <div className="tab-content">
            <h3>Snake Game</h3>
            <p>Information and details about the Snake game project.</p>
            {/* Add more information, links, images, etc. */}
          </div>
        )
      case 'TodoList':
        return (
          <div className="tab-content">
            <h3>Todo List Application</h3>
            <p>Description and features of the Todo List application.</p>
            {/* Add more information, links, images, etc. */}
          </div>
        )
      default:
        return null
    }
  }

  return (
    <div className="projects-container">
      <h2>Projects.</h2>
      <div className="tab-navigation">
        <button
          className={activeTab === 'Overview' ? 'active' : ''}
          onClick={() => handleTabClick('Overview')}
        >
          Overview
        </button>
        <button
          className={activeTab === 'Staigic' ? 'active' : ''}
          onClick={() => handleTabClick('Staigic')}
        >
          Staigic
        </button>
        <button
          className={activeTab === 'Snake' ? 'active' : ''}
          onClick={() => handleTabClick('Snake')}
        >
          Snake
        </button>
        <button
          className={activeTab === 'TodoList' ? 'active' : ''}
          onClick={() => handleTabClick('TodoList')}
        >
          Todo List
        </button>
      </div>
      <div className="project-content">{renderTabContent()}</div>
    </div>
  )
}

export default Projects
