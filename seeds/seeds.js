
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('notes').del()
    .then(function () {
      // Inserts seed entries
      return knex('notes').insert([
        {address: 'kina.siu@gmail.com', carrier: 'AT&T', subject: 'email head', message: 'hello email!', time:'1989-04-13T13:53:00.000Z', timeNum: '608478780000'},
        {address: '7326983973', carrier: 'AT&T', subject: 'text head', message: 'hello, text', time:'1989-04-13T13:53:00.000Z', timeNum: '1524750840000'},
        {address: '1234567890', carrier: 'T-Mobile', subject: 'Lonely MILFS in your area!', message: 'why would you click on this?', time:'2018-04-26T22:00:00.000Z', timeNum: '1524780000000'}
      ]);
    });
};
