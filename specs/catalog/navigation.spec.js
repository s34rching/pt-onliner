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
			HomePage.openCatalog()
			Catalog.chooseClassifierItem(randomClassifierItem.id)
			Catalog.hoverCategoryItem(randomCategoryItem.ruName)
			Catalog.openSubcategory(randomSubcategoryItem)
			Catalog.openCategoryFirstProductDetailsPage()
			browser.wait(protractor.ExpectedConditions.visibilityOf(element(by.css(".product"))))
			expect(element(by.css("#product-sub-navigation-container")).isDisplayed()).toBe(true)
			expect(element(by.css("#specs")).isDisplayed()).toBe(true)
		})

		it("then they should be able to open subcategory pages following bar links", () => {

			HomePage.goTo("/")
			HomePage.openCatalog()
			Catalog.followRandomCatalogBarLink()
			expect(element.all(by.css(".schema-product__group")).first().isDisplayed()).toBe(true)
			expect(element(by.css("#schema-filter")).isDisplayed()).toBe(true)
		})

		it("then they should be able to open subcategory pages following main tile links", () => {

			const randomMainTile = entities.getRandomCatalogMainTile()

			HomePage.goTo("/")
			HomePage.openCatalog()
			Catalog.followTilesLinks(randomMainTile.ruName)
			expect(element.all(by.css(".schema-product__group")).first().isDisplayed()).toBe(true)
			expect(element(by.css("#schema-filter")).isDisplayed()).toBe(true)
			expect(browser.getCurrentUrl()).toContain(randomMainTile.path)
		})

		it("then they should be able to open subcategory pages following section tile links", () => {

			const randomSectionTile = entities.getRandomSectionTile(randomClassifierItem)

			HomePage.goTo("/")
			HomePage.openCatalog()
			Catalog.chooseClassifierItem(randomClassifierItem.id)
			Catalog.followTilesLinks(randomSectionTile.ruName)
			expect(element.all(by.css(".schema-product__group")).first().isDisplayed()).toBe(true)
			expect(element(by.css("#schema-filter")).isDisplayed()).toBe(true)
			expect(browser.getCurrentUrl()).toContain(randomSectionTile.path)
		})

		it("then they should be able to navigate through Catalog again while they are on Categories page", () => {

			const secondRandomClassifierItem = entities.getRandomClassifierItem()
			const secondRandomCategoryItem = entities.getRandomUniqueCategory(secondRandomClassifierItem)
			const secondRandomSubcategoryItem = entities.getRandomUniqueSubcategory(secondRandomCategoryItem)

			HomePage.goTo("/")
			HomePage.openCatalog()
			Catalog.chooseClassifierItem(randomClassifierItem.id)
			Catalog.hoverCategoryItem(randomCategoryItem.ruName)
			Catalog.openSubcategory(randomSubcategoryItem)
			Catalog.chooseClassifierItem(secondRandomClassifierItem.id)
			Catalog.hoverCategoryItem(secondRandomCategoryItem.ruName)
			Catalog.openSubcategory(secondRandomSubcategoryItem)
			Catalog.openCategoryFirstProductDetailsPage()
			browser.wait(protractor.ExpectedConditions.visibilityOf(element(by.css(".product"))))
			expect(element(by.css("#product-sub-navigation-container")).isDisplayed()).toBe(true)
			expect(element(by.css("#specs")).isDisplayed()).toBe(true)
		})
	})
})

