const ProductsList = require("../page-objects/products-list")
const ProductOffers = require("../page-objects/product-offers-page")
const ProductDetailsPage = require("../page-objects/product-details-page")
const LoginPage = require("../page-objects/login-page")
const api = require("../helpers/onliner-api")

const chai = require("chai")
const assert = chai.assert

describe("Onliner.by - Catalog / Products List", () => {

	let allCPUs

	beforeAll(done => {
		api.getProducts("cpu").then(res => {
			allCPUs = JSON.parse(res)
			done()
		})
	})

	beforeEach(() => {
		browser.waitForAngularEnabled(false)

		ProductsList.goTo("/cpu")
	})

	describe("When user opens subcategory products list", () => {

		it("Then products default sort order is set as 'Popular'", () => {
			expect(ProductsList.orderDropdownActiveOrderOption.getText()).toBe("популярные")
		})
	})

	describe("When user orders out products by their reviews", () => {

		let CPUsFilteredByRating

		beforeEach(done => {
			api.getProducts("cpu?order=reviews_rating:desc").then(res => {
				CPUsFilteredByRating = JSON.parse(res)
				done()
			})
		})

		it("then products in the list should be ordered by their reviews", () => {

			let ratingsArray = []

			ProductsList.openOrderListDropDown()
			ProductsList.waitForOrderDropdownListIsVisible()
			ProductsList.chooseOrderDropdownOptionByName("С отзывами")
			ProductsList.waitForUrlContains("?order=reviews_rating:desc")
			ProductsList.waitForActiveOrderOptionByName("С отзывами")
			ProductsList.waitForProperTotalOfFoundProducts(CPUsFilteredByRating.total.toString())
			ProductsList.getProductsRating().each(rating => {
				rating.getText().then(text => { ratingsArray.push(text) })
			}).then(() => {
				for (let i = 0;  i < ratingsArray.length - 1; i++) {
					assert.isAtLeast(parseInt(ratingsArray[i]), parseInt(ratingsArray[i + 1]))
				}
			})
		})
	})

	describe("When user filters out products by their manufacturer", () => {

		let intelCPUs

		beforeEach(done => {
			api.getProducts("cpu?mfr[0]=intel").then(res => {
				intelCPUs = JSON.parse(res)
				done()
			})
		})

		it("then products list should contain products of that manufacturer only", () => {

			let productsTitles = []

			ProductsList.scrollElementIntoView(ProductsList.filterByName("Производитель"))
			ProductsList.filterProducts("Производитель", "Intel")
			ProductsList.scrollElementIntoView(ProductsList.productsListTitle)
			ProductsList.waitForUrlContains("cpu?mfr%5B0%5D=intel")
			ProductsList.waitForSearchTagIsDisplayed("Intel")
			ProductsList.waitForProperTotalOfFoundProducts(intelCPUs.total.toString())
			ProductsList.getProductsTitles().each(title => {
				title.getText().then(text => { productsTitles.push(text) })
			}).then(() => {
				productsTitles.forEach(title => {
					expect(title).toContain("Intel")
				})
			})
		})
	})

	describe("When user filtered products out", () => {

		describe("And resets applied filters back", () => {

			let amdCPUs

			beforeEach(done => {
				api.getProducts("cpu?mfr[0]=amd").then(res => {
					amdCPUs = JSON.parse(res)
					done()
				})
			})

			it("then products list should be restored to its initial state", () => {
				ProductsList.waitForProperTotalOfFoundProducts(allCPUs.total.toString())
				ProductsList.scrollElementIntoView(ProductsList.filterByName("Производитель"))
				ProductsList.filterProducts("Производитель", "AMD")
				ProductsList.scrollElementIntoView(ProductsList.productsListTitle)
				ProductsList.waitForUrlContains("cpu?mfr%5B0%5D=amd")
				ProductsList.waitForSearchTagIsDisplayed("AMD")
				ProductsList.waitForProperTotalOfFoundProducts(amdCPUs.total.toString())
				ProductsList.resetFilters()
				ProductsList.waitForProperTotalOfFoundProducts(allCPUs.total.toString())
			})
		})
	})

	describe("When user adds product to compare their characteristics", () => {

		afterEach(() => {
			ProductsList.clearComparisonList()
		})

		it("Then they should be able to open comparison page", done => {

			api.getProducts("cpu").then(res => {
				allCPUs = JSON.parse(res)

				const numberOfProductsToCompare = 2
				const firstProduct = allCPUs.products[0]
				const secondProduct = allCPUs.products[1]
				const firstProductShortName = firstProduct.url.match(/(?<=\/products\/).+$/)[0]
				const secondProductShortName = secondProduct.url.match(/(?<=\/products\/).+$/)[0]

				ProductsList.markProductsToCompare(numberOfProductsToCompare)
				ProductsList.compareProducts(numberOfProductsToCompare)
				ProductsList.waitForUrlContains(`/compare/${firstProductShortName}+${secondProductShortName}`)
				expect(ProductsList.productComparisonName(firstProduct.full_name).isDisplayed()).toBe(true)
				expect(ProductsList.productComparisonName(secondProduct.full_name).isDisplayed()).toBe(true)
				done()
			})
		})
	})

	describe("When user opens offers list page", () => {

		let shopList

		beforeEach(done => {
			api.getOffers("products/i59400fb/positions?town=minsk").then(res => {
				shopList = JSON.parse(res)
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

	describe("When user observes user's used offers", () => {

		let usedCPUs

		beforeEach(done => {
			api.getProducts("cpu/second-offers?segment=second").then(res => {
				usedCPUs = JSON.parse(res)
				done()
			})
		})

		describe("And opens particular offer", () => {

			it("Then they should be able to see offer description data", () => {

				const firstUsedOffer = usedCPUs.offers[0]

				ProductsList.switchToSection("Объявления")
				ProductsList.waitForUrlContains("/cpu?segment=second")
				expect(ProductsList.createUsedOfferButton.isDisplayed()).toBe(true)
				ProductsList.waitForProperTotalOfFoundProducts(usedCPUs.total.toString())
				expect(ProductsList.productByTitle(firstUsedOffer.product.full_name).isDisplayed()).toBe(true)
				expect(ProductsList.usedProductConditionsCircleByProductTitle(firstUsedOffer.product.full_name).isDisplayed()).toBe(true)
				expect(ProductsList.usedProductLocationByProductTitle(firstUsedOffer.product.full_name).isDisplayed()).toBe(true)
				expect(ProductsList.getUsedProductPrice(firstUsedOffer.product.full_name)).toEqual(jasmine.any(Number))
				ProductsList.openUsedUserProductOfferByProductName(firstUsedOffer.product.full_name)
				ProductDetailsPage.waitForUsedProductPrice()
				ProductDetailsPage.scrollElementIntoView(ProductDetailsPage.usedProductNameHeading)
				expect(ProductDetailsPage.usedProductDescription.isDisplayed()).toBe(true)
			})
		})

		describe("And decides to create their own offer", () => {

			it("Then they have to be log in", () => {
				ProductsList.switchToSection("Объявления")
				ProductsList.waitForProperTotalOfFoundProducts(usedCPUs.total.toString())
				ProductsList.createUserUsedProductOffer()
				ProductsList.waitForUrlContains("/login?redirect")
				expect(LoginPage.authFormTitle.isDisplayed()).toBe(true)
				expect(LoginPage.nameInput.isDisplayed()).toBe(true)
				expect(LoginPage.passwordInput.isDisplayed()).toBe(true)
			})
		})
	})
})
