export default function isCardNumberValid(cardNumber) {
  const stringCN = cardNumber.toString();
  let sum = 0;
  const parity = stringCN.length % 2;
  for (let i = 0; i < stringCN.length; i += 1) {
    let digit = Number(stringCN[i]);
    if (i % 2 === parity) {
      digit *= 2;
      if (digit > 9) {
        digit -= 9;
      }
    }
    sum += digit;
  }
  return Number(sum % 10) === 0;
}
