const BasePage = require('./base-page');

class ProductDetailsPage extends BasePage {
  constructor() {
    super();
    this.productTitle = (product) => element(by.cssContainingText('h1.catalog-masthead__title', product.catalogTitle));
    this.productNameHeading = $('.catalog-masthead__title');
    this.usedProductConditions = (conditions) => element(by.cssContainingText('.offers-list__circle-mark_primary', conditions.toString()));
    this.usedProductDescription = $('.offers-list__description');
    this.usedProductPrice = $('.offers-list__price_primary');
    this.productOfferDescription = $("p[itemprop='description']");
  }

  waitForUsedProductPrice() {
    this.constructor.isVisible(this.usedProductPrice);
  }
}

module.exports = new ProductDetailsPage();
