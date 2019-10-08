class BasePage {
	constructor() {
		this.searchBar = element(by.css("input.fast-search__input"))

		this.openPage = function(path) {
			browser.get(browser.baseUrl.concat(path))
		}

		this.clearSearchBar = function() {
			this.searchBar.click()
			this.searchBar.clear()
		}

		this.performSearch = function(query) {
			this.clearSearchBar()
			this.searchBar.sendKeys(query)
			this.hitEnter()
		}

		this.hitEnter = function() {
			browser.actions().sendKeys(protractor.Key.ENTER).perform()
		}
	}
}

module.exports = new BasePage()
