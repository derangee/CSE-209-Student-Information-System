const express = require('express');
const router = express.Router();
const db = require('../database/db-config');

router.post('/', (req, res) => {
    const { name, roll } = req.body;
    const query = 'INSERT INTO students (name, roll) VALUES (?, ?)';
    db.query(query, [name, roll], (err, result) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).send('Student added successfully.');
      }
    });
  });
  

module.exports = router;