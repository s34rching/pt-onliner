const HomePage = require("../page-objects/homepage")
const ExchangeRatesPage = require("../page-objects/currency-exchange-page")
const WeatherForecastPage = require("../page-objects/weather-forecast-page")
const { getLocationsAmount, defineLocationsMessageOnPopup } = require("../service/location-services")
const random = require("../helpers/get-random-testing-data")
const { cities } = require("../fixtures/cities")
const api = require("../helpers/onliner-api")
const _ = require("lodash")
const { getDirectionWithOrder, getDirectionCurrencies, calculateConversionResult } = require("../service/currency-exchange-services")

describe("Onliner.by - Top Navigation / Informers", () => {

	let bestUsdExchangeRate

	beforeAll(done => {
		api.getCurrencyExchangeRates().then(res => {
			bestUsdExchangeRate = JSON.parse(res).amount
			done()
		})
	})

	beforeEach(() => {
		browser.waitForAngularEnabled(false)

		HomePage.goTo("/")
		HomePage.scrollElementIntoView(HomePage.topNavbar)
	})

	describe("Currency exchange rates", () => {

		describe("When user opens homepage", () => {

			it("Then they should be able to see the best conversion rate of USD", () => {
				HomePage.goTo("/")
				expect(HomePage.currencyInformer.getText()).toBe(`$ ${bestUsdExchangeRate}`)
			})

			describe("And open currency exchange rates page to see the best rates locations", () => {

				describe("And search for the city best rates locations", () => {

					it("Then they should be able to find exchange services location on a map", () => {
						HomePage.openCurrencyExchangeRatesPage()
						ExchangeRatesPage.bestExchangeRatesLocationsButton.getText().then(showMapMessage => {
							const locationsAmount = getLocationsAmount(showMapMessage)

							ExchangeRatesPage.openBestExchangeRatesLocations()
							ExchangeRatesPage.waitForMapIsLoaded()
							expect(ExchangeRatesPage.exchangeServicesMapLocations.getText()).toMatch(defineLocationsMessageOnPopup(locationsAmount))
							expect(ExchangeRatesPage.exchangeServicesMapPointers.count()).toEqual(locationsAmount)
							ExchangeRatesPage.exchangeServicesMapPointers.each(pointer => expect(pointer.isDisplayed()).toBe(true))
						})
					})
				})

				describe("And enter currency amount, picks up currencies conversion direction", () => {

					it("Then conversion should be successful", () => {

						const { direction, order } = getDirectionWithOrder()
						const { in: currencyIn, out: currencyOut } = getDirectionCurrencies(direction, order)
						const randomCurrencyAmount = random.getRandomNumber(20, 10000)

						HomePage.openCurrencyExchangeRatesPage()
						ExchangeRatesPage.waitForConvertOutDataVisible()
						ExchangeRatesPage.getDirectionBestExchangeRate(direction, order).then(rate => {
							ExchangeRatesPage.chooseCurrencyToConvert("in", currencyIn)
							ExchangeRatesPage.chooseCurrencyToConvert("out", currencyOut)
							ExchangeRatesPage.enterCurrencyAmountToConvert(randomCurrencyAmount)
							expect(ExchangeRatesPage.getConversionResult()).toBe(calculateConversionResult(currencyIn, currencyOut, randomCurrencyAmount, rate, order))
						})
					})
				})
			})
		})
	})

	describe("Weather forecast", () => {

		describe("When user opens homepage", () => {

			let forecast

			beforeEach(done => {
				api.getWeather().then(res => {
					forecast = JSON.parse(res)
					done()
				})
			})

			it("Then they should be able to see current temperature in user's default city", () => {
				expect(HomePage.currentTemperature.getText()).toBe(`${forecast.now.temperature}°`)
			})

			describe("And opens weather forecast page", () => {

				const userCity = _.sample(_.without(cities, { name: "Минск" }))
				let userCityForecast

				beforeEach(done => {
					api.getWeather(userCity.id).then(res => {
						userCityForecast = JSON.parse(res)
						done()
					})
				})

				it("Then they should be able to see current weather and 5-days forecast", () => {
					HomePage.openWeatherForecastPage()
					WeatherForecastPage.openCitiesOptionsDropdown()
					WeatherForecastPage.changeCity(userCity.id)
					WeatherForecastPage.waitForCityChangedTo(userCityForecast.city)
					expect(WeatherForecastPage.currentTemperature.getText()).toMatch(/(^–\d+)|(\d+)/)
					expect(WeatherForecastPage.generalWeatherState.getText()).toContain(userCityForecast.now.phenomena)
					WeatherForecastPage.scrollElementIntoView(WeatherForecastPage.nextDaysBlock)
					_.values(userCityForecast.forecast).forEach(dayOfWeek => {
						expect(WeatherForecastPage.nextDateDaytimeTemperatureRange(
							dayOfWeek.dateTextDayOfWeek, dayOfWeek.dayTemperature.min, dayOfWeek.dayTemperature.max)
							.isDisplayed())
							.toBe(true)
					})
				})
			})
		})
	})
})
