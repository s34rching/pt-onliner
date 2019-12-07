const BasePage = require("./base-page")

class ProductDetailsPage extends BasePage {
	constructor() {
		super()
		this.firstOffer = element(by.css(".product-aside__item--highlighted"))
		this.firstOfferPrice = this.firstOffer.element(by.css("span.product-aside__price--primary"))
	}

	waitForFirstShopOfferVisible() {
		browser.wait(this.isVisible(this.firstOffer))
	}
}

module.exports = new ProductDetailsPage()
