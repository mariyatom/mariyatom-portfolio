import ProjectCard from './ProjectCard'

interface Props {
  activeTab: string
}

const ProjectContent = ({ activeTab }: Props) => {
  const contentMap: { [key: string]: { title: string; text: string } } = {
    Overview: {
      title: 'Overview',
      text: ` These projects are a combination of collaborative work in a team
              environment utilising Agile Methodologies, and solo projects I
              have designed myself. At Dev Academy, we are trained in human
              skills with an emphasis on personal growth and effective
              collaboration, made possible through daily pair programming and
              intentional feedback sessions.

I have achieved the New Zealand Certificate of Applied Software
              Development (Level 6, Computer Science). During this intensive
              course, I have become proficient in the fundamentals of software
              development, building my knowledge base and ensuring that I am
              work ready for a career as a full-stack software engineer.
              Click on a tab to find out more!`,
    },
    'Geared Up': {
      title: 'Geared Up',
      text: `Our app is centered on New Zealand's 11 Great Walks. In 7 days, our team of 6 members created a React web app that lists all great walks, lets users tick off what they already have while showing them what they still need to acquire. This syncs back to the database, keeping everything up to date. This meant users could quickly see what gear they already had and what they still needed to get for their chosen walk.`,
    },
    'Big Mart': {
      title: 'Big Mart',
      text: `Information and details about the Big Mart project.`,
    },
    TodoList: {
      title: 'Todo List Application',
      text: `Description and features of the Todo List application.`,
    },
  }

  const selected = contentMap[activeTab]

  if (!selected) return null

  return (
    <div className="tab-content">
      <ProjectCard title={selected.title} text={selected.text} />
    </div>
  )
}

export default ProjectContent
