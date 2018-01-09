'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.formatNumber = formatNumber;
exports.equalObject = equalObject;
function formatNumber(number, decimals, useGroup) {
  var str = parseFloat(number).toFixed(decimals);
  if (useGroup) {
    if (number < 0) {
      // 数字小于0
      str = str.substring(1, str.length);
    }
    var array1 = str.split('.')[0].split('').reverse().join('');
    array1 = array1.replace(/(\d{3})(?=[^$])/g, '$1,');
    array1 = array1.split('').reverse().join('');

    if (decimals >= 1) {
      var array2 = str.split('.')[1];
      str = array1 + '.' + array2;
    } else {
      str = array1;
    }
    if (number < 0) {
      str = '-' + str;
    }
  }
  return str;
}

function equalObject(x, y) {
  if (x === y) {
    return true;
  }

  if (!(x instanceof Object) || !(y instanceof Object)) {
    return false;
  }

  if (x.constructor !== y.constructor) {
    return false;
  }

  for (var p in x) {
    if (Object.prototype.hasOwnProperty.call(x, p)) {
      if (!Object.prototype.hasOwnProperty.call(y, p)) {
        return false;
      }

      if (x[p] !== y[p]) {
        if (_typeof(x[p]) !== 'object') {
          return false;
        }

        if (!equalObject(x[p], y[p])) {
          return false;
        }
      }
    }
  }
  for (var _p in y) {
    if (Object.prototype.hasOwnProperty.call(y, _p) && !Object.prototype.hasOwnProperty.call(x, _p)) {
      return false;
    }
  }
  return true;
}
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(formatNumber, 'formatNumber', 'src/mod/utils.js');

  __REACT_HOT_LOADER__.register(equalObject, 'equalObject', 'src/mod/utils.js');
}();

;