const ProductsList = require("../page-objects/products-list")

describe("Onliner.by - Catalog / Products List", () => {

	beforeEach(() => {
		browser.waitForAngularEnabled(false)
	})

	xit("default sort order is set as 'Popular'", () => {
		ProductsList.goTo("/cpu")
		ProductsList.waitForOrderDefaultOptionIsDisplayed()
		ProductsList.orderDropdownActiveOrderOption.getText().then(text => {
			expect(text).toBe("популярные")
		})
	})
	xit("user should be able to order products", () => {

	})
	xit("user should be able to filter products", () => {

	})
	xit("user should be able to reset filters", () => {

	})
	xit("user should be able to add products for comparison", () => {

	})
	xit("user should be able to open offers list page", () => {

	})
	xit("user should be able to observe user's ads", () => {

	})
	xit("user should be able to create ad", () => {
		ProductsList.goTo("/cpu")
		ProductsList.switchToUsedAdsList("Объявления")
		ProductsList.initiateCreationOfUsedAd()
		browser.sleep(5000)
	})
})
