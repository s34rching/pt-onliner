const BasePage = require("./base-page")

class ProductDetailsPage extends BasePage {
	constructor() {
		super()
		this.productTitle = function(product) {
			return element(by.cssContainingText("h1.catalog-masthead__title", product.catalogTitle))
		}
		this.productOffers = $(".product-aside__group")
		this.firstOffer = $(".product-aside__item--highlighted")
		this.firstOfferPrice = this.firstOffer.$("span.product-aside__price--primary")
		this.usedProductNameHeading = $(".catalog-masthead__title")
		this.usedProductDescription = $(".offers-list__description")
		this.usedProductPrice = $(".offers-list__price_primary")
		this.productOfferDescription = $("p[itemprop='description']")
		this.productTechDescription = element(by.id("specs"))
	}

	waitForFirstShopOfferVisible() {
		this.isVisible(this.firstOffer)
	}
	waitForUsedProductPrice() {
		this.isVisible(this.usedProductPrice)
	}
}

module.exports = new ProductDetailsPage()
