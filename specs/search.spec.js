const HomePage = require("../page-objects/homepage")

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

	xit("should show 'out of stock' product", () => {

	})

	xit("should allow to open product details page", () => {

	})

	xit("should show initial search query in search bar", () => {

	})
})
