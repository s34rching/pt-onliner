class LoginPage {
  constructor() {
    this.authFormTitle = element(by.cssContainingText('.auth-form__title', 'Вход'));
    this.nameInput = $("input[placeholder='Ник или e-mail']");
    this.passwordInput = $("input[type='password']");
  }
}

module.exports = new LoginPage();
