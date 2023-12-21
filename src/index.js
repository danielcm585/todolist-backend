require('dotenv').config();
const express = require('express');
const routes = require('./routes');
const db = require('./db');

const sequelize = require('./db');

sequelize.sync({ force: false }) 
  .then(() => {
    console.log('Tables have been successfully created');
  })
  .catch(error => {
    console.error('Error creating tables:', error);
  });
  
const app = express();

app.use(express.json());

app.use('/api', routes);

const port = 8000;
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});

