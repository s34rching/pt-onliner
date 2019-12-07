const BasePage = require("./base-page")

class Catalog extends BasePage {
	constructor() {
		super()
		this.classifierItem = function(itemId) {
			return element(by.css(`[class="catalog-navigation-classifier__item "][data-id="${itemId}"]`))
		}

		this.productsSectionsLeftNav = element(by.css(".catalog-navigation-list__aside-list"))
	}

	chooseClassifierItem(itemId) {
		this.classifierItem(itemId).click()
	}
}

module.exports = new Catalog()
