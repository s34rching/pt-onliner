const BasePage = require("./base-page")

class ProductsList extends BasePage {
	constructor() {
		super()
		this.orderOptionsContainer = element(by.id("schema-order"))
		this.orderDropdown = this.orderOptionsContainer.$("a.schema-order__link")
		this.orderDropdownOptionsList = $(".schema-order__list")
		this.orderDropdownOptionsListOptionByName = function(optionName) {
			return element(by.cssContainingText("span", optionName))
		}
		this.orderDropdownActiveOrderOption = this.orderDropdown.$("span.schema-order__text")
		this.orderDropdownActiveOrderOptionByName = function(optionName) {
			return this.orderDropdown.element(by.cssContainingText("span.schema-order__text", optionName))
		}
		this.productRatings = $$("a.schema-product__rating").$$("span.schema-product__review-count")
		this.productsTitles = $$(".schema-product__title").all(by.tagName("span"))
		this.filters = element(by.id("schema-filter"))
		this.filterByName = function(filterName) {
			return element(by.cssContainingText(".schema-filter__label", filterName))
				.element(by.xpath(".."))
		}
		this.productsListTitle = $(".schema-header__title")
		this.searchTagByName = function(tagName) {
			return element(by.cssContainingText(".schema-tags__text", tagName))
		}
		this.totalFoundButton = function(text) {
			return element(by.cssContainingText(".schema-filter-button__sub_main", text))
		}
		this.initiateFiltersResetButton = $("span.schema-filter-button__sub_control")
		this.confirmFiltersResetButton = element(by.cssContainingText("span.schema-filter-button__sub",
			"Сбросить фильтр"))
		this.compareProductsButton = function(numberOfProductsToCompare) {
			return element(by.cssContainingText(".compare-button__sub_main", numberOfProductsToCompare.toString()))
		}
		this.resetComparisonListButton = element(by.cssContainingText("a.product-table__clear",
			"Очистить сравнение"))
		this.productComparisonName = function(productName) {
			return element.all(by.cssContainingText(".product-summary__caption", productName)).first()
		}
		this.firstProductOffersButton = element.all(by.css(".schema-product__offers")).first()
		this.sectionSwitcher = function(sectionName) {
			return element(by.cssContainingText(".schema-filter-control__switcher-inner", sectionName))
		}
		this.createUsedOfferButton = $("a[href='/used/create']")
		this.productByTitle = function(productTitle) {
			return element(by.xpath(`//div[contains(@class, "schema-product__group") and descendant::span[text()] = "${productTitle}"]`))
		}
		this.product = function({ productIndex, productTitle, all } = {}) {
			if (productIndex) {
				return $$(".schema-product").get(productIndex)
			} else if (productTitle) {
				return element(by.xpath(`//div[contains(@class, "schema-product") and descendant::span[text()] = "${productTitle}"]`))
			} else if (all) {
				return $$(".schema-product")
			} else {
				return $$(".schema-product").first()
			}
		}
		this.productTitle = function(productTitle) {
			return this.productByTitle(productTitle)
				.$(".schema-product__title")
				.element(by.tagName("span"))
		}
		this.usedProductConditionsCircleByProductTitle = function(productTitle) {
			return this.productByTitle(productTitle).$(".circle-style__value")
		}
		this.usedProductLocationByProductTitle = function(productTitle) {
			return this.productByTitle(productTitle).$(".schema-product__city")
		}
		this.usedProductPriceByProductTitle = function(productTitle) {
			return this.productByTitle(productTitle)
				.$(".schema-product__price-group")
				.element(by.tagName("strong"))
		}
	}

	openOrderListDropDown() {
		return this.orderDropdown.click()
	}
	waitForOrderDropdownListIsVisible() {
		return this.isVisible(this.orderDropdownOptionsList)
	}
	chooseOrderDropdownOptionByName(optionName) {
		return this.orderDropdownOptionsListOptionByName(optionName).click()
	}
	waitForUrlContains(text) {
		return this.urlContains(text)
	}
	getProductsRating() {
		return this.productRatings
	}
	getProductsTitles() {
		return this.productsTitles
	}
	waitForActiveOrderOptionByName(optionName) {
		this.isVisible(this.orderDropdownActiveOrderOptionByName(optionName))
	}
	filterProducts(filterName, filterOption) {
		this.filterByName(filterName)
			.element(by.cssContainingText(".schema-filter__checkbox-text", filterOption))
			.click()
	}
	waitForSearchTagIsDisplayed(tagName) {
		this.isVisible(this.searchTagByName(tagName))
	}
	waitForProperTotalOfFoundProducts(total) {
		this.isVisible(this.totalFoundButton(total))
	}
	resetFilters() {
		this.initiateFiltersResetButton.click()
		this.isVisible(this.confirmFiltersResetButton)
		this.confirmFiltersResetButton.click()
	}
	compareProducts(numberOfProductsToCompare) {
		this.isClickable(this.compareProductsButton(numberOfProductsToCompare))
		this.forceClick(this.compareProductsButton(numberOfProductsToCompare))
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
	clearComparisonList() {
		this.resetComparisonListButton.click()
	}
}

module.exports = new ProductsList()
