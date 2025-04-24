interface Props {
  activeTab: string
  onTabClick: (tab: string) => void
}

const ProjectTabs = ({ activeTab, onTabClick }: Props) => {
  const tabs = [
    'Overview',
    'Geared Up',
    'Big Mart',
    'CMS',
    'Todo List',
    'Portfolio',
    'Lil-book-club',
  ]
  return (
    <div className="tab-navigation">
      {tabs.map((tab) => (
        <button
          key={tab}
          className={activeTab === tab ? 'active' : ''}
          onClick={() => onTabClick(tab)}
        >
          {tab}
        </button>
      ))}
    </div>
  )
}

export default ProjectTabs
