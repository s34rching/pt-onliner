const HomePage = require('../page-objects/homepage');
const ExchangeRatesPage = require('../page-objects/currency-exchange-page');
const { getLocationsAmount, defineLocationsMessageOnPopup } = require('../service/location-services');
const random = require('../helpers/get-random-testing-data');
const api = require('../helpers/onliner-api');
const { getDirectionWithOrder, getDirectionCurrencies, calculateConversionResult } = require('../service/currency-exchange-services');
const { composeUrl } = require('../helpers/url-composer');

describe('Onliner.by - Top Navigation / Informers - Currency Exchange', () => {
  let bestUsdExchangeRate;

  beforeAll((done) => {
    api.getCurrencyExchangeRates().then((res) => {
      bestUsdExchangeRate = JSON.parse(res).amount;
      done();
    });
  });

  beforeEach(() => {
    browser.waitForAngularEnabled(false);
  });

  it('User should be able to see the best conversion rate of USD on homepage', () => {
    HomePage.constructor.goTo('/');
    expect(HomePage.currencyInformer.getText()).toBe(`$ ${bestUsdExchangeRate}`);
  });

  it('User should be able to open currency exchange rates page', () => {
    HomePage.constructor.goTo('/');
    HomePage.openCurrencyExchangeRatesPage();
    expect(ExchangeRatesPage.bestExchangeRatesLocationsButton.isDisplayed()).toBe(true);
  });

  it('User should be able to convert currencies', () => {
    const { direction, order } = getDirectionWithOrder();
    const { in: input, out: output } = getDirectionCurrencies(direction, order);
    const randomCurrencyAmount = random.getRandomNumber(20, 10000);

    HomePage.constructor.open(composeUrl('currency'));
    ExchangeRatesPage.waitForConvertOutDataVisible();
    ExchangeRatesPage.getDirectionBestExchangeRate(direction, order).then((rate) => {
      ExchangeRatesPage.convertCurrency(input, output, randomCurrencyAmount);
      expect(ExchangeRatesPage.getConversionResult())
        .toBe(calculateConversionResult(input, output, randomCurrencyAmount, rate, order));
    });
  });

  it('User should be able to open the best rates locations page', () => {
    HomePage.constructor.open(composeUrl('currency'));
    ExchangeRatesPage.bestExchangeRatesLocationsButton.getText().then((showMapMessage) => {
      const popupMessage = defineLocationsMessageOnPopup(getLocationsAmount(showMapMessage));

      ExchangeRatesPage.openBestExchangeRatesLocations();
      expect(ExchangeRatesPage.exchangeServicesMapLocations.getText()).toMatch(popupMessage);
    });
  });

  it('User should be able to see the best rates locations pointers on the map', () => {
    HomePage.constructor.open(composeUrl('currency'));
    ExchangeRatesPage.openBestExchangeRatesLocations();
    ExchangeRatesPage.exchangeServicesMapPointers.each((pointer) => {
      expect(pointer.isDisplayed()).toBe(true);
    });
  });

  it('User should be able to see proper amount of locations pointers on the map', () => {
    HomePage.constructor.open(composeUrl('currency'));
    ExchangeRatesPage.bestExchangeRatesLocationsButton.getText().then((showMapMessage) => {
      const locationsAmount = getLocationsAmount(showMapMessage);

      ExchangeRatesPage.openBestExchangeRatesLocations();
      expect(ExchangeRatesPage.exchangeServicesMapPointers.count()).toEqual(locationsAmount);
    });
  });
});
