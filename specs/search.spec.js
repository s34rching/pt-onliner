const basePage = require("../page-objects/base-page")

describe("Onliner.by Products Search", () => {

	beforeEach(() => {
		browser.waitForAngularEnabled(false)
	})

	it("should search product by its full product name", () => {
		basePage.openPage("/")
		basePage.performSearch("Samsung")
	})

	it("should search products by category name", () => {

	})

	it("should allow to abort search", () => {

	})

	it("should NOT find non-existent product", () => {

	})
})
