/**
* Função para obtenção de hex a partir de string hexadecimal
* Cada dois caracteres da string são inseridos como um hex de 8 bytes no array
**/
var createHexString = function (arr) {
  var result = "";
  var tmp;

  for (var i = 0; i < arr.length; i++) {
    var str = arr[i].toString(16);

    tmp = 2 - str.length + 1;
    str = Array(tmp).join("0") + str;

    result += str;
  }

  return result;
}

module.exports = createHexString;
