const HomePage = require("../page-objects/homepage")
const ExchangeRatesPage = require("../page-objects/currency-exchange-page")
const WeatherForecastPage = require("../page-objects/weather-forecast-page")
const random = require("../helpers/get-random-testing-data")
const cities = require("../fixtures/cities")
const rp = require("request-promise")
const _ = require("lodash")

describe("Onliner.by - Top Navigation / Informers", () => {

	let bestUsdExchangeRate
	let forecast
	const userCity = _.sample(_.without(cities.cities, { name: "Минск" }))
	let userCityForecast

	beforeAll(() => {
		// eslint-disable-next-line no-unused-vars
		return new Promise((resolve, reject) => {
			rp("https://www.onliner.by/sdapi/kurs/api/bestrate?currency=USD&type=nbrb").then(res => {
				bestUsdExchangeRate = JSON.parse(res).amount
				rp("https://www.onliner.by/sdapi/pogoda/api/forecast").then(res => {
					forecast = JSON.parse(res)
					rp(`https://www.onliner.by/sdapi/pogoda/api/forecast/${userCity.id}`).then(res => {
						userCityForecast = JSON.parse(res)
						resolve()
					})
				})
			})
		})
	})

	beforeEach(() => {
		browser.waitForAngularEnabled(false)
	})

	describe("Currency exchange rates", () => {
		it("shows USD exchange rate on the homepage", () => {
			HomePage.goTo("/")
			HomePage.currencyInformer.getText().then(exchangeRate => {
				expect(exchangeRate.replace("$ ", "")).toBe(bestUsdExchangeRate)
			})
		})

		it("shows exchange services locations on the map", () => {
			HomePage.goTo("/")
			HomePage.openCurrencyExchangeRatesPage()
			ExchangeRatesPage.openBestExchangeRatesLocations()
			ExchangeRatesPage.waitForMapIsLoaded()
			ExchangeRatesPage.exchangeServicesMapLocations.getText().then(text => {
				const locationsAmount = text.match(/^\d+/)[0]
				ExchangeRatesPage.exchangeServicesMapPointers.then(pointers => {
					expect(pointers.length).toBe(parseInt(locationsAmount))
					pointers.forEach(pointer => {
						expect(pointer.isDisplayed()).toBe(true)
					})
				})
			})
		})

		it("user should be able to convert currencies", () => {

			let currencies = []
			let currenciesIn = []
			let currenciesOut = []
			let exchangeRateByDirection
			const randomCurrencyAmount = random.getRandomNumber(20, 10000)

			HomePage.goTo("/")
			HomePage.openCurrencyExchangeRatesPage()
			ExchangeRatesPage.waitForConvertOutDataVisible()
			ExchangeRatesPage.convertInCurrenciesDropdown.all(by.tagName("option")).each(option => {
				option.getText().then(currencyName => { currencies.push(currencyName)})
			}).then(() => {
				currenciesIn = _.without(currencies, "BYN")
				currenciesOut = _.without(currencies, "EUR")
				const currencyIn = _.sample(currenciesIn)
				const currencyOut = _.sample(_.without(currenciesOut, currencyIn))
				ExchangeRatesPage.bestExchangeRateByCurrencyDirection(currencyIn.toLowerCase(), currencyOut.toLowerCase())
					.getAttribute("data-title")
					.then(value => {
						exchangeRateByDirection = value.match(/\d+,\d+/)[0]
						ExchangeRatesPage.chooseCurrencyToConvert("in", currencyIn)
						ExchangeRatesPage.chooseCurrencyToConvert("out", currencyOut)
						ExchangeRatesPage.enterCurrencyAmountToConvert(randomCurrencyAmount)
						ExchangeRatesPage.conversionResult.getText().then(conversionResult => {
							expect(parseFloat(conversionResult
								.replace(",", ".")
								.replace(" ", "")))
								.toBe(parseFloat(exchangeRateByDirection.replace(",", ".")) * randomCurrencyAmount)
						})
					})
			})
		})
	})

	describe("Weather forecast", () => {
		it("shows weather in user's default city on the homepage", () => {
			HomePage.goTo("/")
			HomePage.currentTemperature.getText().then(currentTemperature => {
				expect(currentTemperature.match(/\d+/)[0]).toBe(forecast.now.temperature.match(/\d+/)[0])
			})
		})

		it("user is able to change their default city", () => {
			HomePage.goTo("/")
			HomePage.openWeatherForecastPage()
			WeatherForecastPage.openCitiesOptionsDropdown()
			WeatherForecastPage.changeCity(userCity.id)
			WeatherForecastPage.waitForCityChangedTo(userCityForecast.city)
			expect(WeatherForecastPage.currentTemperature.getText()).toBe(userCityForecast.now.temperature)
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
