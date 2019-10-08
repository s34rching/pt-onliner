const basePage = require("../page-objects/base-page")
const homePage = require("../page-objects/homepage")

describe("Onliner.by Products Search", () => {

	beforeEach(() => {
		browser.waitForAngularEnabled(false)
	})

	xit("should search product by its full product name", () => {
		basePage.openPage("/")
		basePage.performSearch("Samsung")
	})

	xit("should search products by category name", () => {

	})

	xit("should allow to abort search", () => {

	})

	xit("should NOT find non-existent product", () => {

	})

	it("should find product while navigating through the pages", () => {
		basePage.openPage("/")
		homePage.openCatalog()
	})
})
