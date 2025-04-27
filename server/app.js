const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const studentRoutes = require('./routes/studentRoutes');
const departmentRoutes = require('./routes/departmentRoutes');
const courseRoutes = require('./routes/courseRoutes');
const gradeRoutes = require('./routes/gradeRoutes');

const app = express();

app.use(cors({
    origin: '*',  // Allow all origins, or specify the origin you want (e.g., 'http://localhost:5500')
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type']
  }));
  
app.use(bodyParser.json());

app.use('/api/students', studentRoutes);
app.use('/api/departments', departmentRoutes);
app.use('/api/courses', courseRoutes);
app.use('/api/grades', gradeRoutes);

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});