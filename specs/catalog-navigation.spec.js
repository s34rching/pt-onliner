const HomePage = require("../page-objects/homepage")
const Catalog = require("../page-objects/catalog")
const ProductsList = require("../page-objects/products-list")
const ProductDetailsPage = require("../page-objects/product-details-page")
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

		HomePage.goTo("/")
		HomePage.openCatalog()
	})

	describe("When user navigates through the 'Catalog'", () => {

		describe("And goes basic navigation path", () => {

			it("Then they should be able to open product details page", () => {

				Catalog.chooseClassifierItem(randomClassifierItem.id)
				Catalog.hoverCategoryItem(randomCategoryItem.ruName)
				Catalog.openSubcategory(randomSubcategoryItem)
				Catalog.openCategoryFirstProductDetailsPage()
				expect(browser.wait(ProductDetailsPage
					.isVisible(ProductDetailsPage.productOfferDescription))).toBe(true)
				expect(browser.wait(ProductDetailsPage
					.isVisible(ProductDetailsPage.productOffers))).toBe(true)
				ProductsList.scrollElementIntoView(ProductDetailsPage.productTechDescription)
				expect(browser.wait(ProductDetailsPage
					.isVisible(ProductDetailsPage.productTechDescription))).toBe(true)
			})
		})

		describe("And clicks on a random link in the top bar", () => {

			it("Then they should be navigated to subcategory pages", () => {

				Catalog.followRandomCatalogBarLink()
				expect(browser.wait(ProductsList.isVisible(ProductsList.product()))).toBe(true)
				expect(browser.wait(ProductsList.isVisible(ProductsList.filters))).toBe(true)
			})
		})

		xdescribe("And clicks on a random tile on the catalog main page", () => {

			it("Then they should be navigated to subcategory pages", () => {

				const randomMainTile = entities.getRandomCatalogMainTile()

				Catalog.followTilesLinks(randomMainTile.ruName)
				expect(browser.wait(ProductsList.isVisible(ProductsList.product()))).toBe(true)
				expect(browser.wait(ProductsList.isVisible(ProductsList.filters))).toBe(true)
				expect(browser.getCurrentUrl()).toContain(randomMainTile.path)
			})
		})

		describe("And clicks on a random tile on the section tiles pane", () => {

			it("Then they should be navigated to subcategory pages", () => {

				const randomSectionTile = entities.getRandomSectionTile(randomClassifierItem)

				Catalog.chooseClassifierItem(randomClassifierItem.id)
				Catalog.followTilesLinks(randomSectionTile.ruName)
				expect(browser.wait(ProductsList.isVisible(ProductsList.product()))).toBe(true)
				expect(browser.wait(ProductsList.isVisible(ProductsList.filters))).toBe(true)
				expect(browser.getCurrentUrl()).toContain(randomSectionTile.path)
			})
		})

		describe("And gets navigated to subcategory pages", () => {

			describe("And repeats navigation", () => {

				it("Then they should be navigated to subcategory pages", () => {

					const secondRandomClassifierItem = entities.getRandomClassifierItem()
					const secondRandomCategoryItem = entities.getRandomUniqueCategory(secondRandomClassifierItem)
					const secondRandomSubcategoryItem = entities.getRandomUniqueSubcategory(secondRandomCategoryItem)

					Catalog.chooseClassifierItem(randomClassifierItem.id)
					Catalog.hoverCategoryItem(randomCategoryItem.ruName)
					Catalog.openSubcategory(randomSubcategoryItem)
					Catalog.chooseClassifierItem(secondRandomClassifierItem.id)
					Catalog.hoverCategoryItem(secondRandomCategoryItem.ruName)
					Catalog.openSubcategory(secondRandomSubcategoryItem)
					Catalog.openCategoryFirstProductDetailsPage()
					expect(browser.wait(ProductDetailsPage
						.isVisible(ProductDetailsPage.productOfferDescription))).toBe(true)
					expect(browser.wait(ProductDetailsPage
						.isVisible(ProductDetailsPage.productOffers))).toBe(true)
					ProductsList.scrollElementIntoView(ProductDetailsPage.productTechDescription)
					expect(browser.wait(ProductDetailsPage
						.isVisible(ProductDetailsPage.productTechDescription))).toBe(true)
				})
			})
		})
	})
})
