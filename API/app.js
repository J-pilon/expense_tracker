const express = require('express');
const path = require('path');
// const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const pool = require('./db/mysql_setup');

var app = express();

// app.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', '*');
//   next();
// });
app.use(logger('tiny'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/expenses', (req, res) => {
  pool.getConnection((err, connection) => {
    if(err) throw err;
    console.log('connected as id ' + connection.threadId);

    connection.query('SELECT * FROM expenses', (err, rows) => {
      connection.release();
      if(err) throw err;

      res.send(rows);
    })
  })
})

app.post('/api/expenses', (req, res) => {
  console.log(req.body);

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