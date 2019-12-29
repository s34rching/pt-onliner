const BasePage = require("./base-page")

class ExchangeRatesPage extends BasePage {
	constructor() {
		super()
		this.convertInData = element(by.id("converter-in"))
		this.convertInCurrenciesDropdown = this.convertInData.element(by.id("currency-in"))
		this.convertInAmount = this.convertInData.element(by.id("amount-in"))
		this.convertOutData = element(by.id("converter-out"))
		this.convertOutCurrenciesDropdown = this.convertOutData.element(by.id("currency-out"))
		this.conversionResult = this.convertOutData.$("b.js-cur-result")
		this.convertCurrenciesDropdownOptionByValue = function(dropdown, value) {
			if(dropdown === "in") {
				return this.convertInCurrenciesDropdown.element(by.cssContainingText("option", value))
			} else {
				return this.convertOutCurrenciesDropdown.element(by.cssContainingText("option", value))
			}
		}
		this.bestExchangeRatesLocationsLink = this.convertOutData.all(by.tagName("p")).last()
		this.bestExchangeRatesLocationsButton = this.bestExchangeRatesLocationsLink.$$("a").first()
		this.bestExchangeRateByCurrencyDirection = function(currencyIn, currencyOut) {
			return this.bestExchangeRatesLocationsLink
				.$$(`a[data-direction="${currencyIn}-to-${currencyOut}"]`)
				.first()
		}
		this.exchangeServicesMap = $("div.b-currency-map-i")
		this.exchangeServicesMapPointers = this.exchangeServicesMap.$$("ymaps.ymaps-image")
		this.exchangeServicesMapLocations = this.exchangeServicesMap.element(by.tagName("em"))
	}

	waitForConvertOutDataVisible() {
		this.isVisible(this.convertOutData)
	}
	openBestExchangeRatesLocations() {
		this.scrollElementIntoView(this.topNavbar)
		this.waitForConvertOutDataVisible()
		this.bestExchangeRatesLocationsButton.click()
	}
	waitForMapIsLoaded() {
		this.isVisible(this.exchangeServicesMap)
	}
	chooseCurrencyToConvert(dropdown, value) {
		if (dropdown === "in") {
			this.convertInCurrenciesDropdown.click()
		} else {
			this.convertOutCurrenciesDropdown.click()
		}
		this.isVisible(this.convertCurrenciesDropdownOptionByValue(dropdown, value))
		this.convertCurrenciesDropdownOptionByValue(dropdown, value).click()
	}
	enterCurrencyAmountToConvert(amount) {
		this.convertInAmount
			.clear()
			.sendKeys(amount)
	}
}

module.exports = new ExchangeRatesPage()
