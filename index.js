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
const key = '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';
sgMail.setApiKey(key);
const msg = {
  to: 'self.note00@gmail.com',
  from: 'self.note00@gmail.com',
  subject: 'initial email test',
  text: 'text-line',
  html: '<strong>Initial email test success</strong>',
};
// sgMail.send(msg);