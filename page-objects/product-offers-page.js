const BasePage = require('./base-page');

class ProductOffersPage extends BasePage {
  constructor() {
    super();
    this.productPriceHeading = element(by.id('product-prices-head'));
    this.productPricesOrderGroup = element(by.id('product-prices-order'));
    this.productPricesFilterGroup = element(by.id('product-prices-filter'));
    this.offersTable = $('.b-offers-list-line-table__table');
    this.popover = $('.offers-list__target').$('.popover-style__content');
    this.shopLogoByShopId = (shopId) => $(`a[class="logo"][href^="https://${shopId}.shop.onliner.by"]`).element(by.tagName('img'));
    this.firstOfferRow = this.offersTable.all(by.tagName('tr')).first();
    this.firstOfferProductPrice = this.firstOfferRow.$('.b-cell-1').$('.price-primary');
    this.shopContactsButton = this.firstOfferRow.$('.b-cell-3').$('.offers-list__button_contacts');
    this.shopWorkingHours = this.firstOfferRow.$('.b-cell-4').$('.b-cell-4__line-2');
  }

  waitForFirstShopLogoDisplayed(shopId) {
    return this.constructor.isPresentInDom(this.shopLogoByShopId(shopId));
  }

  skipPickCityModal() {
    this.popover.isDisplayed().then((visible) => {
      if (visible) {
        this.popover.$('.button-style_primary').click();
      }
    });
  }
}

module.exports = new ProductOffersPage();
