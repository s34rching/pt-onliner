const HomePage = require("../../page-objects/homepage")
const Catalog = require("../../page-objects/catalog")
const entities = require("../../helpers/get-entities")

describe("Onliner.by - Catalog / Navigation", () => {

	beforeEach(() => {
		browser.waitForAngularEnabled(false)
	})

	it("should find products while navigating through the pages", () => {

		const randomClassifierItem = entities.getRandomClassifierItem()
		const randomCategoryItem = entities.getRandomCategory(randomClassifierItem)
		const randomSubcategoryItem = entities.getRandomSubcategory(randomCategoryItem)

		HomePage.goTo("/")
			.then(() => { HomePage.openCatalog() })
			.then(() => { Catalog.chooseClassifierItem(randomClassifierItem.id) })
			.then(() => { Catalog.focusCategoryItem(randomCategoryItem.ruName) })
			.then(() => { Catalog.openSubcategory(randomSubcategoryItem.ruName) })
	})
})

// TODO: search sequence object
