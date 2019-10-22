const HomePage = require("../../page-objects/homepage")
const Catalog = require("../../page-objects/catalog")
const entities = require("../../helpers/get-entities")

describe("Onliner.by - Catalog / Navigation", () => {

	beforeEach(() => {
		browser.waitForAngularEnabled(false)
	})

	describe("When user uses pages navigation through the 'Catalog'", () => {
		it("then they should be able to products on subcategory pages", () => {

			const randomClassifierItem = entities.getRandomClassifierItem()
			const randomCategoryItem = entities.getRandomCategory(randomClassifierItem)
			const randomSubcategoryItem = entities.getRandomSubcategory(randomCategoryItem)

			HomePage.goTo("/")
				.then(() => { HomePage.openCatalog() })
				.then(() => { Catalog.chooseClassifierItem(randomClassifierItem.id) })
				.then(() => { Catalog.focusCategoryItem(randomCategoryItem.ruName) })
				.then(() => { Catalog.openSubcategory(randomSubcategoryItem.ruName) })
				.then(() => {
					expect(element(by.css("h1.schema-header__title")).getText()).toBe(randomSubcategoryItem.ruName)
					expect(element(by.css("#schema-products")).isDisplayed()).toBe(true)
					expect(element(by.css("#schema-filter")).isDisplayed()).toBe(true)
				})
		})
	})

})

// TODO: search sequence object
// TODO: add subcategory name to fixture
