const BasePage = require('./base-page');

class SearchIframe extends BasePage {
  constructor() {
    super();
    this.fastSearchModal = element(by.id('fast-search-modal'));
    this.searchIframe = $('.modal-iframe');
    this.modalSearchBar = $('.search__bar');
    this.productTitle = (productTitle) => element.all(by.cssContainingText('.product__title-link', productTitle)).first();
    this.firstResultItemProduct = $$('.result__item_product').first();
    this.resultItemProduct = (productTitle) => element(by.xpath(`//div[contains(@class, 'result__item_product') and descendant::a[text()] = '${productTitle}']`));
    this.productPrice = (productTitle) => this.resultItemProduct(productTitle).$('.product__price');
    this.resultItemSubcategory = (subcategoryTitle) => element(by.cssContainingText('.category__title', subcategoryTitle));
    this.closeSearchBarButton = $('.search__close');
    this.searchBarSuggestion = $('.search__suggest-addon');
  }

  waitForProductAreLoadedOnModal() {
    return this.constructor.isVisible(this.firstResultItemProduct);
  }

  closeSearchModal() {
    return this.closeSearchBarButton.click();
  }

  openProductDetailsPageByTitle(productTitle) {
    return this.productTitle(productTitle).click();
  }

  openSubcategoryPage(subcategoryTitle) {
    this.constructor.isClickable(this.resultItemSubcategory(subcategoryTitle));
    return this.resultItemSubcategory(subcategoryTitle).click();
  }

  waitForSearchSuggestionIsVisible() {
    this.constructor.isVisible(this.searchBarSuggestion);
  }
}

module.exports = new SearchIframe();
