const BasePage = require('./base-page');

class ExchangeRatesPage extends BasePage {
  constructor() {
    super();
    this.convertInData = element(by.id('converter-in'));
    this.convertInCurrenciesDropdown = this.convertInData.element(by.id('currency-in'));
    this.convertInAmount = this.convertInData.element(by.id('amount-in'));
    this.convertOutData = element(by.id('converter-out'));
    this.convertOutCurrenciesDropdown = this.convertOutData.element(by.id('currency-out'));
    this.conversionResult = this.convertOutData.$('b.js-cur-result');
    this.convertCurrenciesDropdownOptionByValue = (dropdown, value) => {
      if (dropdown === 'in') {
        return this.convertInCurrenciesDropdown.element(by.cssContainingText('option', value));
      }
      return this.convertOutCurrenciesDropdown.element(by.cssContainingText('option', value));
    };
    this.bestExchangeRatesLocationsLink = this.convertOutData.all(by.tagName('p')).last();
    this.bestExchangeRateDirection = (direction) => this.bestExchangeRatesLocationsLink.$$(`a[data-direction="${direction}"]`);
    this.bestExchangeRatesLocationsButton = this.bestExchangeRatesLocationsLink.$$('a').first();
    this.bestExchangeRateByCurrencyDirection = (direction, order) => ((order === 'direct')
      ? this.bestExchangeRateDirection(direction).first()
      : this.bestExchangeRateDirection(direction).last());
    this.exchangeServicesMap = $('div.b-currency-map-i');
    this.exchangeServicesMapPointers = this.exchangeServicesMap.$$('ymaps.ymaps-image');
    this.exchangeServicesMapLocations = this.exchangeServicesMap.element(by.tagName('em'));
  }

  waitForConvertOutDataVisible() {
    this.constructor.isVisible(this.convertOutData);
  }

  openBestExchangeRatesLocations() {
    this.constructor.scrollElementIntoView(this.topNavbar);
    this.waitForConvertOutDataVisible();
    this.bestExchangeRatesLocationsButton.click();
    this.waitForMapIsLoaded();
  }

  waitForMapIsLoaded() {
    this.constructor.isVisible(this.exchangeServicesMap);
  }

  chooseCurrencyToConvert(dropdown, value) {
    if (dropdown === 'in') {
      this.convertInCurrenciesDropdown.click();
    } else {
      this.convertOutCurrenciesDropdown.click();
    }
    this.constructor.isVisible(this.convertCurrenciesDropdownOptionByValue(dropdown, value));
    this.convertCurrenciesDropdownOptionByValue(dropdown, value).click();
  }

  enterCurrencyAmountToConvert(amount) {
    this.convertInAmount
      .clear()
      .sendKeys(amount);
  }

  convertCurrency(currencyIn, currencyOut, amount) {
    this.chooseCurrencyToConvert('in', currencyIn);
    this.chooseCurrencyToConvert('out', currencyOut);
    this.enterCurrencyAmountToConvert(amount);
  }

  getDirectionBestExchangeRate(direction, order) {
    return this.bestExchangeRateByCurrencyDirection(direction, order)
      .getAttribute('data-title')
      .then((value) => value.match(/\d+,\d+/)[0]);
  }

  getConversionResult() {
    return this.conversionResult.getText().then((result) => parseFloat(result.replace(',', '.').replace(' ', ''))
      .toFixed(2));
  }
}

module.exports = new ExchangeRatesPage();
