const BasePage = require("./base-page")

class ProductsList extends BasePage {
	constructor() {
		super()
		this.orderOptionsContainer = element(by.id("schema-order"))
		this.orderDropdown = this.orderOptionsContainer.element(by.css("a.schema-order__link"))
		this.orderDropdownOptionsList = element(by.css(".schema-order__list"))
		this.orderDropdownOptionsListOptionByName = function(optionName) {
			return element(by.cssContainingText("span", optionName))
		}
		this.orderDropdownActiveOrderOption = this.orderDropdown.element(by.css("span.schema-order__text"))
		this.orderDropdownActiveOrderOptionByName = function(optionName) {
			return this.orderDropdown.element(by.cssContainingText("span.schema-order__text", optionName))
		}
		this.productRatings = element.all(by.css("a.schema-product__rating"))
			.all(by.css("span.schema-product__review-count"))
		this.productTitleByProductName = function(productName) {
			return element.all(by.cssContainingText(".schema-product__title", productName)).first()
		}
	}

	waitForOrderDefaultOptionIsDisplayed() {
		return browser.wait(this.isVisible(this.orderDropdownActiveOrderOption))
	}
	openOrderListDropDown() {
		return this.orderDropdown.click()
	}
	waitForOrderDropdownListIsVisible() {
		return browser.wait(this.isVisible(this.orderDropdownOptionsList))
	}
	chooseOrderDropdownOptionByName(optionName) {
		return this.orderDropdownOptionsListOptionByName(optionName).click()
	}
	waitForUrlContains(text) {
		return browser.wait(this.urlContains(text))
	}
	getProductsRating() {
		return this.productRatings
	}
	waitForActiveOrderOptionByName(optionName) {
		browser.wait(this.isVisible(this.orderDropdownActiveOrderOptionByName(optionName)))
	}
	waitForProductListRebuilt(productName) {
		browser.wait(this.isVisible(this.productTitleByProductName(productName)))
	}
}

module.exports = new ProductsList()
