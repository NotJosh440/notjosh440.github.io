const express = require('express');
const bodyParser = require('body-parser');
const { createConnection } = require('mysql2');

const app = express();
app.use(bodyParser.json());

// Endpoint to handle the form submission
app.post('/api/endpoint', (req, res) => {
    const formData = req.body; // Access the form data sent from the GitHub Pages website

    // Store the form data in your MySQL table
    const connection = createConnection({
        host: 'containers-us-west-191.railway.app',
        user: 'root',
        password: 'EXL5IXg81PerRNfGIFUe',
        database: 'railway'
    });

    connection.query('INSERT INTO your_table SET ?', formData, (error, results) => {
        if (error) {
            // Handle the error
            console.error(error);
            res.status(500).send('An error occurred');
        } else {
            // Form data inserted successfully
            res.sendStatus(200);
        }

        connection.end();
    });
});

app.listen(3000, () => {
    console.log('Server is running');
});