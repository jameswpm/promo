/**
* Função para gerar a string a partir de um array de hexadecimais
**/

var parseHexString = function (str) {
  var result = [];
  while (str.length >= 2) {
    result.push(parseInt(str.substring(0, 2), 16));

    str = str.substring(2, str.length);
  }

  return result;
}

module.exports = parseHexString;
