const HomePage = require("../page-objects/homepage")
const WeatherForecastPage = require("../page-objects/weather-forecast-page")
const { cities } = require("../fixtures/cities")
const api = require("../helpers/onliner-api")
const _ = require("lodash")
const { composeUrl } = require("../helpers/url-composer")

describe("Onliner.by - Top Navigation / Informers - Weather Forecast", () => {
	const userCity = _.sample(_.without(cities, { name: "Минск" }))
	let forecast, userCityForecast

	beforeAll(done => {
		api.getWeather().then(res => {
			forecast = JSON.parse(res)
			api.getWeather(userCity.id).then(res => {
				userCityForecast = JSON.parse(res)
				done()
			})
		})
	})

	beforeEach(() => {
		browser.waitForAngularEnabled(false)
	})

	it("User should be able to see current temperature in user's default city on homepage", () => {
		HomePage.goTo("/")
		expect(HomePage.currentTemperature.getText()).toBe(`${forecast.now.temperature}°`)
	})

	it("User should be able open weather forecast page", () => {
		HomePage.goTo("/")
		HomePage.openWeatherForecastPage()
		expect(WeatherForecastPage.currentTemperature.getText()).toBe(forecast.now.temperature)
	})

	it("User should be able to see 5-days forecast", () => {
		HomePage.open(composeUrl("weather"))
		WeatherForecastPage.scrollElementIntoView(WeatherForecastPage.nextDaysBlock)
		WeatherForecastPage.getNextDateDaytimeTemperatureRanges(_.values(forecast.forecast)).then(el => el.length)
	})

	it("User should be able to change their city to see other city weather", () => {
		HomePage.open(composeUrl("weather"))
		WeatherForecastPage.openCitiesOptionsDropdown()
		WeatherForecastPage.changeCity(userCity.id)
		WeatherForecastPage.waitForCityChangedTo(userCityForecast.city)
		expect(WeatherForecastPage.generalWeatherState.getText()).toContain(userCityForecast.now.phenomena)
	})
})
