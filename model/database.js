require("dotenv").config();
const mysql = require("mysql");
const fs = require("fs");

const DB_HOST = process.env.DB_HOST;
const DB_USER = process.env.DB_USER;
const DB_PASS = process.env.DB_PASS;
const DB_NAME = process.env.DB_NAME;

//change your personal password or username here
const con = mysql.createConnection({
  host: DB_HOST || DB_HOST,
  user: DB_USER || DB_USER,
  password: DB_PASS || DB_PASS,
  database: DB_NAME || DB_NAME,
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


