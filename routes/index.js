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

router.get('/contacts', function(req, res, next){
  
  res.render('contacts', {
    title: titleProject,
  })
  
})

router.get('/menus', function(req, res, next){
  
  res.render('menus', {
    title: titleProject,
  })

})

router.get('/reservations', function(req, res, next){
  
  res.render('reservations', {
    title: titleProject,
  })

})

router.get('/services', function(req, res, next){
  
  res.render('services', {
    title: titleProject,
  })

})

module.exports = router;
