class BasePage {
  constructor() {
    this.searchBar = $('input.fast-search__input');
    this.topNavbar = $('.b-top-navigation');
  }

  async clearSearchBar() {
    await this.searchBar.click();
    await this.searchBar.clear();
  }

  async performSearch(query) {
    await this.clearSearchBar();
    await this.searchBar.sendKeys(query);
    await this.constructor.hitEnter();
  }

  static async open(url) {
    return browser.get(url);
  }

  static async goTo(path) {
    return browser.get(browser.baseUrl.concat(path));
  }

  static async hitEnter() {
    await browser.actions().sendKeys(protractor.Key.ENTER).perform();
  }

  static async scrollToWindowPosition(x, y) {
    await browser.executeScript(`window.scrollTo(${x},${y});`);
  }

  static async scrollElementIntoView(element) {
    await browser.controlFlow().execute(() => {
      browser.executeScript('arguments[0].scrollIntoView(true)', element.getWebElement());
    });
  }

  static async forceClick(element) {
    await browser.controlFlow().execute(() => {
      browser.executeScript('arguments[0].click();', element.getWebElement());
    });
  }

  // Expected Conditions

  static async isVisible(element, timeout = browser.params.EXPLICIT_TIMEOUT) {
    return browser.wait(EC.visibilityOf(element), timeout);
  }

  static async isPresentInDom(element, timeout = browser.params.EXPLICIT_TIMEOUT) {
    return browser.wait(EC.presenceOf(element), timeout);
  }

  static async isNotVisible(element, timeout = browser.params.EXPLICIT_TIMEOUT) {
    return browser.wait(EC.invisibilityOf(element), timeout);
  }

  static async isNotPresentInDom(element, timeout = browser.params.EXPLICIT_TIMEOUT) {
    return browser.wait(EC.stalenessOf(element), timeout);
  }

  static async isClickable(element, timeout = browser.params.EXPLICIT_TIMEOUT) {
    return browser.wait(EC.elementToBeClickable(element), timeout);
  }

  static async hasText(element, text, timeout = browser.params.EXPLICIT_TIMEOUT) {
    return browser.wait(EC.textToBePresentInElement(element, text), timeout);
  }

  static async urlContains(text, timeout = browser.params.EXPLICIT_TIMEOUT) {
    return browser.wait(EC.urlContains(text), timeout);
  }

  static async switchToIframe(container, iframe) {
    await this.isVisible(container);
    return browser.switchTo().frame(iframe.getWebElement());
  }

  static async switchToDefaultFrame() {
    return browser.switchTo().defaultContent();
  }
}

module.exports = BasePage;
