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
		this.subCategoryItem = function(subcategoryItem) {
			return element(by.css(`a[href$="${subcategoryItem.path}"][class="catalog-navigation-list__dropdown-item"]`))
		}
	}

	chooseClassifierItem(itemId) {
		browser.wait(this.isClickable(this.sectionItem(itemId)))
		this.sectionItem(itemId).click()
	}

	focusCategoryItem(categoryTitle) {
		browser.wait(this.isClickable(this.categoryItem(categoryTitle)))
		this.categoryItem(categoryTitle).click()
	}

	openSubcategory(subcategoryItem) {
		browser.wait(this.isClickable(this.subCategoryItem(subcategoryItem)))
		this.subCategoryItem(subcategoryItem).click()
	}
}

module.exports = new Catalog()
