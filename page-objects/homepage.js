const BasePage = require('./base-page');

class HomePage extends BasePage {
  constructor() {
    super();
    this.topNavBar = $('ul.b-main-navigation');
    this.currencyInformer = element(by.id('currency-informer'));
    this.weatherInformer = element(by.id('weather-informer'));
  }

  async openCurrencyExchangeRatesPage() {
    await this.constructor.scrollElementIntoView(this.topNavBar);
    await this.constructor.isClickable(this.currencyInformer);
    await this.currencyInformer.click();
  }

  async openWeatherForecastPage() {
    await this.constructor.isClickable(this.weatherInformer);
    await this.weatherInformer.click();
  }
}

module.exports = new HomePage();
