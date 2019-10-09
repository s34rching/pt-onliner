class Homepage {
	constructor() {
	}
	// topNavBar = element(by.css("ul.b-main-navigation"))
	// cataloqueLink = this.topNavBar.element(by.css("a[href='https://catalog.onliner.by/']"))

	openCatalog() {
		cataloqueLink.click()
	}
}

module.exports = new Homepage()
