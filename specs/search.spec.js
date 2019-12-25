const HomePage = require("../page-objects/homepage")
const ProductsList = require("../page-objects/products-list")
const SearchIframe = require("../page-objects/search-iframe")
const ProductDetailsPage = require("../page-objects/product-details-page")
const { getProduct, getRandomUniqueSubcategory, getRandomUniqueCategory, getRandomClassifierItem } = require("../helpers/get-entities")
const chai = require("chai")
const assert = chai.assert

describe("Onliner.by - Products / Search", () => {

	const activeProducts = getProduct("active", 5)

	beforeEach(() => {
		browser.waitForAngularEnabled(false)
	})

	describe("When user triggers search bar", () => {

		describe("And search for an active products by their catalog name", () => {

			activeProducts.forEach(activeProduct => {
				describe(`"${activeProduct.catalogTitle}"`, () => {

					it("Then product should be found", () => {

						HomePage.goTo("/")
						HomePage.performSearch(activeProduct.query)
						SearchIframe.switchToSearchIframe()
						SearchIframe.waitForProductAreLoadedOnModal()
						expect(browser.wait(SearchIframe.isVisible(SearchIframe.resultItemProduct(activeProduct.query)))).toBe(true)
						SearchIframe.productPrice(activeProduct.query).getText().then(text => {
							assert.closeTo(activeProduct.price, parseInt(text.match(/\d+/)[0]), activeProduct.accuracy)
						})
					})
				})
			})
		})

		describe("And search particular type of products", () => {

			it("Then they should be able to be navigated to subcategory page", () => {

				const randomClassifierItem = getRandomClassifierItem()
				const randomCategory = getRandomUniqueCategory(randomClassifierItem)
				const randomSubcategory = getRandomUniqueSubcategory(randomCategory)

				HomePage.goTo("/")
				HomePage.performSearch(randomSubcategory.ruName)
				SearchIframe.switchToSearchIframe()
				SearchIframe.waitForProductAreLoadedOnModal()
				expect(SearchIframe.resultItemSubcategory(randomSubcategory.ruName).isDisplayed()).toBe(true)
				SearchIframe.openSubcategoryPage(randomSubcategory.ruName)
				expect(browser.getCurrentUrl()).toContain(randomSubcategory.path)
				expect(browser.wait(ProductsList.isVisible(ProductsList.product()))).toBe(true)
			})
		})

		describe("And search for a product", () => {

			describe("And aborts search", () => {

				it("Then search bar should be closed", () => {

					const product = getProduct("active")

					HomePage.goTo("/")
					HomePage.performSearch(product.query)
					SearchIframe.switchToSearchIframe()
					SearchIframe.waitForProductAreLoadedOnModal()
					expect(SearchIframe.resultItemProduct(product.query).isDisplayed()).toBe(true)
					SearchIframe.closeSearchModal()
					SearchIframe.isNotVisible(SearchIframe.resultItemProduct(product.query))
				})
			})
		})

		describe("And search for non-existent product", () => {

			it("Then product should NOT be found", () => {

				const nonExistentProductTitle = "Rigth now i have"

				HomePage.goTo("/")
				HomePage.performSearch(nonExistentProductTitle)
				SearchIframe.switchToSearchIframe()
				expect(SearchIframe.firstResultItemProduct.isPresent()).toBe(false)
				SearchIframe.waitForSearchSuggestionIsVisible()
				expect(SearchIframe.searchBarSuggestion.getText()).toBe("Ничего не найдено")
			})
		})

		describe("And search for 'out of stock' product", () => {

			it("Then product should be found and marked with appropriate label", () => {

				const outOfStockProduct = getProduct("out-of-stock")

				HomePage.goTo("/")
				HomePage.performSearch(outOfStockProduct.query)
				SearchIframe.switchToSearchIframe()
				SearchIframe.waitForProductAreLoadedOnModal()
				expect(SearchIframe.resultItemProduct(outOfStockProduct.query).isDisplayed()).toBe(true)
				expect(SearchIframe.productPrice(outOfStockProduct.query).getText()).toBe(outOfStockProduct.label)
			})
		})

		describe("And search for 'off sale' product", () => {

			it("Then product should be found and marked with appropriate label", () => {

				const offSaleProduct = getProduct("off-sale")

				HomePage.goTo("/")
				HomePage.performSearch(offSaleProduct.query)
				SearchIframe.switchToSearchIframe()
				SearchIframe.waitForProductAreLoadedOnModal()
				expect(SearchIframe.resultItemProduct(offSaleProduct.query).isDisplayed()).toBe(true)
				expect(SearchIframe.productPrice(offSaleProduct.query).getText()).toBe(offSaleProduct.label)
			})
		})

		describe("And search for a product", () => {

			describe("And clicks on product card on search results page", () => {

				it("Then they should be able to see product details", () => {

					const product = getProduct()

					HomePage.goTo("/")
					HomePage.performSearch(product.query)
					SearchIframe.switchToSearchIframe()
					SearchIframe.waitForProductAreLoadedOnModal()
					expect(SearchIframe.resultItemProduct(product.query).isDisplayed()).toBe(true)
					SearchIframe.openProductDetailsPageByTitle(product.query)
					SearchIframe.switchToDefaultFrame()
					if (product.status === "active") {
						ProductDetailsPage.waitForFirstShopOfferVisible()
						ProductDetailsPage.firstOfferPrice.getText().then(text => {
							assert.closeTo(product.price, parseInt(text.match(/\d+/)[0]), product.accuracy)
						})
					}
					expect(browser.getCurrentUrl()).toContain(product.relativeUrl)
					expect(element(by.cssContainingText("h1.catalog-masthead__title", product.catalogTitle))
						.isDisplayed()).toBe(true)
				})
			})
		})
	})
})
