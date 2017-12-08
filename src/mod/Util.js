export default function formatNumber(number, decimals, useGroup) {
  let formattedNumber = parseFloat(number).toFixed(decimals);

  if (useGroup) {
    let integerPart = formattedNumber.split('.')[0].split('').reverse().join('');
    integerPart = integerPart.replace(/(\d{3})(?=[^$])/g, '$1,');
    integerPart = integerPart.split('').reverse().join('');

    if (decimals >= 1) {
      const fractionalPart = formattedNumber.split('.')[1];
      formattedNumber = `${integerPart}.${fractionalPart}`;
    } else {
      formattedNumber = integerPart;
    }
  }

  return formattedNumber;
}
