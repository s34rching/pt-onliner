class LoginPage {
  constructor() {
    this.authFormTitle = element(by.cssContainingText('.auth-form__title', 'Вход'));
  }
}

module.exports = new LoginPage();
