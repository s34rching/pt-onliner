const BasePage = require("./base-page")

class SearchIframe extends BasePage {
	constructor() {
		super()
		this.fastSearchModal = element(by.id("fast-search-modal"))
		this.searchIframe = element(by.css(".modal-iframe"))
		this.productTitle = function(productTitle) {
			return element(by.cssContainingText(".product__title-link", productTitle))
		}
		this.firstResultItemProduct = element.all(by.css(".result__item_product")).first()
		this.resultItemProduct = function(productTitle) {
			return this.productTitle(productTitle)
				.element(by.xpath(".."))
				.element(by.xpath(".."))
				.element(by.xpath(".."))
		}
		this.productPrice = function(productTitle) {
			return this.resultItemProduct(productTitle).element(by.css(".product__price"))
		}
		this.resultItemCategory = function(categoryTitle) {
			return element(by.cssContainingText(".category__title", categoryTitle))
		}
		this.closeSearchBarButton = element(by.css(".search__close"))
	}

	switchToSearchIframe() {
		browser.wait(this.isVisible(this.fastSearchModal))
		return browser.switchTo().frame(this.searchIframe.getWebElement())
	}

	switchToDefaultFrame() {
		return browser.switchTo().defaultContent()
	}

	waitForProductAreLoadedOnModal() {
		return browser.wait(this.isVisible(this.firstResultItemProduct))
	}

	closeSearchModal() {
		return this.closeSearchBarButton.click()
	}

	openProductDetailsPageByTitle(productTitle) {
		return this.productTitle(productTitle).click()
	}
}

module.exports = new SearchIframe()
