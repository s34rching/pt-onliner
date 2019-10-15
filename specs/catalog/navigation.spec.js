const HomePage = require("../../page-objects/homepage")
const Catalog = require("../../page-objects/catalog")
const productsTree = require("../../fixtures/products-tree")
const _ = require("lodash")

describe("Onliner.by Products Search", () => {

	beforeEach(() => {
		browser.waitForAngularEnabled(false)
	})

	it("should find products while navigating through the pages", () => {
		HomePage.goTo("/")
		HomePage.openCatalog()
		Catalog.chooseClassifierItem(1)
		Catalog.hoverCategoryItem()
	})
})
