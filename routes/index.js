var connection = require('./../inc/db'); 
var express = require('express');
const { connect } = require('./../inc/db');
var router = express.Router();

/**
 * Constants default. { Devem buscar as informações do banco de dados.}
 */
const titleProject = 'AMRestaurant';

/**
 * Images background.
 */

const imgPath = 'images/backgrounds/';
const imgHeaderIndex = 'index.jpg'; 
const imgHeaderContacts = 'contacts.jpg';
const imgHeaderMenus = 'menus.jpg'; 
const imgHeaderReservations = 'reservations.jpg'; 
const imgHeaderServices = 'services.jpg'; 

/**
 *  --- Index ------------------------------------------------------------------
 */
router.get('/', function(req, res, next) {
  
  connection.query(`SELECT id, title, description, price, photo, register 
                    FROM menus ORDER BY title`, (err, results) => {
                      
                      if (err) {
                        console.log(err);
                      }
                      
                      res.render('index', { 
                        title: titleProject,
                        imgBackground: imgPath + imgHeaderIndex,
                        menus: results
                      });
                    }
                  );
});

/**
 *  --- Contacts ---------------------------------------------------------------
 */
router.get('/contacts', function(req, res, next){
  
  res.render('contacts', {
    title: titleProject,
    subTitle: 'Sub-título',
    imgBackground: imgPath + imgHeaderContacts,
  })
  
})

/**
 *  --- Menus ------------------------------------------------------------------
 */
router.get('/menus', function(req, res, next){
  
  res.render('menus', {
    title: titleProject,
    subTitle: 'Sub-título',
    imgBackground: imgPath + imgHeaderMenus,
  })

})

/**
 *  --- Reservations ----------------------------------------------------------- 
 */
router.get('/reservations', function(req, res, next){
  
  res.render('reservations', {
    title: titleProject,
    subTitle: 'Sub-título',
    imgBackground: imgPath + imgHeaderReservations,
  })

})

/**
 *  --- Services --------------------------------------------------------------- 
 */
router.get('/services', function(req, res, next){
  
  res.render('services', {
    title: titleProject,
    subTitle: 'Sub-título',
    imgBackground: imgPath + imgHeaderServices,
  })

})

module.exports = router;
