'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = formatNumber;
function formatNumber(number, decimals, useGroup) {
  var formattedNumber = parseFloat(number).toFixed(decimals);

  if (useGroup) {
    var integerPart = formattedNumber.split('.')[0].split('').reverse().join('');
    integerPart = integerPart.replace(/(\d{3})(?=[^$])/g, '$1,');
    integerPart = integerPart.split('').reverse().join('');

    if (decimals >= 1) {
      var fractionalPart = formattedNumber.split('.')[1];
      formattedNumber = integerPart + '.' + fractionalPart;
    } else {
      formattedNumber = integerPart;
    }
  }

  return formattedNumber;
}