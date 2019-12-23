class BasePage {
	constructor() {
		this.searchBar = $("input.fast-search__input")
	}

	goTo(path) {
		return browser.get(browser.baseUrl.concat(path))
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

	scrollToWindowPosition(x, y) {
		browser.executeScript(`window.scrollTo(${x},${y});`)
	}

	scrollElementIntoView(element) {
		browser.controlFlow().execute(() => {
			browser.executeScript("arguments[0].scrollIntoView(true)", element.getWebElement())
		})
	}

	forceClick(element) {
		browser.controlFlow().execute(() => {
			browser.executeScript("arguments[0].click();", element.getWebElement())
		})
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
	urlContains(text) {
		return protractor.ExpectedConditions.urlContains(text)
	}
}

module.exports = BasePage
