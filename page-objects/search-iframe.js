const BasePage = require("./base-page")

class SearchIframe extends BasePage {
	constructor() {
		super()
		this.fastSearchModal = element(by.id("fast-search-modal"))
		this.searchIframe = $(".modal-iframe")
		this.modalSearchBar = $(".search__bar")
		this.productTitle = function(productTitle) {
			return element.all(by.cssContainingText(".product__title-link", productTitle)).first()
		}
		this.firstResultItemProduct = $$(".result__item_product").first()
		this.resultItemProduct = function(productTitle) {
			return element(by.xpath(`//div[contains(@class, 'result__item_product') and descendant::a[text()] =
			 '${productTitle}']`))
		}
		this.productPrice = function(productTitle) {
			return this.resultItemProduct(productTitle).$(".product__price")
		}
		this.resultItemSubcategory = function(subcategoryTitle) {
			return element(by.cssContainingText(".category__title", subcategoryTitle))
		}
		this.closeSearchBarButton = $(".search__close")
		this.searchBarSuggestion = $(".search__suggest-addon")
	}

	switchToSearchIframe() {
		this.isVisible(this.fastSearchModal)
		return browser.switchTo().frame(this.searchIframe.getWebElement())
	}

	switchToDefaultFrame() {
		return browser.switchTo().defaultContent()
	}

	waitForProductAreLoadedOnModal() {
		return this.isVisible(this.firstResultItemProduct)
	}

	closeSearchModal() {
		return this.closeSearchBarButton.click()
	}

	openProductDetailsPageByTitle(productTitle) {
		return this.productTitle(productTitle).click()
	}

	openSubcategoryPage(subcategoryTitle) {
		this.isClickable(this.resultItemSubcategory(subcategoryTitle))
		return this.resultItemSubcategory(subcategoryTitle).click()
	}

	waitForSearchSuggestionIsVisible() {
		this.isVisible(this.searchBarSuggestion)
	}
}

module.exports = new SearchIframe()
