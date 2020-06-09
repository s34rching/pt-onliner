const BasePage = require("./base-page")

class ProductOffersPage extends BasePage {
	constructor() {
		super()
		this.subNavigation = element(by.id("product-sub-navigation-container"))
		this.subNavActiveTab = this.subNavigation.$("li.selected")
		this.productPriceHeading = element(by.id("product-prices-head"))
		this.productPricesOrderGroup = element(by.id("product-prices-order"))
		this.productPricesFilterGroup = element(by.id("product-prices-filter"))
		this.offersTable = $(".b-offers-list-line-table__table")
		this.overlay = $(".offers-list__overlay")
		this.shopLogoByShopId = shopId => $(`a[class="logo"][href^="https://${shopId}.shop.onliner.by"]`).element(by.tagName("img"))
		this.firstOfferRow = this.offersTable.all(by.tagName("tr")).first()
		this.firstOfferProductPrice = this.firstOfferRow.$(".b-cell-1").$(".price-primary")
		this.toCartButton = this.firstOfferRow.$(".b-cell-3").$("a[data-href='https://cart.onliner.by']")
		this.shopContactsButton = this.firstOfferRow.$(".b-cell-3").$(".offers-list__button_contacts")
		this.shopWorkingHours = this.firstOfferRow.$(".b-cell-4").$(".b-cell-4__line-2")
	}
	waitForFirstShopLogoDisplayed(shopId) {
		return this.isPresentInDom(this.shopLogoByShopId(shopId))
	}
	skipPickCityModal() {
		if (this.isVisible(this.overlay)) {
			$(".offers-list__target").$(".popover-style__content").$(".button-style_primary").click()
		}
	}
}

module.exports = new ProductOffersPage()
