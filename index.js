const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');
const knex = require('./db');
const PORT = process.env.PORT || 3077;
const appRoutes = require('./routes/app');
const text = require('./text')
app.use(cors());
app.use(morgan('combined'));
app.use(express.json()); //bodyparse
app.use(express.urlencoded({extended: true}));
app.use('/', appRoutes);

app.listen( PORT, () => {
  console.log(`Port ${PORT} is active`);
});


module.exports = app;
setInterval(text.sniffer, 10000)
setInterval(text.swipper, 11000)