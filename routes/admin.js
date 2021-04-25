var express = require('express')
var router = express.Router()

/**
 * Admin - Index ---------------------------------------------------------------
 */
router.get('/', function (req, res, next) {
  res.render('amxadmin/index')
})

/**
 * Admin - Login ---------------------------------------------------------------
 */
router.get('/login', function (req, res, next) {
  res.render('amxadmin/login')
})

router.post('/login', function (req, res, next) {})

/**
 * Admin - Menus ---------------------------------------------------------------
 */
router.get('/menus', function (req, res, next) {
  res.render('amxadmin/menus')
})

/**
 * Admin - Reservations --------------------------------------------------------
 */
router.get('/reservations', function (req, res, next) {
  res.render('amxadmin/reservations', {
    date: {}
  })
})

/**
 * Admin - Contacts ------------------------------------------------------------
 */
router.get('/contacts', function (req, res, next) {
  res.render('amxadmin/contacts')
})

/**
 * Admin - Users ---------------------------------------------------------------
 */
router.get('/users', function (req, res, next) {
  res.render('amxadmin/users')
})

/**
 * Admin - Emails --------------------------------------------------------------
 */
router.get('/emails', function (req, res, next) {
  res.render('amxadmin/emails')
})

module.exports = router
