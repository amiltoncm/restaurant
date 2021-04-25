var express = require('express')
var router = express.Router()
var menus = require('./../inc/menus')
var contacts = require('./../inc/contacts')
var reservations = require('./../inc/reservations')

/**
 * Constants default. { Devem buscar as informações do banco de dados.}
 */
const companyName = 'AMRestaurant'

const projectTitle = 'AMRest'
const developer = 'AMX Sistemas'
const developerPage = 'https://www.amxsistemas.com.br'

const subTitleContacts = 'Entre em contato'
const subTitleMenus = 'Nosso menu'
const subTitleReservations = 'Faça sua reserva'
const subTitleServices = 'Nossos serviços'

const currencySymbol = 'R$'

/**
 * Images background.
 */
const imgPath = 'images/backgrounds/'
const imgHeaderIndex = 'index.jpg'
const imgHeaderContacts = 'contacts.jpg'
const imgHeaderMenus = 'menus.jpg'
const imgHeaderReservations = 'reservations.jpg'
const imgHeaderServices = 'services.jpg'

/**
 *  --- Index ------------------------------------------------------------------
 */
router.get('/', function (req, res, next) {
  menus.getMenus().then(results => {
    res.render('index', {
      title: projectTitle,
      developer: developer,
      developerPage: developerPage,
      companyName: companyName,
      imgBackground: imgPath + imgHeaderIndex,
      currencySymbol,
      menus: results
    })
  })
})

/**
 *  --- Contacts ---------------------------------------------------------------
 */
router.get('/contacts', function (req, res, next) {
  req.title = projectTitle
  req.subTitle = subTitleContacts
  req.developer = developer
  req.developerPage = developerPage
  req.companyName = companyName
  req.imgBackground = imgPath + imgHeaderContacts

  contacts.render(req, res)
})

router.post('/contacts', function (req, res, next) {
  req.title = projectTitle
  req.subTitle = subTitleContacts
  req.developer = developer
  req.developerPage = developerPage
  req.companyName = companyName
  req.imgBackground = imgPath + imgHeaderContacts

  /**
   * Fields validations.
   */
  if (!req.body.name) {
    contacts.render(req, res, 'Digite o nome!')
  } else if (!req.body.phoneNumber) {
    contacts.render(req, res, 'Digite o telefone!')
  } else if (!req.body.email) {
    contacts.render(req, res, 'Digite o e-mail!')
  } else if (!req.body.message) {
    contacts.render(req, res, 'Digite a mensagem!')
  } else {
    contacts
      .save(req.body)
      .then(results => {
        req.body = {}
        contacts.render(req, res, null, 'Contato enviado com sucesso!')
      })
      .catch(err => {
        contacts.render(req, res, err)
      })
  }
})

/**
 *  --- Menus ------------------------------------------------------------------
 */
router.get('/menus', function (req, res, next) {
  menus.getMenus().then(results => {
    res.render('menus', {
      title: projectTitle,
      subTitle: subTitleMenus,
      developer: developer,
      developerPage: developerPage,
      companyName: companyName,
      imgBackground: imgPath + imgHeaderMenus,
      currencySymbol,
      menus: results
    })
  })
})

/**
 *  --- Reservations -----------------------------------------------------------
 */
router.get('/reservations', function (req, res, next) {
  req.title = projectTitle
  req.developer = developer
  req.developerPage = developerPage
  req.subTitle = subTitleReservations
  req.companyName = companyName
  req.imgBackground = imgPath + imgHeaderReservations

  reservations.render(req, res)
})

router.post('/reservations', function (req, res, next) {
  req.title = projectTitle
  req.developer = developer
  req.developerPage = developerPage
  req.companyName = companyName
  req.subTitle = subTitleReservations
  req.imgBackground = imgPath + imgHeaderReservations

  /**
   * Fields validations.
   */
  if (!req.body.name) {
    reservations.render(req, res, 'Digite o nome!')
  } else if (!req.body.email) {
    reservations.render(req, res, 'Digite o e-mail!')
  } else if (!req.body.people) {
    reservations.render(req, res, 'Digite a quantidade de pessoas!')
  } else if (!req.body.date) {
    reservations.render(req, res, 'Digite a data!')
  } else if (!req.body.time) {
    reservations.render(req, res, 'Digite o horário!')
  } else {
    reservations
      .save(req.body)
      .then(results => {
        req.body = {}
        reservations.render(req, res, null, 'Reserva realizada com sucesso!')
      })
      .catch(err => {
        reservations.render(req, res, err)
      })
  }
})

/**
 *  --- Services ---------------------------------------------------------------
 */
router.get('/services', function (req, res, next) {
  res.render('services', {
    title: projectTitle,
    developer: developer,
    developerPage: developerPage,
    subTitle: subTitleServices,
    companyName: companyName,
    imgBackground: imgPath + imgHeaderServices
  })
})

module.exports = router
