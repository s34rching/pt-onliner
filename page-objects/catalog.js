const BasePage = require("./base-page")
const _ = require("lodash")

class Catalog extends BasePage {
	constructor() {
		super()
		this.sectionItem = function(itemId) {
			return element(by.css(`[class="catalog-navigation-classifier__item "][data-id="${itemId}"]`))
		}
		this.categoryItem = function(categoryTitle) {
			return element(by.cssContainingText(".catalog-navigation-list__aside-title", categoryTitle))
		}
		this.subCategoryItem = function(subcategoryItem) {
			return element(by.css(`a[href$="${subcategoryItem.path}"][class="catalog-navigation-list__dropdown-item"]`))
		}
		this.catalogBar = element(by.className("catalog-bar"))
		this.tile = function(tileTitle) {
			return element(by.cssContainingText("span.tiles__title", tileTitle))
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

	followRandomCatalogBarLink() {
		browser.wait(this.isVisible(this.catalogBar))
		this.catalogBar.all(by.className("catalog-bar__link"))
			.then(links => { return _.sample(links) })
			.then(link => {
				browser.wait(this.isVisible(link))
				link.click()
			})
	}
	followTilesLinks(tileTitle) {
		browser.wait(this.isClickable(this.tile(tileTitle)))
		this.tile(tileTitle).click()
	}
}

module.exports = new Catalog()
