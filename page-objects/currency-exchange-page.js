const BasePage = require("./base-page")

class ExchangeRatesPage extends BasePage {
	constructor() {
		super()
		this.convertInData = element(by.id("converter-in"))
		this.convertOutData = element(by.id("converter-out"))
		this.bestExchangeRatesLocationsLink = this.convertOutData.all(by.tagName("p")).last()
		this.exchangeServicesMap = element(by.css("div.b-currency-map-i"))
		this.exchangeServicesMapPointers = this.exchangeServicesMap.all(by.css("ymaps.ymaps-image"))
		this.exchangeServicesMapLocations = this.exchangeServicesMap.element(by.tagName("em"))
	}

	openBestExchangeRatesLocations() {
		browser.wait(this.isVisible(this.convertOutData))
		this.bestExchangeRatesLocationsLink.click()
	}
	waitForMapIsLoaded() {
		browser.wait(this.isVisible(this.exchangeServicesMap))
	}
}

module.exports = new ExchangeRatesPage()
