const BasePage = require('./base-page');

class SearchIframe extends BasePage {
  constructor() {
    super();
    this.fastSearchModal = element(by.id('fast-search-modal'));
    this.searchIframe = $('.modal-iframe');
    this.productTitle = (productTitle) => element.all(by.cssContainingText('.product__title-link', productTitle)).first();
    this.firstResultItemProduct = $$('.result__item_product').first();
    this.resultItemProduct = (productTitle) => element(by.xpath(`//div[contains(@class, 'result__item_product') and descendant::a[text()] = '${productTitle}']`));
    this.productPrice = (productTitle) => this.resultItemProduct(productTitle).$('.product__price');
    this.resultItemSubcategory = (subcategoryTitle) => element(by.cssContainingText('.category__title', subcategoryTitle));
    this.closeSearchBarButton = $('.search__close');
    this.searchBarSuggestion = $('.search__suggest-addon');
  }

  async waitForProductAreLoadedOnModal() {
    return this.constructor.isVisible(this.firstResultItemProduct);
  }

  async closeSearchModal() {
    return this.closeSearchBarButton.click();
  }

  async openProductDetailsPageByTitle(productTitle) {
    return this.productTitle(productTitle).click();
  }

  async openSubcategoryPage(subcategoryTitle) {
    await this.constructor.isClickable(this.resultItemSubcategory(subcategoryTitle));
    return this.resultItemSubcategory(subcategoryTitle).click();
  }

  async waitForSearchSuggestionIsVisible() {
    await this.constructor.isVisible(this.searchBarSuggestion);
  }

  async switchToSearchIframe() {
    return this.constructor.switchToIframe(this.fastSearchModal, this.searchIframe);
  }
}

module.exports = new SearchIframe();
