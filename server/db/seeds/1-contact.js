export async function seed(knex) {
  await knex('contact').insert([
    {
      name: 'mariya',
      email: 'mariyatom07@gmail.com',
      phone: '02102838586',
      subject: 'Freelance Inquiry',
      message: 'Hi Mariya, are you available for a freelance project?',
      created_at: new Date().toISOString(),
    },
    {
      name: 'john doe',
      email: 'johndoe@example.com',
      phone: '0221234567',
      subject: 'Collaboration Opportunity',
      message: 'Hey Mariya, love your work! Let’s team up on a project.',
      created_at: new Date().toISOString(), // or a string like '2025-04-26T12:00:00Z'
    },
  ])
}
