const ProductsList = require("../page-objects/products-list")
const ProductDetailsPage = require("../page-objects/product-details-page")
const LoginPage = require("../page-objects/login-page")
const api = require("../helpers/onliner-api")

describe("Onliner.by - Catalog / Products List - Used", () => {

	let usedCPUs, firstUsedOffer

	beforeAll(done => {
		api.getProducts("cpu/second-offers?segment=second").then(res => {
			usedCPUs = JSON.parse(res)
			firstUsedOffer = usedCPUs.offers[0]
			done()
		})
	})

	beforeEach(() => {
		browser.waitForAngularEnabled(false)
	})

	it("User should be able to switch to 'used' offers", () => {
		ProductsList.goTo("/cpu")
		ProductsList.switchToSection("Объявления")
		ProductsList.waitForUrlContains("/cpu?segment=second")
		expect(ProductsList.createUsedOfferButton.isDisplayed()).toBe(true)
	})

	it("List of offers should be displayed", () => {
		ProductsList.goTo("/cpu?segment=second")
		ProductsList.waitForProperTotalOfFoundProducts(usedCPUs.total.toString())
		expect(ProductsList.productByTitle(firstUsedOffer.product.full_name).isDisplayed()).toBe(true)
	})

	it("User should be able to open offer", () => {
		ProductsList.goTo("/cpu?segment=second")
		ProductsList.waitForProperTotalOfFoundProducts(usedCPUs.total.toString())
		ProductsList.openUsedUserProductOfferByProductName(firstUsedOffer.product.full_name)
		ProductDetailsPage.waitForUsedProductPrice()
		expect(ProductsList.usedProductConditionsCircleByProductTitle(firstUsedOffer.product.full_name).isDisplayed()).toBe(true)
	})

	it("Used product price should be displayed", () => {
		ProductsList.open(firstUsedOffer.html_url)
		expect(ProductDetailsPage.usedProductPrice.isDisplayed()).toBe(true)
	})

	it("Used product conditions should be displayed", () => {
		ProductsList.open(firstUsedOffer.html_url)
		expect(ProductDetailsPage.usedProductConditions(firstUsedOffer.condition).isDisplayed()).toBe(true)
	})

	it("Used product description should be displayed", () => {
		ProductsList.open(firstUsedOffer.html_url)
		ProductDetailsPage.scrollElementIntoView(ProductDetailsPage.usedProductNameHeading)
		expect(ProductDetailsPage.usedProductDescription.isDisplayed()).toBe(true)
	})

	it("Creation of new 'used' offer requires user to be logged in", () => {
		ProductsList.goTo("/cpu?segment=second")
		ProductsList.waitForProperTotalOfFoundProducts(usedCPUs.total.toString())
		ProductsList.createUserUsedProductOffer()
		ProductsList.waitForUrlContains("/login?redirect")
		expect(LoginPage.authFormTitle.isDisplayed()).toBe(true)
	})
})
