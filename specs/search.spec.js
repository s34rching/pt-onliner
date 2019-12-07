const HomePage = require("../page-objects/homepage")
const SearchIframe = require("../page-objects/search-iframe")
const { getProduct } = require("../helpers/get-entities")

describe("Onliner.by Products Search", () => {

	const activeProducts = getProduct("active", 5)

	beforeEach(() => {
		browser.waitForAngularEnabled(false)
	})

	activeProducts.forEach(activeProduct => {
		it("should search product by its full catalog name", () => {

			HomePage.goTo("/")
			HomePage.performSearch(activeProduct.query)
			SearchIframe.switchToSearchIframe()
			SearchIframe.waitForProductAreLoadedOnModal()
			expect(SearchIframe.resultItemProduct(activeProduct.query).isDisplayed()).toBe(true)
		})
	})

	it("should search products by category name", () => {

		const categoryName = "Мобильные телефоны"

		HomePage.goTo("/")
		HomePage.performSearch(categoryName)
		SearchIframe.switchToSearchIframe()
		SearchIframe.waitForProductAreLoadedOnModal()
		expect(SearchIframe.resultItemCategory(categoryName).isDisplayed()).toBe(true)
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

		const outOfStockProductTitle = getProduct("out-of-stock")

		HomePage.goTo("/")
		HomePage.performSearch(outOfStockProductTitle.query)
		SearchIframe.switchToSearchIframe()
		SearchIframe.waitForProductAreLoadedOnModal()
		expect(SearchIframe.resultItemProduct(outOfStockProductTitle.query).isDisplayed()).toBe(true)
		expect(SearchIframe.productPrice(outOfStockProductTitle.query).getText()).toBe("Нет в наличии")
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
		expect(browser.getCurrentUrl()).toContain(product.relativeUrl)
		expect(element(by.cssContainingText("h1.catalog-masthead__title", product.catalogTitle)).isDisplayed()).toBe(true)
	})
})
