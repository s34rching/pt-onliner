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
    this.nextDaysBlock = $('.b-weather-next');
    this.nextDateDaytimeTemperatureRange = (day) => {
      if (day.dayTemperature.max === null) {
        return element(by.xpath(`//li[contains(@class, 'b-weather-next__day') and descendant::dt[text()] = '${day.dateTextDayOfWeek}']`))
          .all(by.cssContainingText('p.b-weather-next__temp', `${day.dayTemperature.min}`))
          .first();
      }
      return element(by.xpath(`//li[contains(@class, 'b-weather-next__day') and descendant::dt[text()] = '${day.dateTextDayOfWeek}']`))
        .all(by.cssContainingText('p.b-weather-next__temp', `${day.dayTemperature.min}...${day.dayTemperature.max}`))
        .first();
    };
  }

  openCitiesOptionsDropdown() {
    this.constructor.isVisible(this.currentCityButton);
    this.currentCityButton.click();
  }

  changeCity(cityId) {
    this.constructor.isClickable(this.cityOption(cityId));
    this.cityOption(cityId).click();
  }

  waitForCityChangedTo(cityName) {
    this.constructor.isVisible(this.currentCityButtonByName(cityName));
  }

  getNextDateDaytimeTemperatureRanges(days) {
    return Promise.all(days.map(this.nextDateDaytimeTemperatureRange));
  }
}

module.exports = new WeatherForecastPage();
