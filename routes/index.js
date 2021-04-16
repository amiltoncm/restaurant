var connection = require('./../inc/db'); 
var express = require('express');
const { connect } = require('./../inc/db');
var router = express.Router();

/**
 * Constants default.
 */
const titleProject = 'AMRestaurant';

/* GET home page. */
router.get('/', function(req, res, next) {
  
  connection.query(`SELECT id, title, description, price, photo, register 
                    FROM menus ORDER BY title`, (err, results) => {
                      
                      if (err) {
                        console.log(err);
                      }
                      
                      res.render('index', { 
                        title: titleProject,
                        menus: results
                      });
                    }
                  );
});

module.exports = router;
