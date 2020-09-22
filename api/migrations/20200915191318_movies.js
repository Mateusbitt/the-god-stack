exports.up = (knex) => {
  return knex.schema.createTable('movies', (table) => {
    table.increments('id')
    table.string('name')
    table.integer('year')
    table.string('photo')
    table.datetime('created_at', { precision: 6 }).defaultTo(knex.fn.now(6))
    table.datetime('updated_at', { precision: 6 })
    table.datetime('deleted_at', { precision: 6 })
    table.string('created_by')
    table.string('updated_by')
    table.string('deleted_by')
  })
}
exports.down = (knex) => knex.schema.dropTable('movies')