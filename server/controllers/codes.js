const crypto = require('crypto-js');
const createHexString = require('../utils/createHexString.js');
const parseHexString = require('../utils/parseHexString.js');
const reverse = require('../utils/reverse.js');
const padding = require('../utils/padding.js');
//database
const insertPin = require('../database/insertPin.js');
const insertLuckNum = require('../database/insertLuckNum.js');
const selectNumber = require('../database/selectNumber.js');

exports.getCode = function (req, res) {

  let code = req.params.code;


  insertPin(code);


  let key = "a%6X@P1";
  let code_array = parseHexString(code);
  let reversed_code = reverse(code_array);
  let encrypted = createHexString(reversed_code);

  let decrypted = crypto.DES.decrypt (
      crypto.lib.CipherParams.create (
        { ciphertext: crypto.enc.Hex.parse(encrypted) }
      ),
      crypto.enc.Utf8.parse(key),
      { mode: crypto.mode.ECB, padding: crypto.pad.ZeroPadding }
  ).toString();

  let int_code = parseInt(decrypted, 16).toString();

  let final_code = int_code.length == 17 ? int_code : padding(int_code);

  let m = 2;
  let total = 0;
  for (j = final_code.length - 2; j >= 0 ; j--) {
    total += parseInt(final_code[j]) * m;
    if (m == 9) {
      m = 2;
    } else {
      m++;
    }
  }

  let mod = total % 11;
  let result = 11 - mod;
  let dv = result == 10 || result == 11 ? 0 : result;

  let qtd_num_sorte = final_code.substr(13, 3);
  let luck_numbers = [];

  for (k = 1; k <= qtd_num_sorte; k++) {
    let num = Math.floor(Math.random()*(99999-0+1)+0);
    //para cada número gerado é preciso verificar se não existe na base. Caso exista, deve gerar novamente
    while (selectNumber(num) != 0) {
      num = Math.floor(Math.random()*(99999-0+1)+0);
    }
    insertLuckNum(num);
    luck_numbers.push(num);
  }

  res.send([{
    "Cod.Loja": final_code.substr(0, 4),
    "Num.PDV": final_code.substr(4, 3),
    "Cupom.Fiscal": final_code.substr(7, 6),
    "qtd.NumSorte": final_code.substr(13, 3),
    "dv": dv,
    "luck": JSON.stringify(luck_numbers)
  }]);
}
