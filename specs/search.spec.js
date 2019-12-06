const HomePage = require("../page-objects/homepage")
const SearchIframe = require("../page-objects/search-iframe")

describe("Onliner.by Products Search", () => {

	beforeEach(() => {
		browser.waitForAngularEnabled(false)
	})

	it("should search product by its full catalog name", () => {

		const productTitle = "Смартфон Apple iPhone 8 64GB (серый космос)"

		HomePage.goTo("/")
		HomePage.performSearch(productTitle)
		SearchIframe.switchToSearchIframe()
		SearchIframe.waitForProductAreLoadedOnModal()
		expect(SearchIframe.resultItemProduct(productTitle).isDisplayed()).toBe(true)
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

		const productTitle = "Смартфон Apple iPhone 8 64GB (серый космос)"

		HomePage.goTo("/")
		HomePage.performSearch(productTitle)
		SearchIframe.switchToSearchIframe()
		SearchIframe.waitForProductAreLoadedOnModal()
		expect(SearchIframe.resultItemProduct(productTitle).isDisplayed()).toBe(true)
		SearchIframe.closeSearchModal()
		SearchIframe.isNotVisible(SearchIframe.resultItemProduct(productTitle))
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

		const outOfStockProductTitle = "Akara Samurai [ASAI-5]"

		HomePage.goTo("/")
		HomePage.performSearch(outOfStockProductTitle)
		SearchIframe.switchToSearchIframe()
		SearchIframe.waitForProductAreLoadedOnModal()
		expect(SearchIframe.resultItemProduct(outOfStockProductTitle).isDisplayed()).toBe(true)
		expect(SearchIframe.productPrice(outOfStockProductTitle).getText()).toBe("Нет в наличии")
	})

	it("should allow to open product details page", () => {

		const product =
			{
				title: "Смартфон Apple iPhone 8 64GB (серый космос)",
				url: "https://catalog.onliner.by/mobile/apple/iphone8"
			}

		HomePage.goTo("/")
		HomePage.performSearch(product.title)
		SearchIframe.switchToSearchIframe()
		SearchIframe.waitForProductAreLoadedOnModal()
		expect(SearchIframe.resultItemProduct(product.title).isDisplayed()).toBe(true)
		SearchIframe.openProductDetailsPageByTitle(product.title)
		SearchIframe.switchToDefaultFrame()
		expect(browser.getCurrentUrl()).toBe(product.url)
		expect(element(by.cssContainingText("h1.catalog-masthead__title", product.title)).isDisplayed()).toBe(true)
	})
})
