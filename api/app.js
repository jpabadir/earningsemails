const express = require('express');
const dotenv = require('dotenv');
dotenv.config();

const stocksRouter = require('./routes/stocks')

const app = express();

app.get('/', (req, res) => {
  res.send('Welcome to the astraset API!')
})

app.use('/stocks', stocksRouter);

app.listen(9000)