const _ = require('lodash');
const BasePage = require('./base-page');

class WeatherForecastPage extends BasePage {
  constructor() {
    super();
    this.currentCityButton = $('a.js-weather-city');
    this.currentCityButtonByName = (cityName) => element(by.cssContainingText('a.js-weather-city', cityName));
    this.cityOption = (cityId) => $(`a[data-wmoid="${cityId}"]`);
    this.currentWeather = $('.b-weather-today__actual');
    this.currentTemperature = this.currentWeather.$('.grad').$('span.value');
    this.generalWeatherState = this.currentWeather.element(by.tagName('dd'));
    this.nextDayWeatherCard = (day) => element(by.xpath(`//li[contains(@class, 'b-weather-next__day') and descendant::dt[text()] = '${day.dateTextDayOfWeek}']`));
    this.nextDateDaytimeTemperatureRange = (day) => {
      const searchText = (_.isNull(day.dayTemperature.max))
        ? `${day.dayTemperature.min}`
        : `${day.dayTemperature.min}...${day.dayTemperature.max}`;

      return this.nextDayWeatherCard(day)
        .all(by.cssContainingText('p.b-weather-next__temp', searchText))
        .first();
    };
  }

  async openCitiesOptionsDropdown() {
    await this.constructor.isVisible(this.currentCityButton);
    await this.currentCityButton.click();
  }

  async changeCity(cityId) {
    await this.constructor.isClickable(this.cityOption(cityId));
    await this.cityOption(cityId).click();
  }

  async waitForCityChangedTo(cityName) {
    await this.constructor.isVisible(this.currentCityButtonByName(cityName));
  }

  async getNextDateDaytimeTemperatureRanges(days) {
    return Promise.all(days.map(this.nextDateDaytimeTemperatureRange));
  }

  async getCurrentTemperature() {
    await this.constructor.isVisible(this.currentTemperature);
    return this.currentTemperature.getText();
  }

  async waitGeneralWeatherState(state) {
    await this.constructor.hasText(this.generalWeatherState, state);
    return this.constructor.isVisible(this.generalWeatherState);
  }
}

module.exports = new WeatherForecastPage();
