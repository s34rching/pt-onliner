const BasePage = require("./base-page")

class WeatherForecastPage extends BasePage {
	constructor() {
		super()
		this.currentCityButton = $("a.js-weather-city")
		this.currentCityButtonByName = function(cityName) {
			return element(by.cssContainingText("a.js-weather-city", cityName))
		}
		this.cityOption = function(cityId) {
			return $(`a[data-wmoid="${cityId}"]`)
		}
		this.currentWeather = $(".b-weather-today__actual")
		this.currentTemperature = this.currentWeather.$(".grad").$("span.value")
		this.generalWeatherState = this.currentWeather.element(by.tagName("dd"))
		this.nextDaysBlock = $(".b-weather-next")
		this.nextDateDaytimeTemperatureRange = function(day) {
			if (day.dayTemperature.max === null) {
				return element(by.xpath(`//li[contains(@class, 'b-weather-next__day') and descendant::dt[text()] = '${day.dateTextDayOfWeek}']`))
					.all(by.cssContainingText("p.b-weather-next__temp",`${day.dayTemperature.min}`))
					.first()
			} else {
				return element(by.xpath(`//li[contains(@class, 'b-weather-next__day') and descendant::dt[text()] = '${day.dateTextDayOfWeek}']`))
					.all(by.cssContainingText("p.b-weather-next__temp", `${day.dayTemperature.min}...${day.dayTemperature.max}`))
					.first()
			}
		}
	}
	openCitiesOptionsDropdown() {
		this.isVisible(this.currentCityButton)
		this.currentCityButton.click()
	}
	changeCity(cityId) {
		this.isClickable(this.cityOption(cityId))
		this.cityOption(cityId).click()
	}
	waitForCityChangedTo(cityName) {
		this.isVisible(this.currentCityButtonByName(cityName))
	}
	getNextDateDaytimeTemperatureRanges(days) {
		return Promise.all(days.map(this.nextDateDaytimeTemperatureRange))
	}
}

module.exports = new WeatherForecastPage()
