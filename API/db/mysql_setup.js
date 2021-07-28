const mysql = require('mysql');

const pool = mysql.createPool({
  host     : 'localhost',
  user     : 'renaissance',
  password : '1234',
  database : 'expense_tracker'
});

module.exports = pool;