const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // Import cors
const studentRoutes = require('./routes/studentRoutes');

const app = express();

app.use(cors()); 
app.use(bodyParser.json());
app.use('/api/students', studentRoutes);

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});