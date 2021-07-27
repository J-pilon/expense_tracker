const mysql      = require('mysql');
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'renaissance',
  password : '1234',
  database : 'expense_tracker'
});

module.exports = connection;