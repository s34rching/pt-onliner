const BasePage = require("./base-page")

class ProductsList extends BasePage {
	constructor() {
		super()
		this.subcategoryTitle = element(by.css("h1.schema-header__title"))
		this.orderOptionsContainer = element(by.id("schema-order"))
		this.orderDropdown = this.orderOptionsContainer.element(by.css("a.schema-order__link"))
		this.orderDropdownActiveOrderOption = this.orderDropdown.element(by.css("span.schema-order__text"))
		this.orderDropdownOptionsList = this.orderDropdown.element(by.css("div.schema-order__list"))
		this.orderDropdownOption = function(option) {
			return this.orderDropdownOptionsList.element(by.cssContainingText("span", option)) }
		this.listsSwitcher = function(list) {
			return element(by.cssContainingText("span.schema-filter-control__switcher-inner", list))
		}
		this.createUsedAdButton = element(by.css("a[href='/used/create']"))
		this.productItems = element.all(by.css("schema-product__group"))
		this.firstProductItem = element.all(by.css("schema-product__group")).first()
		this.productTitle = function(title) {
			element(by.css("schema-product__group")).element(by.cssContainingText("span", title))}
	}

	waitForOrderDefaultOptionIsDisplayed() {
		return browser.wait(this.isVisible(this.orderDropdownActiveOrderOption))
	}
}

module.exports = new ProductsList()
