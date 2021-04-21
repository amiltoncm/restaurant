var express = require('express');
var router = express.Router();
var menus = require('./../inc/menus');
var reservations = require('./../inc/reservations');

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

  menus.getMenus().then(results => {

    res.render('index', { 
      title: titleProject,
      imgBackground: imgPath + imgHeaderIndex,
      menus: results
    });

  })
})

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
  
  menus.getMenus().then(results => {

    res.render('menus', {
      title: titleProject,
      subTitle: 'Sub-título',
      imgBackground: imgPath + imgHeaderMenus,
      menus: results
    })
      
  })

})

/**
 *  --- Reservations ----------------------------------------------------------- 
 */
router.get('/reservations', function(req, res, next){

  req.title = titleProject;
  req.subTitle = 'Sub-título';
  req.imgBackground = imgPath + imgHeaderReservations;
  
  reservations.render(req, res);

})

router.post('/reservations', function(req, res, next){
  
  req.title = titleProject;
  req.subTitle = 'Sub-título';
  req.imgBackground = imgPath + imgHeaderReservations;  
  
  if (!req.body.name){
    reservations.render(req, res, "Digite o nome!");
  } else if (!req.body.email) {
    reservations.render(req, res, "Digite o e-mail!");
  } else if (!req.body.people) {
    reservations.render(req, res, "Digite a quantidade de pessoas!");
  } else if (!req.body.date) {
    reservations.render(req, res, "Digite a data!");
  } else if (!req.body.time){
    reservations.render(req, res, "Digite o horário!");
  } else {
    
  }
  
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
