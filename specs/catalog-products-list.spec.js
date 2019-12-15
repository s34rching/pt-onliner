const ProductsList = require("../page-objects/products-list")
const rp = require("request-promise")
const chai = require("chai")
const assert = chai.assert

describe("Onliner.by - Catalog / Products List", () => {

	let products

	beforeEach(() => {
		browser.waitForAngularEnabled(false)

		rp("https://catalog.onliner.by/sdapi/catalog.api/search/cpu?order=reviews_rating:desc").then(res => {
			products = JSON.parse(res)
		})
	})

	it("default sort order is set as 'Popular'", () => {
		ProductsList.goTo("/cpu")
		ProductsList.waitForOrderDefaultOptionIsDisplayed("популярные")
		ProductsList.orderDropdownActiveOrderOption.getText().then(text => {
			expect(text).toBe("популярные")
		})
	})
	it("user should be able to order products", () => {

		let ratingsArray = []

		ProductsList.goTo("/cpu")
		ProductsList.waitForOrderDefaultOptionIsDisplayed()
		ProductsList.openOrderListDropDown()
		ProductsList.waitForOrderDropdownListIsVisible()
		ProductsList.chooseOrderDropdownOptionByName("С отзывами")
		ProductsList.waitForUrlContains("?order=reviews_rating:desc")
		ProductsList.waitForActiveOrderOptionByName("С отзывами")
		ProductsList.waitForProductListRebuilt(products.products[0].full_name)
		ProductsList.getProductsRating().each(rating => {
			rating.getText().then(text => { ratingsArray.push(text) })
		}).then(() => {
			for (let i = 0;  i < ratingsArray.length - 1; i++) {
				assert.isAtLeast(parseInt(ratingsArray[i]), parseInt(ratingsArray[i + 1]))
			}
		})
	})
	xit("user should be able to filter products", () => {

	})
	xit("user should be able to reset filters", () => {

	})
	xit("user should be able to add products for comparison", () => {

	})
	xit("user should be able to open offers list page", () => {

	})
	xit("user should be able to observe user's ads", () => {

	})
	xit("user should be able to create ad", () => {
		ProductsList.goTo("/cpu")
		ProductsList.switchToUsedAdsList("Объявления")
		ProductsList.initiateCreationOfUsedAd()
		browser.sleep(5000)
	})
})
