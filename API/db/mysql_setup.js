const mysql = require('mysql');

const pool = mysql.createPool({
  connectionLimit: 2,
  host : 'localhost',
  user : 'renaissance',
  password : '1234',
  database : 'expense_tracker'
});

module.exports = pool;