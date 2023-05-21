const express = require('express');
const fs = require('fs');
const app = express();
app.use(express.json());

//app.use(express.urlencoded({ extended: true }));

app.get('/index', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.post('/submit', (req, res) => {
    const name = req.body.data;
    const data = `${name}\n\n`;

    const file = 'scouting/data.txt';

    fs.appendFile(file, data, 'utf8', (err) => {
        if (err) {
            console.error(err);
            res.send('An error occurred.');
        } else {
            console.log('Data appended to file successfully.');
            res.send('Data submitted successfully!');
        }
    });
});

app.listen(8000, () => {
    console.log('Server listening on port 3000');
});