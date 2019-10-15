const HomePage = require("../../page-objects/homepage")
const Catalog = require("../../page-objects/catalog")

describe("Onliner.by Products Search", () => {

	beforeEach(() => {
		browser.waitForAngularEnabled(false)
	})

	it("should find product while navigating through the pages", () => {
		HomePage.goTo("/")
		HomePage.openCatalog()
		Catalog.chooseClassifierItem(1)
	})
})
