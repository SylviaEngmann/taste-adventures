require("dotenv").config();
const mysql = require("mysql");
const fs = require("fs");

const DB_HOST = process.env.DB_HOST;
const DB_USER = process.env.DB_USER;
const DB_PASS = process.env.DB_PASS;
const DB_NAME = process.env.DB_NAME;

//change your personal password or username here
const con = mysql.createConnection({
  host: DB_HOST || "127.0.0.1",
  user: DB_USER || "root1",
  password: DB_PASS || "root",
  database: DB_NAME || "tasteadventure",
  multipleStatements: true
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");

  let sql = fs.readFileSync(__dirname+"/db.sql").toString();
  con.query(sql, function(err, result) {
    if (err) throw err;
    console.log("Tables creation was successful!");

    console.log("Closing...");
  });

  con.end();
});


