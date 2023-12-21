require('dotenv').config();
const express = require('express');
const route = require('./route');

const app = express();

app.use(express.json());

app.use('/api', route);

const port = 8000;
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
