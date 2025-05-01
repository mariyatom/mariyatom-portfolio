export interface ProjectData {
  title: string
  text: string
  color: string
  icon: string
  description: string
  codeLink: string
  deployed: string
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
    text: ``,
    color: 'white',
    icon: '',
    description: `These projects are a combination of collaborative work in a team environment utilising Agile Methodologies, and solo projects I have designed myself. At Dev Academy, we are trained in human skills with an emphasis on personal growth and effective collaboration, made possible through daily pair programming and intentional feedback sessions.

I have achieved the New Zealand Certificate of Applied Software Development (Level 6). During this intensive course, I have become proficient in the fundamentals of software development, building my knowledge base and ensuring that I am work ready for a career as a full-stack software engineer.

Click on a tab to find out more! 📂💡👉🏽`,
    codeLink: '',
    deployed: '',
    images: [],
    tech: [],
  },
  {
    id: 2,
    title: 'Geared Up',
    text: `Final 7-Day Group Project at Dev Academy.`,
    color: 'green',
    icon: '👥🤝',
    description: `Our app is centered on New Zealand's 11 Great Walks. our team of 6 members created a React web app that lists all great walks.During this project, I got to explore both frontend and backend development. I spent the first few days deep in the backend before switching to the frontend and honestly, that’s when I found my stride.

It felt like working on a car engine hidden away but vital, powering everything from behind the scenes. That’s where all the logic lives, and I really enjoyed getting stuck into that part.

This app let users see at a glance what gear they already had and what they still needed to prepare for their chosen walk.

🔐 Keeping Things Secure
We used Auth0 as our login system a kind of virtual bouncer that ensures only logged-in users can view or update their personal info. We implemented this security on both frontend and backend through pair programming.

`,
    codeLink: 'https://github.com/mariyatom/GearedUp',
    deployed: '',
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
    text: `Full-stack Solo Project`,
    color: 'yellow',
    icon: '👤🏪🛒',
    description: `Big Mart was a solo mini-project. I’m developing this app for my father-in-law’s retail shop in Auckland. It’s a well-established store with over 15 years of history, especially focused on South Indian foods.

During our foundation phase and the 20-hour project time, I first started thinking about this app. But due to time and knowledge limitations at that point, I pivoted and created a small book site for toddlers instead called Lil Book Shop, built using JavaScript.

However, the moment I heard about the chance to do a personal project, my mind instantly leaned toward creating an e-commerce website for our family’s shop without a second thought.

What motivated me even more was the freedom of not having to build a finished product. With that flexibility, I decided to move ahead with this app idea, building my own MVP (Minimum Viable Product) and designing the database from scratch.`,
    codeLink: 'https://github.com/mariyatom/big-mart',
    deployed: 'https://big-mart-mariyas.devacademy.nz',
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
    text: `Full-stack Solo Project`,
    color: '#00a884',
    icon: '',
    description: `CMS was a solo mini-project to practice managing state. In addition to our grocery selection, we also offer a Content Management System (CMS) to help businesses manage and streamline their digital content effortlessly.CMS is an extension of the BigMart project, implemented within the same project but with a separate login system.`,
    codeLink:
      'https://github.com/mariyatom/big-mart/tree/main/client/components',
    deployed: 'https://big-mart-mariyas.devacademy.nz/cms',
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
    title: 'Todo',
    text: `Full Stack Individual Challenge - Dev Academy Aotearoa.`,
    color: 'Blue',
    icon: '📝',
    description: `The application effectively implements Create, Read, Update, and Delete operations (CRUD) for to-do tasks, demonstrating a solid link between the frontend and backend. Users can Add new tasks to their list,Modify existing tasks, either by double-clicking or using an edit button,Remove tasks from the list and the database,Mark tasks as finished.
    The project was useful in solidifying  understanding of state management within a full-stack application.
    The application features different tabs to filter tasks.All-Displays both completed and pending tasks. Active-Shows only the tasks that are not yet completed (pending).Completed- Displays only the tasks that have been marked as completed.
    
    When a task is marked as "Completed", it initially remains visible in the "All" list. Upon clicking the "Clear Completed" button, it is removed from the "All" list and moved to the "Completed" tab. The task's status is also updated in the database.

If the "Delete" button is clicked, the task is permanently removed.
    `,
    codeLink: 'https://github.com/mariyatom/Todo',
    deployed: '',
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
    text: `Full-stack Solo Project | Status: Always under construction. Just like me.`,
    color: 'Blue',
    icon: '',
    description: `The portfolio project showcases different project links, provides access to all my GitHub repositories, and includes a brief introduction about me.You're looking at it! A space to show off all the sweat, snacks, and semicolons behind my projects. Designed by me, styled with love (and CSS).`,
    codeLink: 'https://github.com/mariyatom/mariyatom-portfolio',
    deployed: 'https://mariyatom-portfolio.vercel.app/',
    images: [
      '/assets/portfolio1.WebP',
      '/assets/portfolio2.WebP',
      '/assets/portfolio3.WebP',
    ],
    tech: ['React', 'Sqlite', 'Express', 'Knex.Js', 'CSS', 'Typescript'],
  },
  {
    id: 7,
    title: 'Lil-book',
    text: `Full-stack Solo Project`,
    color: 'yellow',
    icon: '',
    description: `I’ve created a small project related to kids' books, inspired by my little one.
It includes a home page, a kids' books page with filters, an add-to-cart function, a remove-from-cart feature (using the minus sign on each item or int the cart), a cart page, and a payment section with messages (though it’s not integrated with the payment gateway yet; I’m working on that).`,
    codeLink: 'https://github.com/mariyatom/lil-book-club',
    deployed: 'https://mariyatom.github.io/lil-book-club/',
    images: [
      '/assets/lilbook1.WebP',
      '/assets/lilbook2.WebP',
      '/assets/lilbook3.WebP',
      '/assets/lilbook4.WebP',
    ],
    tech: ['Javascript', 'HTML', 'CSS'],
  },
  {
    id: 8,
    title: 'Game',
    text: `Individual Challenge - Dev Academy Aotearoa.  `,
    color: 'Blue',
    icon: '',
    description: `When a player clicks a cell, it should display their mark (❌ or ⭕). After each move, the game should switch the turn to the other player. You can dynamically update the subtitle text to show whose turn it is, making it more interactive ("Now it's O's turn!" or "Now it's X's turn!").After each move, the game should check for a winner by checking all rows, columns, and diagonals.If there is a winner, the game should display a message announcing the winner.`,
    codeLink: 'https://github.com/mariyatom/Tic-Tac-Toe-Game',
    deployed: 'https://mariyatom.github.io/Tic-Tac-Toe-Game/',
    images: [
      '/assets/Tictactoe1.WebP',
      '/assets/Tictactoe2.WebP',
      '/assets/Tictactoe3.WebP',
      '/assets/Tictactoe4.WebP',
    ],
    tech: ['Javascript', 'HTML', 'CSS'],
  },
]
