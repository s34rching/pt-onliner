const _ = require('lodash');
const HomePage = require('../page-objects/homepage');
const WeatherForecastPage = require('../page-objects/weather-forecast-page');
const { cities } = require('../fixtures/cities');
const api = require('../helpers/onliner-api');
const { composeUrl } = require('../helpers/url-composer');
const { getFormattedTemperature } = require('../service/weather-services');

describe('Onliner.by - Top Navigation / Informers - Weather Forecast', () => {
  const userCity = _.sample(_.without(cities, { name: 'Минск' }));
  let forecast;
  let userCityForecast;
  let currentTemperature;

  beforeAll((done) => {
    api.getWeather()
      .then((res) => {
        forecast = JSON.parse(res);
        currentTemperature = getFormattedTemperature(forecast.now.temperature);
        return api.getWeather(userCity.id);
      })
      .then((res) => {
        userCityForecast = JSON.parse(res);
        done();
      });
  });

  beforeEach(() => {
    browser.waitForAngularEnabled(false);
  });

  it("User should be able to see current temperature in user's default city on homepage", () => {
    HomePage.constructor.goTo('/');
    expect(HomePage.weatherInformer.getText()).toBe(currentTemperature);
  });

  it('User should be able open weather forecast page', () => {
    HomePage.constructor.goTo('/');
    HomePage.openWeatherForecastPage();
    expect(WeatherForecastPage.currentTemperature.getText()).toBe(forecast.now.temperature);
  });

  it('User should be able to see 5-days forecast', () => {
    HomePage.constructor.open(composeUrl('weather'));
    WeatherForecastPage.constructor.scrollElementIntoView(WeatherForecastPage.nextDaysBlock);
    WeatherForecastPage.getNextDateDaytimeTemperatureRanges(_.values(forecast.forecast))
      .then((el) => el.length);
  });

  it('User should be able to change their city to see other city weather', () => {
    HomePage.constructor.open(composeUrl('weather'));
    WeatherForecastPage.openCitiesOptionsDropdown();
    WeatherForecastPage.changeCity(userCity.id);
    WeatherForecastPage.waitForCityChangedTo(userCityForecast.city);
    expect(WeatherForecastPage.generalWeatherState.getText())
      .toContain(userCityForecast.now.phenomena);
  });
});
