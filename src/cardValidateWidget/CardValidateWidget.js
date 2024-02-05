import { getCardIssuer, cardIssuers } from './getCardIssuer';
import cardIcons from './cardIcons';
import isCardNumberValid from './isCardNumberValid';

export default class CardValidateWidget {
  constructor(parentEl) {
    this.parentEl = parentEl;

    this.el = document.createElement('div');
    this.el.classList.add('card-validate-widget');

    this.parentEl.append(this.el);

    this.data = cardIssuers;
    this.cardIcons = cardIcons;

    this.onInput = this.onInput.bind(this);
    this.onSubmit = CardValidateWidget.onSubmit.bind(this);
  }

  onInput(e) {
    const { value } = e.target;
    e.target.classList.remove('invalid', 'valid');
    const card = getCardIssuer(value);
    const activeCard = this.el.querySelector('.active');

    if (!card && activeCard) {
      activeCard.classList.remove('active');
    } else if (card && !activeCard) {
      const activeCardName = this.data.find((el) => el.pattern.test(value)).name;
      this.el.querySelector(`.${activeCardName}`).classList.add('active');
    }
  }

  static onSubmit(e) {
    e.preventDefault();
    const { value } = e.target.cardNumber;

    if (isCardNumberValid(value)) {
      e.target.cardNumber.classList.remove('invalid');
      e.target.cardNumber.classList.add('valid');
    } else {
      e.target.cardNumber.classList.remove('valid');
      e.target.cardNumber.classList.add('invalid');
    }
  }

  renderIcons() {
    const iconsContainer = document.createElement('div');
    iconsContainer.classList.add('card-icons');

    this.cardIcons.forEach((el) => {
      const card = document.createElement('img');
      card.classList.add(`${el.name}`);
      card.setAttribute('src', el.icon);
      iconsContainer.append(card);
    });
    this.el.append(iconsContainer);
  }

  renderForm() {
    const formContainer = document.createElement('div');
    formContainer.classList.add('form-container');

    const form = document.createElement('form');
    form.addEventListener('submit', this.onSubmit);

    const button = document.createElement('button');
    button.textContent = 'click to validate';

    const input = document.createElement('input');
    input.setAttribute('name', 'cardNumber');
    input.addEventListener('input', this.onInput);

    form.append(input, button);

    formContainer.append(form);

    this.el.append(formContainer);
  }
}
