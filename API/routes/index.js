var express = require('express');
var router = express.Router();
const conn = require('../db/mysql_setup')

/* GET home page. */
router.get('/api/expenses', function(req, res, next) {
  conn.query("SELECT * FROM expenses", (err, rows) => {
    if (err) throw err;
    // console.log('the data from the expenses table \n', rows);
    res.json(rows);
    conn.end();
  })
});



module.exports = router;
