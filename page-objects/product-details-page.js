const BasePage = require("./base-page")

class ProductDetailsPage extends BasePage {
	constructor() {
		super()
		this.firstOffer = $(".product-aside__item--highlighted")
		this.firstOfferPrice = this.firstOffer.$("span.product-aside__price--primary")
		this.usedProductNameHeading = $(".catalog-masthead__title")
		this.usedProductDescription = $(".offers-list__description")
		this.usedProductPrice = $(".offers-list__price_primary")
	}

	waitForFirstShopOfferVisible() {
		browser.wait(this.isVisible(this.firstOffer))
	}
	waitForUsedProductPrice() {
		browser.wait(this.isVisible(this.usedProductPrice))
	}
}

module.exports = new ProductDetailsPage()
