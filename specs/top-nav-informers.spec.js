const HomePage = require("../page-objects/homepage")
const ExchangeRatesPage = require("../page-objects/currency-exchange-page")
const WeatherForecastPage = require("../page-objects/weather-forecast-page")
const random = require("../helpers/get-random-testing-data")
const cities = require("../fixtures/cities")
const rp = require("request-promise")
const _ = require("lodash")

describe("Onliner.by - Top Navigation / Informers", () => {

	let bestUsdExchangeRate

	beforeAll(done => {
		rp("https://www.onliner.by/sdapi/kurs/api/bestrate?currency=USD&type=nbrb").then(res => {
			bestUsdExchangeRate = JSON.parse(res).amount
			done()
		})
	})

	beforeEach(() => {
		browser.waitForAngularEnabled(false)

		HomePage.goTo("/")
	})

	describe("Currency exchange rates", () => {

		describe("When user opens homepage", () => {

			it("Then they should be able to see the best conversion rate of USD", () => {
				HomePage.goTo("/")
				HomePage.currencyInformer.getText().then(exchangeRate => {
					expect(exchangeRate.replace("$ ", "")).toBe(bestUsdExchangeRate)
				})
			})

			describe("And open currency exchange rates page to see the best rates locations", () => {

				describe("And search for the city best rates locations", () => {

					it("Then they should be able to find exchange services location on a map", () => {
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
				})

				describe("And enter currency amount, picks up currencies conversion direction", () => {

					it("Then conversion should be successful", () => {

						let currencies = []
						let currenciesIn = []
						let currenciesOut = []
						let exchangeRateByDirection
						const randomCurrencyAmount = random.getRandomNumber(20, 10000)

						HomePage.openCurrencyExchangeRatesPage()
						ExchangeRatesPage.waitForConvertOutDataVisible()
						ExchangeRatesPage.convertInCurrenciesDropdown.all(by.tagName("option")).each(option => {
							option.getText().then(currencyName => { currencies.push(currencyName)})
						}).then(() => {
							currenciesIn = _.without(currencies, "BYN")
							currenciesOut = _.without(currencies, "EUR")
							const currencyIn = _.sample(currenciesIn)
							let currencyOut
							if (currencyIn === "RUB") {
								currencyOut = _.sample(_.without(currenciesOut, currencyIn, "USD"))
							} else {
								currencyOut = _.sample(_.without(currenciesOut, currencyIn))
							}
							ExchangeRatesPage.bestExchangeRateByCurrencyDirection(currencyIn.toLowerCase(), currencyOut.toLowerCase())
								.getAttribute("data-title")
								.then(value => {
									exchangeRateByDirection = value.match(/\d+,\d+/)[0]
									ExchangeRatesPage.chooseCurrencyToConvert("in", currencyIn)
									ExchangeRatesPage.chooseCurrencyToConvert("out", currencyOut)
									ExchangeRatesPage.enterCurrencyAmountToConvert(randomCurrencyAmount)
									ExchangeRatesPage.conversionResult.getText().then(conversionResult => {
										if (currencyIn === "RUB" && currencyOut === "BYN") {
											expect(parseFloat(conversionResult
												.replace(",", ".")
												.replace(" ", ""))
												.toFixed(2))
												.toBe((parseFloat(exchangeRateByDirection.replace(",", ".")) * randomCurrencyAmount / 100).toFixed(2))
										} else {
											expect(parseFloat(conversionResult
												.replace(",", ".")
												.replace(" ", ""))
												.toFixed(2))
												.toBe((parseFloat(exchangeRateByDirection.replace(",", ".")) * randomCurrencyAmount).toFixed(2))
										}
									})
								})
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
				rp("https://www.onliner.by/sdapi/pogoda/api/forecast").then(res => {
					forecast = JSON.parse(res)
					done()
				})
			})

			it("Then they should be able to see current temperature in user's default city", () => {
				HomePage.currentTemperature.getText().then(currentTemperature => {
					expect(currentTemperature.match(/\d+/)[0]).toBe(forecast.now.temperature.match(/\d+/)[0])
				})
			})


			describe("And opens weather forecast page", () => {

				const userCity = _.sample(_.without(cities.cities, { name: "Минск" }))
				let userCityForecast

				beforeEach(done => {
					rp(`https://www.onliner.by/sdapi/pogoda/api/forecast/${userCity.id}`).then(res => {
						userCityForecast = JSON.parse(res)
						done()
					})
				})

				it("Then they should be able to see current weather and 5-days forecast", () => {
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
	})
})
