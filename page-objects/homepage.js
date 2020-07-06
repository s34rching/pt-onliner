const BasePage = require('./base-page');

class HomePage extends BasePage {
  constructor() {
    super();
    this.topNavBar = $('ul.b-main-navigation');
    this.currencyInformer = element(by.id('currency-informer'));
    this.weatherInformer = element(by.id('weather-informer'));
    this.currentTemperature = this.weatherInformer.element(by.tagName('span'));
  }

  openCurrencyExchangeRatesPage() {
    this.constructor.scrollElementIntoView(this.topNavBar);
    this.constructor.isClickable(this.currencyInformer);
    this.currencyInformer.click();
  }

  openWeatherForecastPage() {
    this.constructor.isClickable(this.weatherInformer);
    this.weatherInformer.click();
  }
}

module.exports = new HomePage();
