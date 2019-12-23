const BasePage = require("./base-page")

class HomePage extends BasePage {
	constructor() {
		super()
		this.topNavBar = element(by.css("ul.b-main-navigation"))
		this.cataloqueLink = this.topNavBar.element(by.css("a[href='https://catalog.onliner.by/']"))
		this.currencyInformer = element(by.id("currency-informer"))
		this.weatherInformer = element(by.id("weather-informer"))
		this.currentTemperature = this.weatherInformer.element(by.tagName("span"))
	}

	openCatalog() {
		this.cataloqueLink.click()
	}
	openCurrencyExchangeRatesPage() {
		this.currencyInformer.click()
	}
	openWeatherForecastPage() {
		this.weatherInformer.click()
	}
}

module.exports = new HomePage()
