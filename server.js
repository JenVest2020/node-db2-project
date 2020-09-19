const express = require('express');
const helmet = require('helmet');
const server = express();

const carsRouter = require('./routers/carsRouter.js');

server.use(express.json());
server.use(helmet());

server.use('/api/cars', carsRouter);

module.exports = server;