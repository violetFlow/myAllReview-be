var express = require('express');
const app = require('../app');
const db = require('../db')
var router = express.Router();


router.get('/:id', (req, res, next) => {
  db.query('SELECT * FROM Account WHERE accountid = $1', [req.params.id], (err, result) =>{
    if (err) {
      return next(err)
    }
    res.send(result.rows[0])
  })
})

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
