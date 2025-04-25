export interface ProjectData {
  title: string
  text: string
  description: string
  codeLink: string
  images: string[]
  tech: string[]
}

export interface Project extends ProjectData {
  id: number
}

export const projectData: Project[] = [
  {
    id: 1,
    title: 'Overview',
    text: `These projects are a combination of collaborative work in a team environment utilising Agile Methodologies, and solo projects I have designed myself. At Dev Academy, we are trained in human skills with an emphasis on personal growth and effective collaboration, made possible through daily pair programming and intentional feedback sessions.

I have achieved the New Zealand Certificate of Applied Software Development (Level 6, Computer Science). During this intensive course, I have become proficient in the fundamentals of software development, building my knowledge base and ensuring that I am work ready for a career as a full-stack software engineer.

Click on a tab to find out more!`,
    description: ``,
    codeLink: '',
    images: [],
    tech: [],
  },
  {
    id: 2,
    title: 'Geared Up',
    text: `Our app is centered on New Zealand's 11 Great Walks.`,
    description: `In 7 days, our team of 6 members created a React web app that lists all great walks...`,
    codeLink: 'https://github.com/mariyatom/GearedUp',
    images: [
      '/assets/GearedUp1.WebP',
      '/assets/GearedUp2.WebP',
      '/assets/GearedUp3.WebP',
      '/assets/GearedUp4.WebP',
      '/assets/GearedUp5.WebP',
    ],
    tech: [
      'React',
      'Express',
      'SQLite',
      'Knex.js (node)',
      'Auth0',
      'Vitest',
      'tailwind-CSS',
    ],
  },
  {
    id: 3,
    title: 'Big Mart',
    text: `Information and details about the Big Mart project.`,
    description: `Big Mart was a solo mini-project to practice managing state...`,
    codeLink: 'https://github.com/mariyatom/big-mart',
    images: [
      '/assets/BigMart2.WebP',
      '/assets/BigMart3.WebP',
      '/assets/BigMart4.WebP',
      '/assets/BigMart5.WebP',
      '/assets/Bigmart6.WebP',
      '/assets/Bigmart7.WebP',
      '/assets/BigMart8.WebP',
      '/assets/Bigmart9.WebP',
      '/assets/BigMart10.WebP',
      '/assets/BigMart11.WebP',
      '/assets/BigMart12.WebP',
      '/assets/BigMart13.WebP',
    ],
    tech: ['React', 'Zustand', 'CSS', 'Sqlite', 'Express', 'Knex.Js'],
  },
  {
    id: 4,
    title: 'CMS',
    text: `Information and details about the CMS project.`,
    description: `CMS was a solo mini-project to practice managing state...`,
    codeLink:
      'https://github.com/mariyatom/big-mart/tree/main/client/components',
    images: [
      '/assets/CMS1.WebP',
      '/assets/CMS2.WebP',
      '/assets/CMS3.WebP',
      '/assets/CMS4.WebP',
      '/assets/CMS5.WebP',
      '/assets/CMS6.WebP',
    ],
    tech: ['React', 'Zustand', 'Auth0', 'CSS', 'Sqlite', 'Express', 'Knex.Js'],
  },
  {
    id: 5,
    title: 'Todo List',
    text: `Full Stack Individual Challenge - Dev Academy Aotearoa.`,
    description: `The application effectively implements Create, Read, Update, and Delete operations (CRUD) for to-do tasks, demonstrating a solid link between the frontend and backend. Users can Add new tasks to their list,Modify existing tasks, either by double-clicking or using an edit button,Remove tasks from the list and the database,Mark tasks as finished.
    The project was useful in solidifying  understanding of state management within a full-stack application.
    The application features different tabs to filter tasks.All-Displays both completed and pending tasks. Active-Shows only the tasks that are not yet completed (pending).Completed- Displays only the tasks that have been marked as completed.
    
    When a task is marked as "Completed", it initially remains visible in the "All" list. Upon clicking the "Clear Completed" button, it is removed from the "All" list and moved to the "Completed" tab. The task's status is also updated in the database.

If the "Delete" button is clicked, the task is permanently removed.
    `,
    codeLink: 'https://github.com/mariyatom/Todo',
    images: [
      '/assets/Todo1.WebP',
      '/assets/Todo2.WebP',
      '/assets/Todo3.WebP',
      '/assets/Todo4.WebP',
      '/assets/Todo5.WebP',
    ],
    tech: [
      'React',
      'Sqlite',
      'Express',
      'Knex.Js',
      'CSS',
      'Typescript',
      'Dokku Deployment',
    ],
  },
  {
    id: 6,
    title: 'Portfolio',
    text: `Description of Portfolio.`,
    description: `A simple yet efficient todo list app to track daily tasks...`,
    codeLink: 'https://github.com/mariyatom/mariyatom-portfolio',
    images: ['/images/todo-1.png'],
    tech: ['React', 'Sqlite', 'Express', 'Knex.Js', 'CSS', 'Typescript'],
  },
  {
    id: 7,
    title: 'Lil-book-club',
    text: `Description of lil book club.`,
    description: `A simple yet efficient todo list app to track daily tasks...`,
    codeLink: 'https://github.com/mariyatom/lil-book-club',
    images: [
      '/assets/lilbook1.WebP',
      '/assets/lilbook2.WebP',
      '/assets/lilbook3.WebP',
      '/assets/lilbook4.WebP',
    ],
    tech: ['Javascript', 'HTML', 'CSS'],
  },
]
