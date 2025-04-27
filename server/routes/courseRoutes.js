const express = require('express');
const router = express.Router();
const db = require('../database/db-config');

router.post('/', (req, res) => {
    const { name, code, department_id } = req.body;
    const query = 'INSERT INTO courses (name, code, department_id) VALUES (?, ?, ?)';
    db.query(query, [name, code, department_id], (err, result) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).send('Course added successfully.');
        }
    });
});

module.exports = router;
