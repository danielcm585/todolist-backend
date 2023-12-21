const express = require('express');
const router = express.Router();
const db = require('./db');

router.get('/get-all', (req, res) => {
  const queryRes = db.query(`select * from tasks`, (err, results) => {

  });
  res.json({ message: 'List of users' });
});

router.post('/users', (req, res) => {
  const user = req.body;
  res.json({ message: 'User created', user });
});

module.exports = router;
