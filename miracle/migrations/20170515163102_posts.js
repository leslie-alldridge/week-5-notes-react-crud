exports.up = (knex, Promise) => {
  return knex.schema.createTableIfNotExists('Posts', function (table) {
    table.increments().primary()
    table.string('title')
    table.date('date_created')
    table.integer('comment_count').defaultsTo(0)
    table.string('paragraphs')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTableIfExists('Posts')
}
