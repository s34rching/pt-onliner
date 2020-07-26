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

  beforeAll(async () => {
    const res = await api.getWeather();
    forecast = JSON.parse(res);
    currentTemperature = getFormattedTemperature(forecast.now.temperature);
    const res1 = await api.getWeather(userCity.id);
    userCityForecast = JSON.parse(res1);
  });

  beforeEach(() => {
    browser.waitForAngularEnabled(false);
  });

  it("User should be able to see current temperature in user's default city on homepage", async () => {
    await HomePage.constructor.goTo('/');
    expect(await HomePage.waitForCurrentWeather(currentTemperature)).toBe(true);
  });

  it('User should be able open weather forecast page', async () => {
    await HomePage.constructor.goTo('/');
    await HomePage.openWeatherForecastPage(currentTemperature);
    expect(await WeatherForecastPage.getCurrentTemperature()).toBe(forecast.now.temperature);
  });

  it('User should be able to see 5-days forecast', async () => {
    await HomePage.constructor.open(composeUrl('weather'));
    WeatherForecastPage.getNextDateDaytimeTemperatureRanges(_.values(forecast.forecast))
      .then((el) => el.length);
  });

  it('User should be able to change their city to see other city weather', async () => {
    await HomePage.constructor.open(composeUrl('weather'));
    await WeatherForecastPage.openCitiesOptionsDropdown();
    await WeatherForecastPage.changeCity(userCity.id);
    await WeatherForecastPage.waitForCityChangedTo(userCityForecast.city);
    expect(await WeatherForecastPage.waitGeneralWeatherState(userCityForecast.now.phenomena))
      .toBe(true);
  });
});
