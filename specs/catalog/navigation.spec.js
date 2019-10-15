const HomePage = require("../../page-objects/homepage")
const Catalog = require("../../page-objects/catalog")
// const productsTree = require("../../fixtures/products-tree")
const _ = require("lodash")

describe("Onliner.by - Catalog / Navigation", () => {

	beforeEach(() => {
		browser.waitForAngularEnabled(false)
	})

	it("should find products while navigating through the pages", () => {
		HomePage.goTo("/")
		HomePage.openCatalog()
		Catalog.chooseClassifierItem(2)
		Catalog.waitForCategoriesLeftNav()
		Catalog.focusCategoryItem("Комплектующие")
		browser.sleep(5000)
	})
})
