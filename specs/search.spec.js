const HomePage = require("../page-objects/homepage")
const Catalog = require("../page-objects/catalog")

describe("Onliner.by Products Search", () => {

	beforeEach(() => {
		browser.waitForAngularEnabled(false)
	})

	it("should search product by its full product name", () => {
		HomePage.goTo("/")
		HomePage.performSearch("Samsung")
		browser.sleep(5000)
	})

	xit("should search products by category name", () => {

	})

	xit("should allow to abort search", () => {

	})

	xit("should NOT find non-existent product", () => {

	})

	xit("should find product while navigating through the pages", () => {
		HomePage.goTo("/")
		HomePage.openCatalog()
		Catalog.chooseClassifierItem(1)
	})
})
