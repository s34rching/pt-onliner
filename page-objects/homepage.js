const BasePage = require('./base-page');

class HomePage extends BasePage {
  constructor() {
    super();
    this.topNavBar = $('ul.b-main-navigation');
    this.currencyInformer = element(by.id('currency-informer'));
    this.weatherInformer = element(by.id('weather-informer'));
  }

  async waitForCurrentExchangeRate(rate) {
    await this.constructor.hasText(this.currencyInformer, rate);
    return this.constructor.isClickable(this.currencyInformer);
  }

  async openCurrencyExchangeRatesPage(rate) {
    await this.waitForCurrentExchangeRate(rate);
    await this.currencyInformer.click();
  }

  async waitForCurrentWeather(temperature) {
    await this.constructor.hasText(this.weatherInformer, temperature);
    return this.constructor.isClickable(this.weatherInformer);
  }

  async openWeatherForecastPage(temperature) {
    await this.waitForCurrentWeather(temperature);
    await this.weatherInformer.click();
  }
}

module.exports = new HomePage();
