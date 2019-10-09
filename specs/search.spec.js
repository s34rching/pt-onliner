const HomePage = require("../page-objects/homepage")
const Catalog = require("../page-objects/catalog")

describe("Onliner.by Products Search", () => {

	beforeEach(() => {
		browser.waitForAngularEnabled(false)
	})

	xit("should search product by its full product name", () => {
		HomePage.openPage("/")
		HomePage.performSearch("Samsung")
	})

	xit("should search products by category name", () => {

	})

	xit("should allow to abort search", () => {

	})

	xit("should NOT find non-existent product", () => {

	})

	it("should find product while navigating through the pages", () => {
		HomePage.openPage("/")
		HomePage.openCatalog()
		Catalog.chooseClassifierItem(1)
	})
})
