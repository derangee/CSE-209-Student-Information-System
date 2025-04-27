const API_BASE = 'http://localhost:3000/api';

document.getElementById('studentForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = document.getElementById('studentName').value;
    const roll = document.getElementById('studentRoll').value;

    const res = await fetch(`${API_BASE}/students`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, roll })
    });

    if (res.ok) alert('Student added!');
    else alert('Error adding student');
});

document.getElementById('departmentForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = document.getElementById('departmentName').value;

    const res = await fetch(`${API_BASE}/departments`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name })
    });

    if (res.ok) alert('Department added!');
    else alert('Error adding department');
});

document.getElementById('courseForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = document.getElementById('courseName').value;
    const code = document.getElementById('courseCode').value;
    const department_id = document.getElementById('courseDepartmentId').value || null;

    const res = await fetch(`${API_BASE}/courses`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, code, department_id })
    });

    if (res.ok) alert('Course added!');
    else alert('Error adding course');
});

document.getElementById('gradeForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const student_id = document.getElementById('gradeStudentId').value;
    const course_id = document.getElementById('gradeCourseId').value;
    const grade = document.getElementById('gradeValue').value;

    const res = await fetch(`${API_BASE}/grades`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ student_id, course_id, grade })
    });

    if (res.ok) alert('Grade added!');
    else alert('Error adding grade');
});
