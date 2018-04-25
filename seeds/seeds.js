
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('notes').del()
    .then(function () {
      // Inserts seed entries
      return knex('notes').insert([
        {address: 'kina.siu@gmail.com', carrier: 'AT&T', subject: 'email head', message: 'hello email!', time: '2018-04-25T17:49:00.000Z'},
        {address: '7326983973', carrier: 'AT&T', subject: 'text head', message: 'hello, text', time: '2018-04-25T14:53:10.578Z'},
        {address: '1234567890', carrier: 'T-Mobile', subject: 'Lonely MILFS in your area!', message: 'why would you click on this?', time: '2018-04-25T14:53:10.578Z'}
      ]);
    });
};
