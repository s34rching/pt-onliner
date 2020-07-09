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
    this.convertCurrenciesDropdownOptionByValue = (dropdown, value) => ((dropdown === 'in')
      ? this.convertInCurrenciesDropdown.element(by.cssContainingText('option', value))
      : this.convertOutCurrenciesDropdown.element(by.cssContainingText('option', value)));
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

  async waitForConvertOutDataVisible() {
    await this.constructor.isVisible(this.convertOutData);
  }

  async openBestExchangeRatesLocations() {
    await this.constructor.scrollElementIntoView(this.topNavbar);
    await this.waitForConvertOutDataVisible();
    await this.bestExchangeRatesLocationsButton.click();
    await this.waitForMapIsLoaded();
  }

  async waitForMapIsLoaded() {
    await this.constructor.isVisible(this.exchangeServicesMap);
  }

  async chooseCurrencyToConvert(dropdown, value) {
    if (dropdown === 'in') {
      await this.convertInCurrenciesDropdown.click();
    } else {
      await this.convertOutCurrenciesDropdown.click();
    }
    await this.constructor.isVisible(this.convertCurrenciesDropdownOptionByValue(dropdown, value));
    await this.convertCurrenciesDropdownOptionByValue(dropdown, value).click();
  }

  async enterCurrencyAmountToConvert(amount) {
    await this.convertInAmount.clear().sendKeys(amount);
  }

  async convertCurrency(currencyIn, currencyOut, amount) {
    await this.chooseCurrencyToConvert('in', currencyIn);
    await this.chooseCurrencyToConvert('out', currencyOut);
    await this.enterCurrencyAmountToConvert(amount);
  }

  async getDirectionBestExchangeRate(direction, order) {
    return this.bestExchangeRateByCurrencyDirection(direction, order)
      .getAttribute('data-title')
      .then((value) => value.match(/\d+,\d+/)[0]);
  }

  async getConversionResult() {
    const conversionResult = await this.conversionResult.getText();

    return parseFloat(conversionResult.replace(',', '.').replace(' ', ''))
      .toFixed(2);
  }
}

module.exports = new ExchangeRatesPage();
