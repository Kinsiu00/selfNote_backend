
exports.up = function(knex, Promise) {
    return knex.schema.createTable('notes', table => {
        table.increments();
        table.string('name', 64);
        table.string('address', 64);
        table.string('subject', 64);
        table.string('message', 128);
        table.timestamps(true, true);
    })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('notes')
};
