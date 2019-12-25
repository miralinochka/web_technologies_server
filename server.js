const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const rsaRoutes = require('./routes/rsa');
const loginRoutes = require('./routes/login');
const config = require('./config');
const port = require('./config').port;
require('dotenv').config()

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use('/rsa', rsaRoutes);
app.use('/login', loginRoutes);

app.listen(port, function () {
  console.log('Web technologies server is listening on port '+ config.port);
});