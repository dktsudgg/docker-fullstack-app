const express = require("express");
const bodyParser = require("body-parser");
const db = require('./db');

const app = express();

app.use(bodyParser.json());

// make db table
db.pool.query(`create table if not exists lists (
    id INTEGER AUTO_INCREMENT,
    value TEXT,
    PRIMARY KEY (id)
)`, (err, results, fields) => {
    console.log("results", results);
});

app.get('/api/values', (req, res) => {
    // fetch all from db
    db.pool.query('select * from lists;', (err, results, fields) => {
        if (err) return res.status(500).send(err);
        else return res.json(results);
    });
});

// insert from client's input
app.post('/api/value', (req, res) => {
    db.pool.query(`insert into lists (value) values("${req.body.value}")`, (err, results, fields) => {
        if (err) return res.status(500).send(err);
        else return res.json({success: true, value: req.body.value});
    });
});

app.listen(5000, ()=>{
    console.log("application start");
});