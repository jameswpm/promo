/**
* Insere paddings de zero a esquerda quando a string númerica é menor que 17
**/

var padding = function (code) {
  while (code.length < 17) {
    code = 0 + code;
  }
  return code;
}

module.exports = padding;
