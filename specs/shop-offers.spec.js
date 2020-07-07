const ProductsList = require('../page-objects/products-list');
const ProductOffers = require('../page-objects/product-offers-page');
const ProductDetailsPage = require('../page-objects/product-details-page');
const api = require('../helpers/onliner-api');
const { catalog, offers } = require('../service/relative-urls');
const { shop } = require('../service/component-properties');

describe('Onliner.by - Catalog / Products List', () => {
  let firstProduct;
  let firstShop;

  beforeEach((done) => {
    api.getProducts(catalog.cpu)
      .then((res) => {
        const allCPUs = JSON.parse(res);
        ([firstProduct] = allCPUs.products);
        return api.getOffers(offers.all(firstProduct.key));
      })
      .then((res) => {
        const shopList = JSON.parse(res);
        ([firstShop] = shopList.positions.primary);

        browser.waitForAngularEnabled(false);
        done();
      });
  });

  it('User should be able to open shop offers list page', () => {
    ProductsList.constructor.goTo(catalog.cpu);
    ProductsList.openFirstProductOffersPage();
    ProductsList.waitForUrlContains(firstProduct.html_url);
    expect(ProductOffers.constructor.isVisible(ProductOffers.productPriceHeading)).toBe(true);
  });

  it('Product name should be displayed on offers page', () => {
    ProductsList.constructor.open(firstProduct.prices.html_url);
    ProductOffers.constructor.isVisible(ProductOffers.productPriceHeading);
    expect(ProductDetailsPage.productNameHeading.getText()).toContain(firstProduct.name);
  });

  it('Base order group should be displayed on offers page', () => {
    ProductsList.constructor.open(firstProduct.prices.html_url);
    ProductOffers.constructor.isVisible(ProductOffers.productPriceHeading);
    ProductOffers.constructor.scrollElementIntoView(ProductOffers.productPriceHeading);
    ProductOffers.skipPickCityModal();
    expect(ProductOffers.productPricesOrderGroup.isDisplayed()).toBe(true);
  });

  it('Shop filters should be displayed on offers page', () => {
    ProductsList.constructor.open(firstProduct.prices.html_url);
    ProductOffers.constructor.isVisible(ProductOffers.productPriceHeading);
    ProductOffers.constructor.scrollElementIntoView(ProductOffers.productPriceHeading);
    ProductOffers.skipPickCityModal();
    expect(ProductOffers.productPricesFilterGroup.isDisplayed()).toBe(true);
  });

  it('Shop logo should be displayed on offers page', () => {
    ProductsList.constructor.open(firstProduct.prices.html_url);
    ProductOffers.constructor.isVisible(ProductOffers.productPriceHeading);
    ProductOffers.constructor.scrollElementIntoView(ProductOffers.productPriceHeading);
    ProductOffers.skipPickCityModal();
    expect(ProductOffers.waitForFirstShopLogoDisplayed(firstShop.shop_id)).toBe(true);
  });

  it('Shop offer price should be displayed on offers page', () => {
    ProductsList.constructor.open(firstProduct.prices.html_url);
    ProductOffers.constructor.isVisible(ProductOffers.productPriceHeading);
    ProductOffers.constructor.scrollElementIntoView(ProductOffers.productPriceHeading);
    ProductOffers.skipPickCityModal();
    ProductOffers.waitForFirstShopLogoDisplayed(firstShop.shop_id);
    expect(ProductOffers.firstOfferProductPrice.isDisplayed()).toBe(true);
  });

  it("'Shop Contacts' button should be displayed on offers page", () => {
    ProductsList.constructor.open(firstProduct.prices.html_url);
    ProductOffers.constructor.isVisible(ProductOffers.productPriceHeading);
    ProductOffers.constructor.scrollElementIntoView(ProductOffers.productPriceHeading);
    ProductOffers.skipPickCityModal();
    ProductOffers.waitForFirstShopLogoDisplayed(firstShop.shop_id);
    expect(ProductOffers.shopContactsButton.isDisplayed()).toBe(true);
  });

  it('Shop working hours button should be displayed on offers page', () => {
    ProductsList.constructor.open(firstProduct.prices.html_url);
    ProductOffers.constructor.isVisible(ProductOffers.productPriceHeading);
    ProductOffers.constructor.scrollElementIntoView(ProductOffers.productPriceHeading);
    ProductOffers.skipPickCityModal();
    ProductOffers.waitForFirstShopLogoDisplayed(firstShop.shop_id);
    expect(ProductOffers.shopWorkingHours.getText()).toContain(shop.workingHours.label);
  });
});
