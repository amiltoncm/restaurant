/**
 * Get the client.
 */
const mysql = require('mysql2');
 
/**
 * Create the connection to database.
 */ 
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'restaurante',
  password: '@I19c11m13*/'
});

module.exports = connection;