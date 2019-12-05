const BasePage = require("./base-page")

class SearchIframe extends BasePage {
	constructor() {
		super()
		this.searchIframe = element(by.className("modal-iframe"))
		this.productTitle = function(productTitle) {
			return element(by.cssContainingText(".product__title-link", productTitle))
		}
		this.resultItemProduct = function(productTitle) {
			return this.productTitle(productTitle).element(by.xpath("ancestor::div[@class='result__item_product']"))
		}
		this.productPrice = function(productTitle) {
			return this.resultItemProduct(productTitle).element(by.css(".product-price"))
		}
		this.resultItemCategory = function(categoryTitle) {
			return element(by.css(".result__item_category"))
				.element(by.cssContainingText(".category__title", categoryTitle))
		}
	}

	switchToSearchIframe() {
		browser.switchTo().frame(this.searchIframe)
	}
}

module.exports = new SearchIframe()
