const BasePage = require("./base-page")
const _ = require("lodash")

class Catalog extends BasePage {
	constructor() {
		super()
		this.sectionItem = function(itemId) {
			return $(`[class="catalog-navigation-classifier__item "][data-id="${itemId}"]`)
		}

		this.categoryItem = function(categoryTitle) {
			return element(by.cssContainingText(".catalog-navigation-list__aside-title", categoryTitle.match(/^\S+/)))
		}
		this.subCategoryItem = function(subcategoryItem) {
			return $(`a[href$="${subcategoryItem.path}"][class="catalog-navigation-list__dropdown-item"]`)
		}
		this.catalogBar = element(by.className("catalog-bar"))
		this.tile = function(tileTitle) {
			return element.all(by.xpath(`//div[contains(@class, tiles__item) and descendant::span[contains(., '${tileTitle}')]]`)).last()
		}
		this.categoryFirstProduct = $$(".schema-product__group")
			.first()
			.all(by.css("a"))
			.first()
	}

	chooseClassifierItem(itemId) {
		browser.wait(this.isClickable(this.sectionItem(itemId)))
		this.sectionItem(itemId).click()
	}

	hoverCategoryItem(categoryTitle) {
		browser.wait(this.isClickable(this.categoryItem(categoryTitle)))
		this.categoryItem(categoryTitle).click()
	}

	openSubcategory(subcategoryItem) {
		browser.wait(this.isClickable(this.subCategoryItem(subcategoryItem)))
		this.subCategoryItem(subcategoryItem).click()
	}

	openCategoryFirstProductDetailsPage() {
		browser.wait(this.isVisible(this.categoryFirstProduct))
		this.categoryFirstProduct.click()
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
		browser.wait(this.isVisible(this.tile(tileTitle)))
		this.tile(tileTitle).click()
	}
}

module.exports = new Catalog()
