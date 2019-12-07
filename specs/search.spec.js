const HomePage = require("../page-objects/homepage")
const Catalog = require("../page-objects/catalog")
const SearchIframe = require("../page-objects/search-iframe")
const ProductDetailsPage = require("../page-objects/product-details-page")
const { getProduct, getRandomUniqueSubcategory, getRandomUniqueCategory, getRandomClassifierItem } = require("../helpers/get-entities")
const chai = require("chai")
const assert = chai.assert

describe("Onliner.by Products Search", () => {

	const activeProducts = getProduct("active", 5)

	beforeEach(() => {
		browser.waitForAngularEnabled(false)
	})

	activeProducts.forEach(activeProduct => {
		it(`should search "${activeProduct.catalogTitle}" by its full name`, () => {

			HomePage.goTo("/")
			HomePage.performSearch(activeProduct.query)
			SearchIframe.switchToSearchIframe()
			SearchIframe.waitForProductAreLoadedOnModal()
			expect(SearchIframe.resultItemProduct(activeProduct.query).isDisplayed()).toBe(true)
			SearchIframe.productPrice(activeProduct.query).getText().then(text => {
				assert.closeTo(activeProduct.price, parseInt(text.match(/\d+/)[0]), activeProduct.accuracy)
			})
		})
	})

	it("should search products by subcategory name", () => {

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
		expect(Catalog.categoryFirstProduct.isDisplayed()).toBe(true)
	})

	it("should allow to abort search", () => {

		const product = getProduct("active")

		HomePage.goTo("/")
		HomePage.performSearch(product.query)
		SearchIframe.switchToSearchIframe()
		SearchIframe.waitForProductAreLoadedOnModal()
		expect(SearchIframe.resultItemProduct(product.query).isDisplayed()).toBe(true)
		SearchIframe.closeSearchModal()
		SearchIframe.isNotVisible(SearchIframe.resultItemProduct(product.query))
	})

	it("should NOT find non-existent product", () => {

		const nonExistentProductTitle = "Rigth now i have"

		HomePage.goTo("/")
		HomePage.performSearch(nonExistentProductTitle)
		SearchIframe.switchToSearchIframe()
		expect(SearchIframe.firstResultItemProduct.isPresent()).toBe(false)
		//expect(element(by.css(".search__suggest-addon")).getText()).toBe("Ничего не найдено")
	})

	it("should show 'out of stock' product", () => {

		const outOfStockProduct = getProduct("out-of-stock")

		HomePage.goTo("/")
		HomePage.performSearch(outOfStockProduct.query)
		SearchIframe.switchToSearchIframe()
		SearchIframe.waitForProductAreLoadedOnModal()
		expect(SearchIframe.resultItemProduct(outOfStockProduct.query).isDisplayed()).toBe(true)
		expect(SearchIframe.productPrice(outOfStockProduct.query).getText()).toBe(outOfStockProduct.label)
	})

	it("should show 'off sale' product", () => {

		const offSaleProduct = getProduct("off-sale")

		HomePage.goTo("/")
		HomePage.performSearch(offSaleProduct.query)
		SearchIframe.switchToSearchIframe()
		SearchIframe.waitForProductAreLoadedOnModal()
		expect(SearchIframe.resultItemProduct(offSaleProduct.query).isDisplayed()).toBe(true)
		expect(SearchIframe.productPrice(offSaleProduct.query).getText()).toBe(offSaleProduct.label)
	})

	it("should allow to open product details page", () => {

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
