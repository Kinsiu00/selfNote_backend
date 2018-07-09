const knex = require('./db')
const key = require('./key')


// using SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(key);

const swiper = () => {
  let currentTime = Date.now()
  knex('notes')
  .where('timeNum', '<', currentTime)
  .del()
  .then(console.log('swiper no swiping!'))
  .catch(error => console.error(error))
}
const sniffer = () => {
  let currentTime = Date.now()
  console.log(new Date(currentTime))
  knex('notes')
  .where('timeNum', '<=', currentTime)
  .then(rows => {
    rows.forEach(obj => {
      let message = {
        to: `${obj.address}${obj.carrier}`,
        from: 'self.note00@gmail.com',
        subject: obj.subject,
        text: obj.message,
        html: obj.message
      }
      console.log(message)
      sgMail.send(message)
    })
  })
  .catch(error => {console.error(error)})
}

module.exports = {
    swiper,
    sniffer
}