interface Props {
  title: string
  text: string
}

const ProjectCard = ({ title, text }: Props) => {
  return (
    <div className="project-card">
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  )
}

export default ProjectCard
