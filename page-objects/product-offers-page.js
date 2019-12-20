const BasePage = require("./base-page")

class ProductOffersPage extends BasePage {
	constructor() {
		super()
		this.subNavigation = element(by.id("product-sub-navigation-container"))
		this.subNavActiveTab = this.subNavigation.element(by.css("li.selected"))
		this.productPriceHeading = element(by.id("product-prices-head"))
		this.productPricesOrderGroup = element(by.id("product-prices-order"))
		this.productPricesFilterGroup = element(by.id("product-prices-filter"))
		this.offersTable = element(by.css(".b-offers-list-line-table__table"))
		this.firstOfferRow = this.offersTable.all(by.tagName("tr")).first()
		this.firstOfferProductPrice = this.firstOfferRow
			.element(by.css(".b-cell-1"))
			.element(by.tagName("span"))
		this.toCartButton = this.firstOfferRow
			.element(by.css(".b-cell-3"))
			.element(by.css("a[data-href='https://cart.onliner.by']"))
		this.shopContactsButton = this.firstOfferRow
			.element(by.css(".b-cell-3"))
			.element(by.css(".offers-list__button_contacts"))
		this.shopWorkingHours = this.firstOfferRow
			.element(by.css(".b-cell-4"))
			.element(by.css(".b-cell-4__line-2"))
	}
}

module.exports = new ProductOffersPage()
