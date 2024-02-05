export const cardIssuers = [
  {
    name: 'Visa',
    pattern: /^4\d*$/,
  },
  {
    name: 'MasterCard',
    pattern: /^(5[1-5]|222[1-9]|2[3-6]|27[0-1]|2720)\d*$/,
  },
  {
    name: 'American-Express',
    pattern: /^3[47]\d*$/,
  },
  {
    name: 'Diners-Club',
    pattern: /^3(0[0-5]|[689])\d*$/,
  },
  {
    name: 'Discover',
    pattern: /^(6011|65|64[4-9])\d*$/,
  },
  {
    name: 'JCB',
    pattern: /^(2131|1800|35)\d*$/,
  },
  {
    name: 'Maestro',
    pattern: /^(5[0678]|6304|6390|6054|6271|67)\d*$/,
  },
  {
    name: 'MIR',
    pattern: /^22\d*$/,
  },
];

export function getCardIssuer(cardNumber) {
  let cardIssuer;
  for (const issuer of cardIssuers) {
    if (issuer.pattern.test(cardNumber)) {
      cardIssuer = issuer;
      break;
    }
  }
  return cardIssuer;
}
