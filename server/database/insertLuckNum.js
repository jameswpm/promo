var connection = require('./conn.js');

var insertLuckNum = function(num) {
  var conn = connection();


  let query = 'INSERT INTO luck_numbers (number) VALUES (\''+ num + '\')';

  conn.query(query, function(err, result) {
    if (err) throw err;
    console.log('Número inserido com sucesso');
  });

}

module.exports = insertLuckNum;
