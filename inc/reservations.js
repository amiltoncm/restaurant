var connection = require('./db')

module.exports = {
  render(req, res, error, success) {
    res.render('reservations', {
      title: req.title,
      subTitle: req.subTitle,
      imgBackground: req.imgBackground,
      body: req.body,
      error,
      success
    })
  },

  save(fields) {
    return new Promise((resolve, reject) => {
      /**
       * Date formatation.
       */
      const date = fields.date.split('/')

      fields.date = `${date[2]}-${date[1]}-${date[0]}`

      connection.query(
        `INSERT INTO reservations 
         (name, email, people, date, time)
         VALUES('${fields.name}', '${fields.email}', ${fields.people}, '${fields.date}', '${fields.time}')
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
