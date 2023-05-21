const fs = require('fs');

module.exports = async (req, res) => {
    const name = req.body.data;
    const data = `${name}\n\n`;

    const file = 'scouting/data.txt';

    fs.appendFile(file, data, 'utf8', (err) => {
        if (err) {
            console.error(err);
            res.status(500).json({ error: 'An error occurred.' });
        } else {
            console.log('Data appended to file successfully.');
            res.status(200).json({ message: 'Data submitted successfully!' });
        }
    });
};