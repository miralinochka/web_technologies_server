const express = require('express');
const bodyParser = require('body-parser');
const rsaRoutes = require('./routes/rsa');
const config = require('./config');
const port = require('./config').port;
require('dotenv').config()

const app = express();

app.use(bodyParser.json());
app.use('/rsa', rsaRoutes);

app.listen(port, function () {
  console.log('Web technologies server is listening on port '+ config.port);
});