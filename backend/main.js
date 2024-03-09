// server.js
const express = require('express');
const fs = require('fs');

const app = express();
const PORT = 3000;

app.use(express.json());

app.post('/register', (req, res) => {
    const userData = req.body;

    fs.readFile('database.json', (err, data) => {
        if (err) throw err;

        let users = JSON.parse(data);
        users.push(userData);

        fs.writeFile('database.json', JSON.stringify(users, null, 2), err => {
            if (err) throw err;
            console.log('Data written to database.json');
        });
    });

    res.json({ message: 'Registration successful!' });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
