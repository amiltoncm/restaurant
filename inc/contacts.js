var connection = require('./db')

module.exports = {
  render(req, res, error, success) {
    res.render('contacts', {
      title: req.title,
      developer: req.developer,
      developerPage: req.developerPage,
      subTitle: req.subTitle,
      imgBackground: req.imgBackground,
      companyName: req.companyName,
      body: req.body,
      error,
      success
    })
  },

  save(fields) {
    return new Promise((resolve, reject) => {
      connection.query(
        `INSERT INTO contacts
         (name, email, phone_number, message)
         VALUES('${fields.name}', '${fields.email}', '${fields.phoneNumber}', '${fields.message}')
        `,
        (err, results) => {
          if (err) {
            reject(err.message)
          } else {
            resolve(results)
          }
        }
      )
    })
  }
}
