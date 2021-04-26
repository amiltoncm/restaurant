var express = require('express')
var router = express.Router()
var users = require('./../inc/users')

/**
 * Admin - Index ---------------------------------------------------------------
 */
router.get('/', function (req, res, next) {
  res.render('amxadmin/index')
})

/**
 * Admin - Login ---------------------------------------------------------------
 */
router.post('/login', function (req, res, next) {
  if (!req.body.email) {
    users.render(req, res, 'O campo e-mail é obrigatório!')
  } else if (!req.body.password) {
    users.render(req, res, 'O campo senha é obrigatório!')
  } else {
    users
      .login(req.body.email, req.body.password)
      .then(user => {
        req.session.user = user
        res.redirect('/amxadmin')
      })
      .catch(err => {
        users.render(req, res, err.message)
      })
  }
})

router.get('/login', function (req, res, next) {
  users.render(req, res, null)
})

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
