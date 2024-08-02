const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
const port = 5000;

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'dbnoteapp'
});

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.post('/api/signup', (req, res) => {
    const { username, password } = req.body;
  console.log(password)
    

    const sqlInsert = "INSERT INTO note_app ( email, password) VALUES (?, ?)";
    db.query(sqlInsert, [username, password], (err, result) => {

        if (err) {
            console.error('Error inserting data:', err); // Log the full error
            res.status(500).json({ error: 'Error inserting data into the database', details: err });
            return;
        }
        res.json({ message: 'Data inserted into the database successfully' });
    });

    // app.get('/api/login', (req, res) => {
    //     const { username, password } = req.body;
    //   console.log(password)
        
    
    //     const sqlget = "SELECT * FROM note_app";
    //     db.query(sqlget, [username, password], (err, result) => {
    
    //         if (err) {
    //             console.error('Error inserting data:', err); // Log the full error
    //             res.status(500).json({ error: 'Error inserting data into the database', details: err });
    //             return;
    //         }
    //         res.json({ message: 'Data inserted into the database successfully' });
    //     });






});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
