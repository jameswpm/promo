var connection = require('./conn.js');

var selectPin = function(pin) {
  var conn = connection();


  let query = 'SELECT * FROM pins WHERE pin_value = (\''+ pin + '\')';
  var returned;

  conn.query(query, function(err, rows, fields) {
    returned = rows;
  });
  return returned;
}

module.exports = selectPin;
