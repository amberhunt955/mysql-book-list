require('dotenv').config()
const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();

//* ===== CONNECT TO DB
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: process.env.PASSWORD,
    database: "test"
})

//* ===== MIDDLEWARE
// allows us to send any json file using a client
app.use(express.json())

app.use(cors())

//* ===== ROUTES
app.get("/", (req, res) => {
    res.json("Hello world, this is the backend!")
})

app.post("/books", (req, res) => {
    const q = "INSERT INTO books (`title`, `author`, `desc`, `photo`) VALUES (?)"
    const values = [
        req.body.title,
        req.body.author,
        req.body.desc,
        req.body.photo
    ]

    db.query(q, [values], (err, data) => {
        if (err) return res.json(err)
        return res.json("Book has been created successfully!")
    })
})

app.get("/books", (req, res) => {
    const q = "SELECT * FROM books"
    db.query(q, (err, data) => {
        if (err) return res.json(err)
        return res.json(data)
    })
})

//* ===== LISTEN AT DESIGNATED PORT
const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
    console.log(`Listening at port ${PORT}...`);
})