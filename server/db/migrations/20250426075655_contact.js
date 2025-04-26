export async function up(knex) {
  await knex.schema.createTable('contact', (table) => {
    table.increments('id').primary().index()
    table.string('name').notNullable()
    table.string('email').notNullable()
    table.string('phone')
    table.string('subject')
    table.text('message')
    table.timestamp('created_at').notNullable()
  })
}
export async function down(knex) {
  await knex.schema.dropTable('contact')
}
