export async function seed(knex) {
  await knex('contact').del()
}
