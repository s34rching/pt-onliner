const BasePage = require('./base-page');

class LoginPage extends BasePage {
  constructor() {
    super();
    this.authFormTitle = element(by.cssContainingText('.auth-form__title', 'Вход'));
  }
}

module.exports = new LoginPage();
