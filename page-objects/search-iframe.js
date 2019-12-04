const BasePage = require("./base-page")

class SearchIframe extends BasePage {
	constructor() {
		super()
		this.searchIframe = element(by.className("modal-iframe"))
	}

	switchToSearchIframe() {
		browser.switchTo().frame(this.searchIframe)
	}
}

module.exports = new SearchIframe()
