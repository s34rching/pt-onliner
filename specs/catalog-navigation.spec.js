const HomePage = require("../page-objects/homepage")
const Catalog = require("../page-objects/catalog")
const ProductsList = require("../page-objects/products-list")
const entities = require("../helpers/get-entities")

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

	describe("When user navigates through the 'Catalog'", () => {

		describe("And goes basic navigation path", () => {

			it("Then they should be able to open product details page", () => {

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
		})

		describe("And clicks on a random link in the top bar", () => {

			it("Then they should be navigated to subcategory pages", () => {

				HomePage.goTo("/")
				HomePage.openCatalog()
				Catalog.followRandomCatalogBarLink()
				expect(browser.wait(ProductsList.isVisible(ProductsList.product()))).toBe(true)
				browser.wait(protractor.ExpectedConditions.visibilityOf(element(by.css("#schema-filter"))))
			})
		})

		describe("And clicks on a random tile on the catalog main page", () => {

			it("Then they should be navigated to subcategory pages", () => {

				const randomMainTile = entities.getRandomCatalogMainTile()

				HomePage.goTo("/")
				HomePage.openCatalog()
				Catalog.followTilesLinks(randomMainTile.ruName)
				expect(browser.wait(ProductsList.isVisible(ProductsList.product()))).toBe(true)
				expect(element(by.css("#schema-filter")).isDisplayed()).toBe(true)
				expect(browser.getCurrentUrl()).toContain(randomMainTile.path)
			})
		})

		describe("And clicks on a random tile on the section tiles pane", () => {

			it("Then they should be navigated to subcategory pages", () => {

				const randomSectionTile = entities.getRandomSectionTile(randomClassifierItem)

				HomePage.goTo("/")
				HomePage.openCatalog()
				Catalog.chooseClassifierItem(randomClassifierItem.id)
				Catalog.followTilesLinks(randomSectionTile.ruName)
				expect(browser.wait(ProductsList.isVisible(ProductsList.product()))).toBe(true)
				expect(element(by.css("#schema-filter")).isDisplayed()).toBe(true)
				expect(browser.getCurrentUrl()).toContain(randomSectionTile.path)
			})
		})

		describe("And gets navigated to subcategory pages", () => {

			describe("And repeats navigation", () => {

				it("Then they should be navigated to subcategory pages", () => {

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
					expect(browser.wait(Catalog.isVisible(element(by.css("#specs"))))).toBe(true)
				})
			})
		})
	})
})
