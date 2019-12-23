const BasePage = require("./base-page")

class LoginPage extends BasePage {
	constructor() {
		super()
		this.authFormTitle = element(by.cssContainingText(".auth-form__title", "Вход"))
		this.socialMediaLoginButtonsGroup = $(".auth-input__combo")
		this.nameInput = $("input[placeholder='Ник или e-mail']")
		this.passwordInput = $("input[type='password']")
	}

}

module.exports = new LoginPage()
