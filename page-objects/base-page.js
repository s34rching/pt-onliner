class BasePage {
	constructor() {}
	// searchBar = element(by.css("input.fast-search__input"))

	openPage(path) {
		browser.get(browser.baseUrl.concat(path))
	}

	clearSearchBar() {
		this.searchBar.click()
		this.searchBar.clear()
	}

	performSearch(query) {
		this.clearSearchBar()
		this.searchBar.sendKeys(query)
		this.hitEnter()
	}

	hitEnter() {
		browser.actions().sendKeys(protractor.Key.ENTER).perform()
	}
}

module.exports = new BasePage()
