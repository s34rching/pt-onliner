const { EXPECTED_PRICE_CHANGE } = require("../service/rates")
const { getProductBynPrice } = require("../service/product-services")
const HomePage = require("../page-objects/homepage")
const ProductsList = require("../page-objects/products-list")
const SearchIframe = require("../page-objects/search-iframe")
const ProductDetailsPage = require("../page-objects/product-details-page")
const api = require("../helpers/onliner-api")
const entities = require("../helpers/get-entities")
const chai = require("chai")
const assert = chai.assert

describe("Onliner.by - Products / Search", () => {

	let exchangeRate
	const activeProducts = entities.getProduct("active", 5)

	beforeAll(done => {
		api.getCurrencyExchangeRates().then(res => {
			const dailyCurrencyChanges = JSON.parse(res)
			exchangeRate = parseFloat(dailyCurrencyChanges.amount.replace(",", "."))
			done()
		})
	})

	beforeEach(() => {
		browser.waitForAngularEnabled(false)

		HomePage.goTo("/")
	})

	describe("When user triggers search bar", () => {

		describe("And search for an active products by their catalog name", () => {

			activeProducts.forEach(activeProduct => {
				describe(`"${activeProduct.catalogTitle}"`, () => {

					it("Then product should be found", () => {

						const priceByn = getProductBynPrice(activeProduct, exchangeRate)

						HomePage.performSearch(activeProduct.query)
						SearchIframe.switchToSearchIframe()
						SearchIframe.waitForProductAreLoadedOnModal()
						expect(SearchIframe.isVisible(SearchIframe.resultItemProduct(activeProduct.catalogTitle))).toBe(true)
						SearchIframe.productPrice(activeProduct.catalogTitle).getText().then(text => {
							assert.closeTo(priceByn, parseInt(text.match(/\d+/)[0]), priceByn * EXPECTED_PRICE_CHANGE)
						})
					})
				})
			})
		})

		describe("And search particular type of products", () => {

			it("Then they should be able to be navigated to subcategory page", () => {

				const randomClassifierItem = entities.getRandomClassifierItem()
				const randomCategory = entities.getRandomUniqueCategory(randomClassifierItem)
				const randomSubcategory = entities.getRandomUniqueSubcategory(randomCategory)

				HomePage.performSearch(randomSubcategory.ruName)
				SearchIframe.switchToSearchIframe()
				SearchIframe.waitForProductAreLoadedOnModal()
				expect(SearchIframe.resultItemSubcategory(randomSubcategory.subcategoryPageRuHeading).isDisplayed()).toBe(true)
				SearchIframe.openSubcategoryPage(randomSubcategory.subcategoryPageRuHeading)
				expect(browser.getCurrentUrl()).toContain(randomSubcategory.path.match(/\/\w+/)[0])
				expect(ProductsList.isVisible(ProductsList.product())).toBe(true)
			})
		})

		describe("And search for a product", () => {

			describe("And aborts search", () => {

				it("Then search bar should be closed", () => {

					const product = entities.getProduct("active")

					HomePage.performSearch(product.query)
					SearchIframe.switchToSearchIframe()
					SearchIframe.waitForProductAreLoadedOnModal()
					expect(SearchIframe.resultItemProduct(product.catalogTitle).isDisplayed()).toBe(true)
					SearchIframe.closeSearchModal()
					expect(SearchIframe.isVisible(SearchIframe.searchBar)).toBe(true)
					expect(SearchIframe.isNotVisible(SearchIframe.modalSearchBar)).toBe(true)
				})
			})
		})

		describe("And search for non-existent product", () => {

			it("Then product should NOT be found", () => {

				const nonExistentProductTitle = "Rigth now i have"

				HomePage.performSearch(nonExistentProductTitle)
				SearchIframe.switchToSearchIframe()
				expect(SearchIframe.firstResultItemProduct.isPresent()).toBe(false)
				SearchIframe.waitForSearchSuggestionIsVisible()
				expect(SearchIframe.searchBarSuggestion.getText()).toBe("Ничего не найдено")
			})
		})

		describe("And search for 'out of stock' product", () => {

			it("Then product should be found and marked with appropriate label", () => {

				const outOfStockProduct = entities.getProduct("out-of-stock")

				HomePage.performSearch(outOfStockProduct.query)
				SearchIframe.switchToSearchIframe()
				SearchIframe.waitForProductAreLoadedOnModal()
				expect(SearchIframe.resultItemProduct(outOfStockProduct.catalogTitle).isDisplayed()).toBe(true)
				expect(SearchIframe.productPrice(outOfStockProduct.catalogTitle).getText()).toBe(outOfStockProduct.label)
			})
		})

		describe("And search for 'off sale' product", () => {

			it("Then product should be found and marked with appropriate label", () => {

				const offSaleProduct = entities.getProduct("off-sale")

				HomePage.performSearch(offSaleProduct.query)
				SearchIframe.switchToSearchIframe()
				SearchIframe.waitForProductAreLoadedOnModal()
				expect(SearchIframe.resultItemProduct(offSaleProduct.catalogTitle).isDisplayed()).toBe(true)
				expect(SearchIframe.productPrice(offSaleProduct.catalogTitle).getText()).toBe(offSaleProduct.label)
			})
		})

		describe("And search for a product", () => {

			describe("And clicks on product card on search results page", () => {

				it("Then they should be able to see product details", () => {

					const product = entities.getProduct()
					const priceByn = getProductBynPrice(product, exchangeRate)

					HomePage.performSearch(product.query)
					SearchIframe.switchToSearchIframe()
					SearchIframe.waitForProductAreLoadedOnModal()
					expect(SearchIframe.resultItemProduct(product.catalogTitle).isDisplayed()).toBe(true)
					SearchIframe.openProductDetailsPageByTitle(product.catalogTitle)
					SearchIframe.switchToDefaultFrame()
					if (product.status === "active") {
						ProductDetailsPage.waitForFirstShopOfferVisible()
						ProductDetailsPage.firstOfferPrice.getText().then(text => {
							assert.closeTo(priceByn, parseInt(text.match(/\d+/)[0]), priceByn * EXPECTED_PRICE_CHANGE)
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
