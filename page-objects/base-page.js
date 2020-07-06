class BasePage {
  constructor() {
    this.searchBar = $('input.fast-search__input');
    this.topNavbar = $('.b-top-navigation');
  }

  clearSearchBar() {
    this.searchBar.click();
    this.searchBar.clear();
  }

  performSearch(query) {
    this.clearSearchBar();
    this.searchBar.sendKeys(query);
    this.constructor.hitEnter();
  }

  static open(url) {
    return browser.get(url);
  }

  static goTo(path) {
    return browser.get(browser.baseUrl.concat(path));
  }

  static hitEnter() {
    browser.actions().sendKeys(protractor.Key.ENTER).perform();
  }

  static scrollToWindowPosition(x, y) {
    browser.executeScript(`window.scrollTo(${x},${y});`);
  }

  static scrollElementIntoView(element) {
    browser.controlFlow().execute(() => {
      browser.executeScript('arguments[0].scrollIntoView(true)', element.getWebElement());
    });
  }

  static forceClick(element) {
    browser.controlFlow().execute(() => {
      browser.executeScript('arguments[0].click();', element.getWebElement());
    });
  }

  // Expected Conditions

  static isVisible(element, timeout = browser.params.EXPLICIT_TIMEOUT) {
    return browser.wait(EC.visibilityOf(element), timeout);
  }

  static isPresentInDom(element, timeout = browser.params.EXPLICIT_TIMEOUT) {
    return browser.wait(EC.presenceOf(element), timeout);
  }

  static isNotVisible(element, timeout = browser.params.EXPLICIT_TIMEOUT) {
    return browser.wait(EC.invisibilityOf(element), timeout);
  }

  static isNotPresentInDom(element, timeout = browser.params.EXPLICIT_TIMEOUT) {
    return browser.wait(EC.stalenessOf(element), timeout);
  }

  static isClickable(element, timeout = browser.params.EXPLICIT_TIMEOUT) {
    return browser.wait(EC.elementToBeClickable(element), timeout);
  }

  static hasText(element, text, timeout = browser.params.EXPLICIT_TIMEOUT) {
    return browser.wait(EC.textToBePresentInElement(element, text), timeout);
  }

  static urlContains(text, timeout = browser.params.EXPLICIT_TIMEOUT) {
    return browser.wait(EC.urlContains(text), timeout);
  }

  static switchToIframe(container, iframe) {
    this.isVisible(container);
    return browser.switchTo().frame(iframe.getWebElement());
  }

  static switchToDefaultFrame() {
    return browser.switchTo().defaultContent();
  }
}

module.exports = BasePage;
