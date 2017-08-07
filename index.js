const argv = require('yargs').argv;
var crypto = require('crypto-js');

let code = argv.c || '794EFD0D343575AC';
let key = "a%6X@P1";

let codearray = parseHexString(code);
let reversedCode = reverse(codearray);
let encrypted = createHexString(reversedCode)

let decrypted = crypto.DES.decrypt (
    crypto.lib.CipherParams.create (
      { ciphertext: crypto.enc.Hex.parse(encrypted) }
    ),
    crypto.enc.Utf8.parse(key),
    { mode: crypto.mode.ECB, padding: crypto.pad.ZeroPadding }
).toString();

console.log(codearray);
console.log(reversedCode);
console.log(encrypted);
console.log(decrypted);
console.log(parseInt(decrypted, 16));

function parseHexString(str) {
  var result = [];
  while (str.length >= 2) {
    result.push(parseInt(str.substring(0, 2), 16));

    str = str.substring(2, str.length);
  }

  return result;
}

function reverse (arr) {
  var result = [];
  for (var i = 0; i <= arr.length - 1; i+=2) {
    result.push(arr[i + 1])
    result.push(arr[i])
  }

  return result;
}

function createHexString(arr) {
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
