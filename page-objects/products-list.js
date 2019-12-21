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
		this.productsTitles = element.all(by.css(".schema-product__title"))
			.all(by.tagName("span"))
		this.productTitleByProductName = function(productName) {
			return element.all(by.cssContainingText(".schema-product__title", productName)).first()
		}
		this.filters = element(by.id("schema-filter"))
		this.filterByName = function(filterName) {
			return element(by.cssContainingText(".schema-filter__label", filterName))
				.element(by.xpath(".."))
		}
		this.productsListTitle = element(by.css(".schema-header__title"))
		this.searchTagByName = function(tagName) {
			return element(by.cssContainingText(".schema-tags__text", tagName))
		}
		this.totalFoundButton = function(text) {
			return element(by.cssContainingText(".schema-filter-button__sub_main", text))
		}
		this.initiateFiltersResetButton = element(by.css("span.schema-filter-button__sub_control"))
		this.confirmFiltersResetButton = element(by.cssContainingText("span.schema-filter-button__sub",
			"Сбросить фильтр"))
		this.productCards = element.all(by.css(".schema-product__group"))
		this.compareProductsButton = function(numberOfProductsToCompare) {
			return element(by.cssContainingText(".compare-button__sub_main", numberOfProductsToCompare.toString()))
		}
		this.productComparisonName = function(productName) {
			return element.all(by.cssContainingText(".product-summary__caption", productName)).first()
		}
		this.firstProductOffersButton = element.all(by.css(".schema-product__offers")).first()
		this.sectionSwitcher = function(sectionName) {
			return element(by.cssContainingText(".schema-filter-control__switcher-inner", sectionName))
		}
		this.createUsedOfferButton = element(by.css("a[href='/used/create']"))
		this.productByTitle = function(productTitle) {
			return element(by.xpath(`//div[contains(@class, "schema-product__group") and descendant::span[text()] = "${productTitle}"]`))
		}
		this.productTitle = function(productTitle) {
			return this.productByTitle(productTitle)
				.element(by.css(".schema-product__title"))
				.element(by.tagName("span"))
		}
		this.usedProductConditionsCircleByProductTitle = function(productTitle) {
			return this.productByTitle(productTitle).element(by.css(".circle-style__value"))
		}
		this.usedProductLocationByProductTitle = function(productTitle) {
			return this.productByTitle(productTitle).element(by.css(".schema-product__city"))
		}
		this.usedProductPriceByProductTitle = function(productTitle) {
			return this.productByTitle(productTitle)
				.element(by.css(".schema-product__price-group"))
				.element(by.tagName("strong"))
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
	getProductsTitles() {
		return this.productsTitles
	}
	waitForActiveOrderOptionByName(optionName) {
		browser.wait(this.isVisible(this.orderDropdownActiveOrderOptionByName(optionName)))
	}
	filterProducts(filterName, filterOption) {
		this.filterByName(filterName)
			.element(by.cssContainingText(".schema-filter__checkbox-text", filterOption))
			.click()
	}
	waitForSearchTagIsDisplayed(tagName) {
		browser.wait(this.isVisible(this.searchTagByName(tagName)))
	}
	waitForProperTotalOfFoundProducts(total) {
		browser.wait(this.isVisible(this.totalFoundButton(total)))
	}
	resetFilters() {
		this.initiateFiltersResetButton.click()
		browser.wait(this.isVisible(this.confirmFiltersResetButton))
		this.confirmFiltersResetButton.click()
	}
	compareProducts(numberOfProductsToCompare) {
		browser.wait(this.isVisible(this.compareProductsButton(numberOfProductsToCompare)))
		this.compareProductsButton(numberOfProductsToCompare).click()
	}
	openFirstProductOffersPage() {
		this.firstProductOffersButton.click()
	}
	switchToSection(sectionName) {
		this.sectionSwitcher(sectionName).click()
	}
	openUsedUserProductOfferByProductName(productTitle) {
		this.productTitle(productTitle).click()
	}
	createUserUsedProductOffer() {
		this.createUsedOfferButton.click()
	}
}

module.exports = new ProductsList()
