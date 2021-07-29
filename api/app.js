const express = require('express');
const path = require('path');
const logger = require('morgan');
const cors = require('cors');
const pool = require('./db/mysql_setup');

var app = express();

app.use(logger('tiny'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

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
  const title = req.body.name;
  const cost = parseInt(req.body.cost);
  const category = req.body.category;

  console.log("#", title, cost, category);

  pool.getConnection((err, connection) => {
    if(err) throw err;
    console.log('connected as id ' + connection.threadId);

    let sql = 'INSERT INTO expenses (title, cost_cents, category) VALUES (?, ?, ?);'
    connection.query(sql, [title, cost, category], function (error, results, fields) {
      if(error) console.log(error);
      if(results) console.log(results);
      if(fields) console.log(fields)
    });
  })
})

app.listen(3001, () => {
  console.log('server is listening on port 3001');
})