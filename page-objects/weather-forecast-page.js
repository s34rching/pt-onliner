const BasePage = require("./base-page")

class WeatherForecastPage extends BasePage {
	constructor() {
		super()
		this.currentCityButton = element(by.css("a.js-weather-city"))
		this.currentCityButtonByName = function(cityName) {
			return element(by.cssContainingText("a.js-weather-city", cityName))
		}
		this.cityOptionsDropdown = element(by.css("div[class='b-weather__city-select'][class='js-visible']"))
		this.cityOption = function(cityId) {
			return element(by.css(`a[data-wmoid="${cityId}"]`))
		}
		this.currentWeather = element(by.css(".b-weather-today__actual"))
		this.currentTemperature = this.currentWeather.element(by.css(".grad")).element(by.css("span.value"))
		this.generalWeatherState = this.currentWeather.element(by.tagName("dd"))
		this.nextDaysBlock = element(by.css(".b-weather-next"))
		this.nextDateDaytimeTemperatureRange = function(day, temperatureMin, temperatureMax) {
			if (temperatureMax === null) {
				return element(by.xpath(`//li[contains(@class, 'b-weather-next__day') and descendant::dt[text()] = '${day}']`))
					.all(by.cssContainingText("p.b-weather-next__temp",`${temperatureMin}`))
					.first()
			} else {
				return element(by.xpath(`//li[contains(@class, 'b-weather-next__day') and descendant::dt[text()] = '${day}']`))
					.all(by.cssContainingText("p.b-weather-next__temp",`${temperatureMin}...${temperatureMax}`))
					.first()
			}
		}
	}
	openCitiesOptionsDropdown() {
		browser.wait(this.isVisible(this.currentCityButton))
		this.currentCityButton.click()
	}
	changeCity(cityId) {
		browser.wait(this.isClickable(this.cityOption(cityId)))
		this.cityOption(cityId).click()
	}
	waitForCityChangedTo(cityName) {
		browser.wait(this.isVisible(this.currentCityButtonByName(cityName)))
	}
}

module.exports = new WeatherForecastPage()
