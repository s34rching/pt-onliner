const BasePage = require("./base-page")

class ProductDetailsPage extends BasePage {
	constructor() {
		super()
		this.firstOffer = element(by.css(".product-aside__item--highlighted"))
		this.firstOfferPrice = this.firstOffer.element(by.css("span.product-aside__price--primary"))
		this.usedProductNameHeading = element(by.css(".catalog-masthead__title"))
		this.usedProductDescription = element(by.css(".offers-list__description"))
		this.usedProductPrice = element(by.css(".offers-list__price_primary"))
	}

	waitForFirstShopOfferVisible() {
		browser.wait(this.isVisible(this.firstOffer))
	}
	waitForUsedProductPrice() {
		browser.wait(this.isVisible(this.usedProductPrice))
	}
}

module.exports = new ProductDetailsPage()
