
exports.up = function(knex, Promise) {
    return knex.schema.createTable('jobs', (table) => {
        table.string('id')
        table.string('created_at')
        table.string('title')
        table.string('location')
        table.string('type')
        table.string('description')
        table.string('how_to_apply')
        table.string('company')
        table.string('company_url')
        table.string('company_logo')
        table.string('url')
      })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('jobs')

};
