import puppeteer from 'puppeteer';

jest.setTimeout(30000);

describe('widget show is card valid or not', () => {
  let browser;
  let page;

  beforeEach(async () => {
    browser = await puppeteer.launch({
      headless: false,
      slowMo: 100,
    });

    page = await browser.newPage();
    await page.goto('http://localhost:8080/');
  });

  test('input has .valid if card number is valid', async () => {
    const form = await page.$('.form-container');
    const input = await form.$('input');
    const button = await form.$('button');

    await input.type('4554103333006322');
    await button.click();

    await page.waitForSelector('.form-container input.valid');
  });

  test('input has .invalid if card number is invalid', async () => {
    const form = await page.$('.form-container');
    const input = await form.$('input');
    const button = await form.$('button');

    await input.type('45541033330063223232');
    await button.click();

    await page.waitForSelector('.form-container input.invalid');
  });

  afterEach(async () => {
    await browser.close();
  });
});
