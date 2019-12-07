class BasePage {
	constructor() {
		this.searchBar = element(by.css("input.fast-search__input"))
	}

	goTo(path) {
		browser.get(browser.baseUrl.concat(path))
	}

	clearSearchBar() {
		this.searchBar.click()
		this.searchBar.clear()
	}

	hitEnter() {
		browser.actions().sendKeys(protractor.Key.ENTER).perform()
	}

	performSearch(query) {
		this.clearSearchBar()
		this.searchBar.sendKeys(query)
		this.hitEnter()
	}

	// Expected Conditions

	isVisible(element) {
		return protractor.ExpectedConditions.visibilityOf(element)
	}

	isPresentInDom(element) {
		return protractor.ExpectedConditions.presenceOf(element)
	}

	isNotVisible(element) {
		return protractor.ExpectedConditions.invisibilityOf(element)
	}

	isNotPresentInDom(element) {
		return protractor.ExpectedConditions.stalenessOf(element)
	}

	isClickable(element) {
		return protractor.ExpectedConditions.elementToBeClickable(element)
	}

	hasText(element, text) {
		return protractor.ExpectedConditions.textToBePresentInElement(element, text)
	}
}

module.exports = BasePage
