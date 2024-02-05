import { getCardIssuer } from '../cardValidateWidget/getCardIssuer';

test.each([
  [4554103333006322, 'Visa'],
  [5369884703047176, 'MasterCard'],
  [374728928723497, 'American-Express'],
  [36953438498568, 'Diners-Club'],
  [6011312127462276, 'Discover'],
  [3535929238452955, 'JCB'],
  [5038820810015913, 'Maestro'],
  [2200700489037043, 'MIR'],
])('card with number %i is %s', (number, issuer) => {
  const issuerName = getCardIssuer(number).name;
  expect(issuerName).toBe(issuer);
});
