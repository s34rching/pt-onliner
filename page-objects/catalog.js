const BasePage = require("./base-page")

class Catalog extends BasePage {
	constructor() {
		super()
		this.sectionItem = function(itemId) {
			return element(by.css(`[class="catalog-navigation-classifier__item "][data-id="${itemId}"]`))
		}
		this.categoriesLeftNav = element(by.css(".catalog-navigation-list__aside-list"))
		this.categoryItem = element(by.css("catalog-navigation-list__aside-item"))
		this.categoryName = this.categoryItem.element(by.css(".catalog-navigation-list__aside-title"))
		this.subCategoriesDropDown = element(by.css(".catalog-navigation-list__dropdown-list"))
		this.subCategoryItem = this.subCategoriesDropDown.element(by.css(".catalog-navigation-list__dropdown-item"))
		this.subCategoryItemTitle = this.subCategoryItem.element(by.css(".catalog-navigation-list__dropdown-title"))
	}

	chooseClassifierItem(itemId) {
		this.sectionItem(itemId).click()
	}

	hoverCategoryItem() {
		browser.actions.mouseMove(this.categoryItem).perform()
	}
}

module.exports = new Catalog()
