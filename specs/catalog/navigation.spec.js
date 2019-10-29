const HomePage = require("../../page-objects/homepage")
const Catalog = require("../../page-objects/catalog")
const entities = require("../../helpers/get-entities")

describe("Onliner.by - Catalog / Navigation", () => {

	let randomClassifierItem
	let randomCategoryItem
	let randomSubcategoryItem

	beforeAll(() => {
		randomClassifierItem = entities.getRandomClassifierItem()
		randomCategoryItem = entities.getRandomUniqueCategory(randomClassifierItem)
		randomSubcategoryItem = entities.getRandomUniqueSubcategory(randomCategoryItem)
	})

	beforeEach(() => {
		browser.waitForAngularEnabled(false)
	})

	describe("When user uses pages navigation through the 'Catalog'", () => {

		it("then they should be able to open subcategory product details page", () => {

			HomePage.goTo("/")
				.then(() => { HomePage.openCatalog() })
				.then(() => { Catalog.chooseClassifierItem(randomClassifierItem.id) })
				.then(() => { Catalog.hoverCategoryItem(randomCategoryItem.ruName) })
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

		it("then they should be able to navigate through Catalog again while they are on Categories page", () => {

			const secondRandomClassifierItem = entities.getRandomClassifierItem()
			const secondRandomCategoryItem = entities.getRandomUniqueCategory(secondRandomClassifierItem)
			const secondRandomSubcategoryItem = entities.getRandomUniqueSubcategory(secondRandomCategoryItem)

			HomePage.goTo("/")
				.then(() => { HomePage.openCatalog() })
				.then(() => { Catalog.chooseClassifierItem(randomClassifierItem.id) })
				.then(() => { Catalog.hoverCategoryItem(randomCategoryItem.ruName) })
				.then(() => { Catalog.openSubcategory(randomSubcategoryItem) })
				.then(() => { Catalog.chooseClassifierItem(secondRandomClassifierItem.id) })
				.then(() => { Catalog.hoverCategoryItem(secondRandomCategoryItem.ruName) })
				.then(() => { Catalog.openSubcategory(secondRandomSubcategoryItem) })
				.then(() => { Catalog.openCategoryFirstProductDetailsPage() })
				.then(() => {
					browser.wait(protractor.ExpectedConditions.visibilityOf(element(by.css(".product"))))
					expect(element(by.css("#product-sub-navigation-container")).isDisplayed()).toBe(true)
					expect(element(by.css("#specs")).isDisplayed()).toBe(true)
				})
		})
	})
})

