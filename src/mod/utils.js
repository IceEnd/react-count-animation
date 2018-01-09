export function formatNumber(number, decimals, useGroup) {
  let str = parseFloat(number).toFixed(decimals);
  if (useGroup) {
    if (number < 0) { // 数字小于0
      str = str.substring(1, str.length);
    }
    let array1 = str.split('.')[0].split('').reverse().join('');
    array1 = array1.replace(/(\d{3})(?=[^$])/g, '$1,');
    array1 = array1.split('').reverse().join('');

    if (decimals >= 1) {
      const array2 = str.split('.')[1];
      str = `${array1}.${array2}`;
    } else {
      str = array1;
    }
    if (number < 0) {
      str = `-${str}`;
    }
  }
  return str;
}

export function equalObject(x, y) {
  if (x === y) {
    return true;
  }

  if (!(x instanceof Object) || !(y instanceof Object)) {
    return false;
  }

  if (x.constructor !== y.constructor) {
    return false;
  }

  for (const p in x) {
    if (Object.prototype.hasOwnProperty.call(x, p)) {
      if (!Object.prototype.hasOwnProperty.call(y, p)) {
        return false;
      }

      if (x[p] !== y[p]) {
        if (typeof (x[p]) !== 'object') {
          return false;
        }

        if (!equalObject(x[p], y[p])) {
          return false;
        }
      }
    }
  }
  for (const p in y) {
    if (Object.prototype.hasOwnProperty.call(y, p) && !Object.prototype.hasOwnProperty.call(x, p)) {
      return false;
    }
  }
  return true;
}
