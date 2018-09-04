
exports.up = function(knex, Promise) {
    return knex.schema.createTableIfNotExists('Likes', function (table) {
        table.increments().primary()
        table.integer('post_id')
        table.integer('likes').defaultTo(1)
      })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('Likes')
};
