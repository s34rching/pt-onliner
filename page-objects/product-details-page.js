const BasePage = require("./base-page")

class ProductDetailsPage extends BasePage {
	constructor() {
		super()
		this.firstOffer = element(by.css(".product-aside__item--highlighted"))
		this.firstOfferPrice = this.firstOffer.element(by.css("span.product-aside__price--primary"))
		this.usedProductNameHeading = element(by.css(".catalog-masthead__title"))
		this.usedProductDescription = element(by.css(".offers-list__description"))

	}

	waitForFirstShopOfferVisible() {
		browser.wait(this.isVisible(this.firstOffer))
	}
}

module.exports = new ProductDetailsPage()
