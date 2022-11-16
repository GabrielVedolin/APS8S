const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);

//SQLITE
/**
 * Driver:
 * QUERY BUILDER: consultas com js
 * Knex
 * documentation http://knexjs.org/
 */



app.listen(process.env.PORT || 3333);