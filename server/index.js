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

// server.get("/", (req, res) => {
//     db.query(
//         "INSERT INTO dados (firstname, lastname, email, password) VALUES ('Beatriz', 'Trivillin', 'bia@gmail.com', 'bia123')", (err, result) => {
//             if (err) {
//                 console.log(err)
//             }
//         }
//     )
// })

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

// server.post("/register", (req, res) => {
//     const firstName = req.body.firstName;
//     const lastName = req.body.lastName;
//     const email = req.body.email;
//     const password = req.body.password;

//     db.query("SELECT * FROM dados WHERE email = ?", [email], (err, result) => {
//         if(err) {
//             res.send(err);
//         }
//         if(result.length == 0) {
//             db.query("INSERT INTO dados (firstname, lastname, email, password) VALUES (?, ?, ?, ?)", [firstName, lastName, email, password], (err, result) => {
//                 if (err) {
//                     res.send(err)
//                 }
//                 res.send({msg: "cadastro realizado"});
//             })
//         }else {
//             res.send({msg: "email já cadastrado"})
//         }

//     })
// })

server.listen(3000, () => {
    console.log("Server iniciado e rodando na porta 3000!")
})