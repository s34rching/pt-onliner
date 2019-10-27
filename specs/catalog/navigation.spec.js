const HomePage = require("../../page-objects/homepage")
const Catalog = require("../../page-objects/catalog")
const entities = require("../../helpers/get-entities")

describe("Onliner.by - Catalog / Navigation", () => {

	beforeEach(() => {
		browser.waitForAngularEnabled(false)
	})

	describe("When user uses pages navigation through the 'Catalog'", () => {

		xit("then they should be able to products on subcategory pages", () => {

			const randomClassifierItem = entities.getRandomClassifierItem()
			const randomCategoryItem = entities.getRandomUniqueCategory(randomClassifierItem)
			const randomSubcategoryItem = entities.getRandomUniqueSubcategory(randomCategoryItem)

			HomePage.goTo("/")
				.then(() => { HomePage.openCatalog() })
				.then(() => { Catalog.chooseClassifierItem(randomClassifierItem.id) })
				.then(() => { Catalog.focusCategoryItem(randomCategoryItem.ruName) })
				.then(() => { Catalog.openSubcategory(randomSubcategoryItem) })
				.then(() => {
					expect(element(by.css("h1.schema-header__title")).getText()).toBe(randomSubcategoryItem.subcategoryPageRuHeading)
					expect(element(by.css("#schema-products")).isDisplayed()).toBe(true)
					expect(element(by.css("#schema-filter")).isDisplayed()).toBe(true)
				})
		})

		xit("then they should be able to open subcategory pages following bar links", () => {

			HomePage.goTo("/")
				.then(() => { HomePage.openCatalog() })
				.then(() => { Catalog.followRandomCatalogBarLink() })
				.then(() => {
					expect(element.all(by.css(".schema-product__group")).first().isDisplayed()).toBe(true)
					expect(element(by.css("#schema-filter")).isDisplayed()).toBe(true)
				})
		})

		xit("then they should be able to open subcategory pages following main tile links", () => {

			const randomMainTile = entities.getRandomCatalogMainTile()

			HomePage.goTo("/")
				.then(() => { HomePage.openCatalog() })
				.then(() => { Catalog.followTilesLinks(randomMainTile.ruName) })
				.then(() => {
					expect(element.all(by.css(".schema-product__group")).first().isDisplayed()).toBe(true)
					expect(element(by.css("#schema-filter")).isDisplayed()).toBe(true)
					expect(browser.getCurrentUrl()).toEqual(randomMainTile.path)
				})
		})

		it("then they should be able to open subcategory pages following section tile links", () => {

			const randomMainTile = entities.getRandomCatalogMainTile()
			const randomClassifierItem = entities.getRandomClassifierItem()
			const randomSectionTile = entities.getRandomSectionTile(randomClassifierItem)

			HomePage.goTo("/")
				.then(() => { HomePage.openCatalog() })
				.then(() => { Catalog.chooseClassifierItem(randomClassifierItem.id) })
				.then(() => { Catalog.followTilesLinks(randomSectionTile.ruName) })
				.then(() => {
					expect(element.all(by.css(".schema-product__group")).first().isDisplayed()).toBe(true)
					expect(element(by.css("#schema-filter")).isDisplayed()).toBe(true)
					expect(browser.getCurrentUrl()).toEqual(randomMainTile.path)
				})
		})
	})
})

