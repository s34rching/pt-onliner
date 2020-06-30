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
		this.bestExchangeRateByCurrencyDirection = function(direction, order) {
			return (order === "direct") ?
				this.bestExchangeRatesLocationsLink.$$(`a[data-direction="${direction}"]`).first() :
				this.bestExchangeRatesLocationsLink.$$(`a[data-direction="${direction}"]`).last()
		}
		this.exchangeServicesMap = $("div.b-currency-map-i")
		this.exchangeServicesMapPointers =  this.exchangeServicesMap.$$("ymaps.ymaps-image")
		this.exchangeServicesMapLocations = this.exchangeServicesMap.element(by.tagName("em"))
	}

	waitForConvertOutDataVisible() {
		this.isVisible(this.convertOutData)
	}
	openBestExchangeRatesLocations() {
		this.scrollElementIntoView(this.topNavbar)
		this.waitForConvertOutDataVisible()
		this.bestExchangeRatesLocationsButton.click()
		this.waitForMapIsLoaded()
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
	getDirectionBestExchangeRate(direction, order) {
		return this.bestExchangeRateByCurrencyDirection(direction, order)
			.getAttribute("data-title")
			.then(value => {
				return value.match(/\d+,\d+/)[0]
			})
	}
	getConversionResult() {
		return this.conversionResult.getText().then(result => {
			return parseFloat(result.replace(",", ".").replace(" ", ""))
				.toFixed(2)
		})
	}
}

module.exports = new ExchangeRatesPage()
