
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('notes').del()
    .then(function () {
      // Inserts seed entries
      return knex('notes').insert([
        {name: 'Kin', address: 'kina.siu@gmail.com', carrier: 'AT&T', subject: 'First Message', message: 'hello, world', time:'3600000'},
        {name: 'Kin2', address: '7326983973', carrier: 'AT&T', subject: 'Second Message', message: 'hello, to your phone', time:'259200000'},
        {name: 'Andrew', address: 'andrew@fakeemail.com', carrier: 'T-Mobile', subject: 'important!', message: 'my project is on fire', time:'86400000'},
        {name: 'Queen Sass', address: '1112223333', carrier: 'Verizon', subject: 'Single MILFS in your area!', message: 'did you really click on this?', time: '604800000'}
      ]);
    });
};
