const BasePage = require("./base-page")

class Catalog extends BasePage {
	constructor() {
		super()
		this.sectionItem = function(itemId) {
			return element(by.css(`[class="catalog-navigation-classifier__item "][data-id="${itemId}"]`))
		}
		this.categoryItem = function(categoryTitle) {
			return element(by.cssContainingText(".catalog-navigation-list__aside-item", categoryTitle))
		}
		this.categoriesLeftNav = element(by.css(".catalog-navigation-list__aside-list"))
		this.subCategoriesDropDown = element(by.css(".catalog-navigation-list__dropdown-list"))
		this.subCategoryItem = this.subCategoriesDropDown.element(by.css(".catalog-navigation-list__dropdown-item"))
	}

	chooseClassifierItem(itemId) {
		this.sectionItem(itemId).click()
	}

	waitForCategoriesLeftNav() {
		return this.isVisible(this.categoriesLeftNav)
	}

	focusCategoryItem(categoryTitle) {
		browser.actions().mouseMove(this.categoryItem(categoryTitle)).perform()
	}
}

module.exports = new Catalog()
