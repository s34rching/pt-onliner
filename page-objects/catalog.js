const BasePage = require("./base-page")

class Catalog extends BasePage {
	constructor() {
		super()
		this.sectionItem = function(itemId) {
			return element(by.css(`[class="catalog-navigation-classifier__item "][data-id="${itemId}"]`))
		}
		this.categoryItem = function(categoryTitle) {
			return element(by.cssContainingText(".catalog-navigation-list__aside-title", categoryTitle.match(/^\S+/)[0]))
		}
		this.subCategoryItem = function(subcategoryTitle) {
			return element(by.cssContainingText("span.catalog-navigation-list__dropdown-title", subcategoryTitle.match(/^\S+/)[0]))
		}
		this.categoriesLeftNav = element(by.css(".catalog-navigation-list__aside-list"))
		this.subCategoriesDropDown = element(by.css(".catalog-navigation-list__dropdown-list"))
	}

	chooseClassifierItem(itemId) {
		this.sectionItem(itemId).click()
	}

	waitForCategoriesLeftNav() {
		return this.isVisible(this.categoriesLeftNav)
	}

	focusCategoryItem(categoryTitle) {
		browser.actions()
			.mouseMove(this.categoryItem(categoryTitle))
			.perform()
	}

	waitForSubcategoriesDropDown() {
		return this.isVisible(this.subCategoriesDropDown)
	}

	openSubcategory(subcategoryTitle) {
		return this.subCategoryItem(subcategoryTitle)
			.click()
	}
}

module.exports = new Catalog()
