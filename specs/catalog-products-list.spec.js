let ProductsList = require("../page-objects/products-list")
let ProductOffers = require("../page-objects/product-offers-page")
const api = require("../helpers/onliner-api")
const _ = require("lodash")

describe("Onliner.by - Catalog / Products List", () => {

	const numberOfProductsToCompare = 2
	let allCPUs, CPUsFilteredByRating, intelCPUs, shopList

	beforeAll(done => {
		api.getProducts("cpu").then(res => allCPUs = JSON.parse(res))
		api.getProducts("cpu?order=reviews_rating:desc").then(res => CPUsFilteredByRating = JSON.parse(res))
		api.getProducts("cpu?mfr[0]=intel").then(res => intelCPUs = JSON.parse(res))
		api.getOffers("products/i59400fb/positions?town=minsk").then(res => shopList = JSON.parse(res))
		done()
	})

	beforeEach(() => {
		browser.waitForAngularEnabled(false)

		ProductsList.goTo("/cpu")
	})

	fit("Then products default sort order is set as 'Popular'", () => {
		expect(ProductsList.orderDropdownActiveOrderOption.getText()).toBe("популярные")
	})

	it("then products in the list should be ordered by their reviews", () => {
		const reviews = _.map(CPUsFilteredByRating.products, product => product.reviews.count)

		ProductsList.openOrderListDropDown()
		ProductsList.waitForOrderDropdownListIsVisible()
		ProductsList.chooseOrderDropdownOptionByName("С отзывами")
		ProductsList.waitForUrlContains("?order=reviews_rating:desc")
		ProductsList.waitForActiveOrderOptionByName("С отзывами")
		ProductsList.waitForProperTotalOfFoundProducts(CPUsFilteredByRating.total.toString())
		ProductsList.productRewievs.each((review, index) => expect(review.getText()).toContain(reviews[index]))
	})

	it("then products list should contain products of that manufacturer only", () => {
		ProductsList.scrollElementIntoView(ProductsList.filterByName("Производитель"))
		ProductsList.filterProducts("Производитель", "Intel")
		ProductsList.scrollElementIntoView(ProductsList.productsListTitle)
		ProductsList.waitForUrlContains("cpu?mfr%5B0%5D=intel")
		ProductsList.waitForSearchTagIsDisplayed("Intel")
		ProductsList.waitForProperTotalOfFoundProducts(intelCPUs.total.toString())
		ProductsList.productsTitles.each(title => expect(title.getText()).toContain("Intel"))
	})

	it("then products list should be restored to its initial state", () => {
		ProductsList.waitForProperTotalOfFoundProducts(allCPUs.total.toString())
		ProductsList.scrollElementIntoView(ProductsList.filterByName("Производитель"))
		ProductsList.filterProducts("Производитель", "Intel")
		ProductsList.scrollElementIntoView(ProductsList.productsListTitle)
		ProductsList.waitForUrlContains("cpu?mfr%5B0%5D=intel")
		ProductsList.waitForSearchTagIsDisplayed("Intel")
		ProductsList.waitForProperTotalOfFoundProducts(intelCPUs.total.toString())
		ProductsList.resetFilters()
		ProductsList.waitForProperTotalOfFoundProducts(allCPUs.total.toString())
	})

	it("Then they should be able to open comparison page", done => {
		api.getProducts("cpu").then(res => {
			const allCPUs = JSON.parse(res)

			const firstProduct = allCPUs.products[0]
			const secondProduct = allCPUs.products[1]
			const firstProductShortName = firstProduct.url.match(/(?<=\/products\/).+$/)[0]
			const secondProductShortName = secondProduct.url.match(/(?<=\/products\/).+$/)[0]

			ProductsList.markProductsToCompare(numberOfProductsToCompare)
			ProductsList.compareProducts(numberOfProductsToCompare)
			ProductsList.waitForUrlContains(`/compare/${firstProductShortName}+${secondProductShortName}`)
			expect(ProductsList.productComparisonName(firstProduct.full_name).isDisplayed()).toBe(true)
			expect(ProductsList.productComparisonName(secondProduct.full_name).isDisplayed()).toBe(true)
			ProductsList.clearComparisonList()
			done()
		})
	})

	it("Then they should be able to find complete shop info to purchase the chosen product", () => {

		const [firstProduct] = allCPUs.products
		const [firstShop] = shopList.positions.primary

		ProductsList.openFirstProductOffersPage()
		ProductsList.waitForUrlContains(firstProduct.html_url)
		ProductOffers.isPresentInDom(ProductOffers.productPriceHeading)
		ProductOffers.scrollElementIntoView(ProductOffers.productPriceHeading)
		ProductOffers.skipPickCityModal()
		expect(ProductOffers.waitForFirstShopLogoDisplayed(firstShop.shop_id)).toBe(true)
		expect(ProductOffers.productPricesOrderGroup.isDisplayed()).toBe(true)
		expect(ProductOffers.productPricesFilterGroup.isDisplayed()).toBe(true)
		expect(ProductOffers.firstOfferProductPrice.isDisplayed()).toBe(true)
		expect(ProductOffers.toCartButton.isDisplayed()).toBe(true)
		expect(ProductOffers.shopContactsButton.isDisplayed()).toBe(true)
		expect(ProductOffers.shopWorkingHours.getText()).toContain("Магазин сегодня работает с")
	})
})
