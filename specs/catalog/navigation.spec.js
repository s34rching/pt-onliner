const HomePage = require("../../page-objects/homepage")
const Catalog = require("../../page-objects/catalog")
const entities = require("../../helpers/get-entities")

describe("Onliner.by - Catalog / Navigation", () => {

	let randomClassifierItem

	beforeAll(() => {
		randomClassifierItem = entities.getRandomClassifierItem()
	})

	beforeEach(() => {
		browser.waitForAngularEnabled(false)
	})

	describe("When user uses pages navigation through the 'Catalog'", () => {

		it("then they should be able to open subcategory product details page", () => {

			const randomCategoryItem = entities.getRandomUniqueCategory(randomClassifierItem)
			const randomSubcategoryItem = entities.getRandomUniqueSubcategory(randomCategoryItem)

			HomePage.goTo("/")
				.then(() => { HomePage.openCatalog() })
				.then(() => { Catalog.chooseClassifierItem(randomClassifierItem.id) })
				.then(() => { Catalog.focusCategoryItem(randomCategoryItem.ruName) })
				.then(() => { Catalog.openSubcategory(randomSubcategoryItem) })
				.then(() => { Catalog.openCategoryFirstProductDetailsPage() })
				.then(() => {
					browser.wait(protractor.ExpectedConditions.visibilityOf(element(by.css(".product"))))
					expect(element(by.css("#product-sub-navigation-container")).isDisplayed()).toBe(true)
					expect(element(by.css("#specs")).isDisplayed()).toBe(true)
				})
		})

		it("then they should be able to open subcategory pages following bar links", () => {

			HomePage.goTo("/")
				.then(() => { HomePage.openCatalog() })
				.then(() => { Catalog.followRandomCatalogBarLink() })
				.then(() => {
					expect(element.all(by.css(".schema-product__group")).first().isDisplayed()).toBe(true)
					expect(element(by.css("#schema-filter")).isDisplayed()).toBe(true)
				})
		})

		it("then they should be able to open subcategory pages following main tile links", () => {

			const randomMainTile = entities.getRandomCatalogMainTile()

			HomePage.goTo("/")
				.then(() => { HomePage.openCatalog() })
				.then(() => { Catalog.followTilesLinks(randomMainTile.ruName) })
				.then(() => {
					expect(element.all(by.css(".schema-product__group")).first().isDisplayed()).toBe(true)
					expect(element(by.css("#schema-filter")).isDisplayed()).toBe(true)
					expect(browser.getCurrentUrl()).toContain(randomMainTile.path)
				})
		})

		it("then they should be able to open subcategory pages following section tile links", () => {

			const randomSectionTile = entities.getRandomSectionTile(randomClassifierItem)

			HomePage.goTo("/")
				.then(() => { HomePage.openCatalog() })
				.then(() => { Catalog.chooseClassifierItem(randomClassifierItem.id) })
				.then(() => { Catalog.followTilesLinks(randomSectionTile.ruName) })
				.then(() => {
					expect(element.all(by.css(".schema-product__group")).first().isDisplayed()).toBe(true)
					expect(element(by.css("#schema-filter")).isDisplayed()).toBe(true)
					expect(browser.getCurrentUrl()).toContain(randomSectionTile.path)
				})
		})
	})
})

