const BasePage = require("./base-page")

class LoginPage extends BasePage {
	constructor() {
		super()
		this.authFormTitle = element(by.cssContainingText(".auth-form__title", "Вход"))
		this.socialMediaLoginButtonsGroup = element(by.css(".auth-input__combo"))
		this.nameInput = element(by.css("input[placeholder='Ник или e-mail']"))
		this.passwordInput = element(by.css("input[type='password']"))
	}

}

module.exports = new LoginPage()
