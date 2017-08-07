/**
* Função que inverte o array par a par
**/

var reverse = function (arr) {
  var result = [];
  for (var i = 0; i <= arr.length - 1; i+=2) {
    result.push(arr[i + 1])
    result.push(arr[i])
  }

  return result;
}

module.exports = reverse;
