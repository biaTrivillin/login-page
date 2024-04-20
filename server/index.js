const express = require("express");
const server = express();
const mysql = require("mysql2");

const db = mysql.createPool({
    host: "localhost",
    user: "admin",
    password: "meubanco123",
    database: ""
})

server.get("/", (req, res) => {
    res.send("hello")
})

server.listen(3000, () => {
    console.log("Server iniciado e rodando na porta 3000!")
})