var mysql = require('mysql');

var conn = function(){
  var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'admin',
    database : 'promo'
  });

  return connection;
}

module.exports = conn;
