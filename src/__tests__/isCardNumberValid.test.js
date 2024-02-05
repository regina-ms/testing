import isCardNumberValid from '../cardValidateWidget/isCardNumberValid';

test('card number is valid', () => {
  expect(isCardNumberValid(4554103333006322)).toBeTruthy();
});

test('card number is invalid', () => {
  expect(isCardNumberValid(123456789101112)).toBeFalsy();
});
