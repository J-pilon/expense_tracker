const express = require('express');
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

    const sql = 'INSERT INTO expenses (title, cost_cents, category) VALUES (?, ?, ?);'
    connection.query(sql, [title, cost, category], function (error, results, fields) {
      connection.release();
      if(error) console.log("error: ", error);
      if(results) console.log("results: ", results);
      if(fields) console.log("fields: ", fields);
    });
  })
})

app.delete('/api/expenses/:id', (req, res) => {
  const id = req.params.id;

  pool.getConnection((err, connection) => {
    if(err) throw err;
    console.log('connected as id ' + connection.threadId);

    const sql = 'DELETE FROM expenses WHERE id=?;'
    connection.query(sql, [id], function (error, results, fields) {
      connection.release();
      if(error) console.log("error: ", error);
      if(results) console.log("results: ", results);
      if(fields) console.log("fields: ", fields);
    });
  })
})

app.listen(3001, () => {
  console.log('server is listening on port 3001');
})