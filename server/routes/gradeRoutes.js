const express = require('express');
const router = express.Router();
const db = require('../database/db-config');

router.post('/', (req, res) => {
    const { student_id, course_id, grade } = req.body;
    const query = 'INSERT INTO grades (student_id, course_id, grade) VALUES (?, ?, ?)';
    db.query(query, [student_id, course_id, grade], (err, result) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).send('Grade added successfully.');
      }
    });
  });
  

module.exports = router;
