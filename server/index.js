const express = require("express");
const server = express();
const mysql = require("mysql2");
const cors = require("cors");

const db = mysql.createPool({
    host: "localhost",
    user: "admin",
    password: "meubanco123",
    database: "users"
})

server.use(express.json());
server.use(cors());

server.post("/register", (req, res) => {
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;
    const password = req.body.password;

    db.query("INSERT INTO dados (firstname, lastname, email, password) VALUES (?, ?, ?, ?)", [firstName, lastName, email, password], (err, result) => {
        if (err) {
            res.send(err)
        }
        res.send({msg: "cadastro realizado"});
    })
})

server.post("/login", (req, res) => {
    const email = req.body.email;

    db.query("SELECT * FROM dados WHERE email = ?", [email], (err, result) => {
        if (err) {
            res.send(err)
        }
        return res.json(result)
    })

})

server.post("/getUser", (req, res) => {
    const userId = req.body.userId;

    db.query("SELECT * FROM dados WHERE userid = ?", [userId], (err, result) => {
        if (err) {
            res.send(err)
        }
        return res.json(result)
    })

})

server.listen(3000, () => {
    console.log("Server iniciado e rodando na porta 3000!")
})
