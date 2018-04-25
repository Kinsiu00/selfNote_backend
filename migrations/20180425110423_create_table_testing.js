exports.up = function(knex, Promise) {
    return knex.schema.createTable('testing', table => {
        table.increments();
        table.string('timeString', 48)
        table.dateTime('time')
        table.timestamps(true, true);
    })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('testing')
};