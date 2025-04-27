const express = require('express');
const router = express.Router();
const db = require('../database/db-config');

router.post('/', (req, res) => {
    const { name } = req.body;
    const query = 'INSERT INTO departments (name) VALUES (?)';
    db.query(query, [name], (err, result) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).send('Department added successfully.');
      }
    });
  });
  

module.exports = router;
