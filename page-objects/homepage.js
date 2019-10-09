class Homepage {
	constructor() {
		this.topNavBar = element(by.css("ul.b-main-navigation"))
		this.cataloqueLink = this.topNavBar.element(by.css("a[href='https://catalog.onliner.by/']"))
	}

	openCatalog() {
		this.cataloqueLink.click()
	}
}

module.exports = new Homepage()
