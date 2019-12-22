const HomePage = require("../page-objects/homepage")
const rp = require("request-promise")

describe("Onliner.by - Top Navigation / Informers", () => {

	let bestUsdExchangeRate

	beforeAll(() => {
		// eslint-disable-next-line no-unused-vars
		return new Promise((resolve, reject) => {
			rp("https://www.onliner.by/sdapi/kurs/api/bestrate?currency=USD&type=nbrb").then(res => {
				bestUsdExchangeRate = JSON.parse(res).amount
				resolve()
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

		it("", () => {

		})

		it("currency exchange calculator", () => {

		})
	})

	describe("Weather forecast", () => {
		it("shows weather in user's default city on the homepage", () => {

		})

		it("user is able to change their default city", () => {

		})
	})
})
