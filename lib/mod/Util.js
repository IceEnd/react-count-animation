'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = formatNumber;
function formatNumber(number, decimals, useGroup) {
  var str = parseFloat(number).toFixed(decimals);
  if (useGroup && decimals >= 1) {
    var array1 = str.split('.')[0].split('').reverse().join('');
    var array2 = str.split('.')[1];
    array1 = array1.replace(/(\d{3})(?=[^$])/g, '$1,');
    array1 = array1.split('').reverse().join('');
    str = array1 + '.' + array2;
  }
  return str;
}