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
		HomePage.openCatalog()
		Catalog.chooseClassifierItem(randomClassifierItem.id)
		Catalog.waitForCategoriesLeftNav()
		Catalog.focusCategoryItem(randomCategoryItem.ruName)
		Catalog.waitForSubcategoriesDropDown()
		Catalog.openSubcategory(randomSubcategoryItem.ruName)
	})
})
