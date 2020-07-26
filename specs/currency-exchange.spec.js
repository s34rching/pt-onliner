const HomePage = require('../page-objects/homepage');
const ExchangeRatesPage = require('../page-objects/currency-exchange-page');
const { getLocationsAmount, defineLocationsMessageOnPopup } = require('../service/location-services');
const random = require('../helpers/get-random-testing-data');
const api = require('../helpers/onliner-api');
const {
  getDirectionWithOrder, getDirectionCurrencies, calculateConversionResult, getFormattedRate,
} = require('../service/currency-exchange-services');
const { composeUrl } = require('../helpers/url-composer');
const { CURRENCY_AMOUNT: { min, max } } = require('../config/scenarios');

describe('Onliner.by - Top Navigation / Informers - Currency Exchange', () => {
  let bestUsdExchangeRate;

  beforeAll(async () => {
    const response = await api.getCurrencyExchangeRates();
    bestUsdExchangeRate = getFormattedRate(JSON.parse(response).amount);
  });

  beforeEach(() => {
    browser.waitForAngularEnabled(false);
  });

  it('User should be able to see the best conversion rate of USD on homepage', async () => {
    await HomePage.constructor.goTo('/');
    expect(await HomePage.getCurrentExchangeRate()).toBe(bestUsdExchangeRate);
  });

  it('User should be able to open currency exchange rates page', async () => {
    await HomePage.constructor.goTo('/');
    await HomePage.openCurrencyExchangeRatesPage();
    expect(await ExchangeRatesPage.bestExchangeRatesLocationsButton.isDisplayed()).toBe(true);
  });

  it('User should be able to convert currencies', async () => {
    const { direction, order } = getDirectionWithOrder();
    const { in: input, out: output } = getDirectionCurrencies(direction, order);
    const randomCurrencyAmount = random.getRandomNumber(min, max);

    await HomePage.constructor.open(composeUrl('currency'));
    await ExchangeRatesPage.waitForConvertOutDataVisible();
    const rate = await ExchangeRatesPage.getDirectionBestExchangeRate(direction, order);

    await ExchangeRatesPage.convertCurrency(input, output, randomCurrencyAmount);
    expect(await ExchangeRatesPage.getConversionResult())
      .toBe(calculateConversionResult(input, output, randomCurrencyAmount, rate, order));
  });

  it('User should be able to open the best rates locations page', async () => {
    await HomePage.constructor.open(composeUrl('currency'));
    const showMapMessage = await ExchangeRatesPage.bestExchangeRatesLocationsButton.getText();
    const popupMessage = defineLocationsMessageOnPopup(getLocationsAmount(showMapMessage));

    await ExchangeRatesPage.openBestExchangeRatesLocations();
    expect(await ExchangeRatesPage.exchangeServicesMapLocations.getText()).toMatch(popupMessage);
  });

  it('User should be able to see the best rates locations pointers on the map', async () => {
    await HomePage.constructor.open(composeUrl('currency'));
    await ExchangeRatesPage.openBestExchangeRatesLocations();
    const exchangeServicesMapPointers = await ExchangeRatesPage.getExchangeServicesMapPointers();
    exchangeServicesMapPointers.forEach((pointer) => expect(pointer.isDisplayed()).toBe(true));
  });

  it('User should be able to see proper amount of locations pointers on the map', async () => {
    await HomePage.constructor.open(composeUrl('currency'));
    const showMapMessage = await ExchangeRatesPage.bestExchangeRatesLocationsButton.getText();
    const locationsAmount = getLocationsAmount(showMapMessage);

    await ExchangeRatesPage.openBestExchangeRatesLocations();
    const exchangeServicesMapPointers = await ExchangeRatesPage.getExchangeServicesMapPointers();
    expect(exchangeServicesMapPointers.length).toEqual(locationsAmount);
  });
});
