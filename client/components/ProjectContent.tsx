import ProjectCard from './ProjectCard'
import { projectData } from '../../models/project'

interface Props {
  activeTab: string
}

const ProjectContent = ({ activeTab }: Props) => {
  const selected = projectData.find((project) => project.title === activeTab)

  if (!selected) return null

  return (
    <div className="tab-content">
      <ProjectCard
        title={selected.title}
        text={selected.text}
        description={selected.description}
        color={selected.color}
        icon={selected.icon}
        codeLink={selected.codeLink}
        deployed={selected.deployed}
        images={selected.images}
        tech={selected.tech}
      />
    </div>
  )
}

export default ProjectContent
