var connection = require('./conn.js');

var insertPin = function(pin) {
  var conn = connection();

  let query = 'SELECT * FROM pins WHERE pin_value = (\''+ pin + '\')';

  conn.query(query, function(err, rows, fields) {
    if (rows.length == 0) {
      let query2 = 'INSERT INTO pins (pin_value) VALUES (\''+ pin + '\')';
      conn.query(query2, function(err, result) {
        if (err) throw err;
        console.log('Pin inserido com sucesso');        
      });
    }
  });
}

module.exports = insertPin;
