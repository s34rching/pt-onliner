const BasePage = require("./base-page")

class HomePage extends BasePage {
	constructor() {
		super()
		this.topNavBar = $("ul.b-main-navigation")
		this.cataloqueLink = this.topNavBar.$("a[href='https://catalog.onliner.by/']")
		this.currencyInformer = element(by.id("currency-informer"))
		this.weatherInformer = element(by.id("weather-informer"))
		this.currentTemperature = this.weatherInformer.element(by.tagName("span"))
	}

	openCatalog() {
		this.cataloqueLink.click()
	}
	openCurrencyExchangeRatesPage() {
		this.isClickable(this.currencyInformer)
		this.currencyInformer.click()
	}
	openWeatherForecastPage() {
		this.isClickable(this.weatherInformer)
		this.weatherInformer.click()
	}
}

module.exports = new HomePage()
