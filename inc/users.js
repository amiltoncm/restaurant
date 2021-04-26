var connection = require('./db')

module.exports = {
  render(req, res, error) {
    res.render('amxadmin/login', {
      body: req.body,
      error
    })
  },

  login(email, password) {
    return new Promise((resolve, reject) => {
      connection.query(`
        SELECT id, name, email, password
        FROM users
        WHERE email = '${email}'
        AND password = '${password}'
      `)
      if (!results.length > 0) {
        reject('Usuário ou senha incorretos!')
      } else {
        let row = results[0]
        resolve(row)
      }
    })
  }
}
