exports.up = function(knex, Promise) {
    return knex.schema.createTable('notes', table => {
        table.increments();
        table.string('address', 64);
        table.string('carrier', 36);
        table.string('subject', 64);
        table.string('message', 160);
        table.dateTime('time', 36)
        table.timestamps(true, true);
    })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('notes')
};