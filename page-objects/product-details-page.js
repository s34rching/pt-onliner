const BasePage = require('./base-page');

class ProductDetailsPage extends BasePage {
  constructor() {
    super();
    this.productTitle = (product) => element(by.cssContainingText('h1.catalog-masthead__title', product.catalogTitle));
    this.productOffers = $('.product-aside__group');
    this.firstOffer = $('.product-aside__item--highlighted');
    this.firstOfferPrice = this.firstOffer.$('span.product-aside__price--primary');
    this.productNameHeading = $('.catalog-masthead__title');
    this.usedProductConditions = (conditions) => element(by.cssContainingText('.offers-list__circle-mark_primary', conditions.toString()));
    this.usedProductDescription = $('.offers-list__description');
    this.usedProductPrice = $('.offers-list__price_primary');
    this.productOfferDescription = $("p[itemprop='description']");
    this.productTechDescription = element(by.id('specs'));
  }

  waitForFirstShopOfferVisible() {
    this.constructor.isVisible(this.firstOffer);
  }

  waitForUsedProductPrice() {
    this.constructor.isVisible(this.usedProductPrice);
  }
}

module.exports = new ProductDetailsPage();
