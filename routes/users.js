var connection = require('./../inc/db')
var express = require('express')
var router = express.Router()

/* GET users listing. */
router.get('/', function (req, res, next) {
  connection.query(
    'SELECT id, name, email, password, register FROM users ORDER BY name',
    (err, results) => {
      if (err) {
        res.send(err)
      } else {
        res.send(results)
      }
    }
  )
})

module.exports = router
