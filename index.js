const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');
const knex = require('./db');
const PORT = process.env.PORT || 3077;
const appRoutes = require('./routes/app');
app.use(cors());
app.use(morgan('combined'));
app.use(express.json()); //bodyparse
app.use(express.urlencoded({extended: true}));
app.use('/', appRoutes);

app.listen( PORT, () => {
  console.log(`Port ${PORT} is active`);
});


module.exports = app;



// using SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs
const sgMail = require('@sendgrid/mail');
const key = '';
sgMail.setApiKey(key);
const msg = {
  to: '7326983973.txt.att.net',
  from: 'self.note00@gmail.com',
  subject: 'initial email test',
  text: 'text-line',
  html: '<strong>Initial email test success</strong>',
};
sgMail.send(msg);

const sniffer = () => {
  let currentTime = Date.now()
  console.log(new Date(currentTime))
  knex('notes')
  .where('timeNum', '<=', currentTime)
  .then(rows => {
    console.log(rows)
    rows.forEach(obj => {
      let message = {
        to: `${obj.address}@txt.att.net`,
        from: 'self.note00@gmail.com',
        subject: obj.subject,
        text: obj.message,
        html: obj.message
      }
      sgMail.send(message)
    })
  })
  .catch(error => {console.error(error)})
}
// setInterval(sniffer, 10000)
// sniffer()
