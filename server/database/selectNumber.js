var connection = require('./conn.js');

var selectNumber = function(number) {
  var conn = connection();
  conn.connect();

  let query = 'SELECT * FROM luck_numbers WHERE number = (\''+ number + '\')';
  let id = 0;

  conn.query(query, function(err, rows, fields) {
    if (err) throw err;
    if (rows.length > 0) {
        id = rows[0].number;
    }
  });


  return id;
}

module.exports = selectNumber;
