class BasePage {
	constructor() {
		this.searchBar = $("input.fast-search__input")
		this.topNavbar = $(".b-top-navigation")
	}

	open(url) {
		return browser.get(url)
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

	isVisible(element, timeout = browser.params.EXPLICIT_TIMEOUT) {
		// eslint-disable-next-line no-undef
		return browser.wait(EC.visibilityOf(element), timeout)
	}

	isPresentInDom(element, timeout = browser.params.EXPLICIT_TIMEOUT) {
		// eslint-disable-next-line no-undef
		return browser.wait(EC.presenceOf(element), timeout)
	}

	isNotVisible(element, timeout = browser.params.EXPLICIT_TIMEOUT) {
		// eslint-disable-next-line no-undef
		return browser.wait(EC.invisibilityOf(element), timeout)
	}

	isNotPresentInDom(element, timeout = browser.params.EXPLICIT_TIMEOUT) {
		// eslint-disable-next-line no-undef
		return browser.wait(EC.stalenessOf(element), timeout)
	}

	isClickable(element, timeout = browser.params.EXPLICIT_TIMEOUT) {
		// eslint-disable-next-line no-undef
		return browser.wait(EC.elementToBeClickable(element), timeout)
	}

	hasText(element, text, timeout = browser.params.EXPLICIT_TIMEOUT) {
		// eslint-disable-next-line no-undef
		return browser.wait(EC.textToBePresentInElement(element, text), timeout)
	}
	urlContains(text, timeout = browser.params.EXPLICIT_TIMEOUT) {
		// eslint-disable-next-line no-undef
		return browser.wait(EC.urlContains(text), timeout)
	}
}

module.exports = BasePage
