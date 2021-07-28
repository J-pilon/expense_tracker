var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const pool = require('./db/mysql_setup')

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.get('/api/expenses', (req, res) => {
  pool.getConnection((err, connection) => {
    if(err) throw err;
    console.log('connected as id ' + connection.threadId);

    connection.query('SELECT * FROM expenses', (err, rows) => {
      connection.release();
      if(err) throw err;

      res.send(rows);
      console.log('The data from the expenses table \n', rows)
    })
  })
})

app.post('/api/expenses', (req, res) => {
  console.log('params@', req.params);

  // pool.getConnection((err, connection) => {
  //   if(err) throw err;
  //   console.log('connected as id ' + connection.threadId);
  //   let sql = 
  //   connection.query()
  // })
})

app.listen(3001, () => {
  console.log('server is listening on port 3001');
})