export default function formatNumber(number, decimals, useGroup) {
  let str = parseFloat(number).toFixed(decimals);
  if (useGroup && decimals >= 1) {
    let array1 = str.split('.')[0].split('').reverse().join('');
    const array2 = str.split('.')[1];
    array1 = array1.replace(/(\d{3})(?=[^$])/g, '$1,');
    array1 = array1.split('').reverse().join('');
    str = `${array1}.${array2}`;
  }
  return str;
}
