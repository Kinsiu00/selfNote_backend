
exports.up = function(knex, Promise) {
  return knex.schema.createTable('notes', table => {
      table.increments();
      table.string('address', 36);
      table.string('carrier', 36);
      table.string('subject', 36);
      table.string('message', 160);
      table.timestamp('time');
      table.bigInteger('timeNum');
      table.timestamps(true,true);
  });
};

exports.down = function(knex, Promise) {
  
};
