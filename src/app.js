const express = require('express');
const app = express();
const router = express.Router();
//Rotas
const personRoute = require('./routes');
app.use('/persons', personRoute);
module.exports = app;