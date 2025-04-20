document.getElementById('studentForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    console.log('Form submitted'); // Debugging line

    const name = document.getElementById('name').value;
    const roll = document.getElementById('roll').value;
    console.log('Name:', name, 'Roll:', roll); // Debugging line

    const response = await fetch('http://localhost:3000/api/students', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, roll }),
    });

    if (response.ok) {
        alert('Student added successfully!');
        document.getElementById('studentForm').reset();
    } else {
        alert('Failed to add student.');
    }
});