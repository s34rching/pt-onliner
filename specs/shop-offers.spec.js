const { catalog, offers } = require('../service/relative-urls');
const ProductsList = require('../page-objects/products-list');
const ProductOffers = require('../page-objects/product-offers-page');
const ProductDetailsPage = require('../page-objects/product-details-page');
const api = require('../helpers/onliner-api');
const { shop } = require('../service/component-properties');

describe('Onliner.by - Catalog / Products List', () => {
  let firstProduct;
  let firstShop;

  beforeEach(async () => {
    const res = await api.getProducts(catalog.cpu);
    const allCPUs = JSON.parse(res);
    ([firstProduct] = allCPUs.products);
    const res1 = await api.getOffers(offers.all(firstProduct.key));
    const shopList = JSON.parse(res1);
    ([firstShop] = shopList.positions.primary);

    browser.waitForAngularEnabled(false);
  });

  it('User should be able to open shop offers list page', async () => {
    await ProductsList.constructor.goTo(catalog.cpu);
    await ProductsList.openFirstProductOffersPage();
    await ProductsList.waitForUrlContains(firstProduct.html_url);
    expect(await ProductOffers.constructor.isVisible(ProductOffers.productPriceHeading)).toBe(true);
  });

  it('Product name should be displayed on offers page', async () => {
    await ProductsList.constructor.open(firstProduct.prices.html_url);
    await ProductOffers.constructor.isVisible(ProductOffers.productPriceHeading);
    expect(await ProductDetailsPage.productNameHeading.getText()).toContain(firstProduct.name);
  });

  it('Base order group should be displayed on offers page', async () => {
    await ProductsList.constructor.open(firstProduct.prices.html_url);
    await ProductOffers.reachShopOfferInfo();
    expect(await ProductOffers.productPricesOrderGroup.isDisplayed()).toBe(true);
  });

  it('Shop filters should be displayed on offers page', async () => {
    await ProductsList.constructor.open(firstProduct.prices.html_url);
    await ProductOffers.reachShopOfferInfo();
    expect(await ProductOffers.productPricesFilterGroup.isDisplayed()).toBe(true);
  });

  it('Shop logo should be displayed on offers page', async () => {
    await ProductsList.constructor.open(firstProduct.prices.html_url);
    await ProductOffers.reachShopOfferInfo();
    expect(await ProductOffers.waitForFirstShopLogoDisplayed(firstShop.shop_id)).toBe(true);
  });

  it('Shop offer price should be displayed on offers page', async () => {
    await ProductsList.constructor.open(firstProduct.prices.html_url);
    await ProductOffers.reachShopOfferInfo();
    await ProductOffers.waitForFirstShopLogoDisplayed(firstShop.shop_id);
    expect(await ProductOffers.firstOfferProductPrice.isDisplayed()).toBe(true);
  });

  it("'Shop Contacts' button should be displayed on offers page", async () => {
    await ProductsList.constructor.open(firstProduct.prices.html_url);
    await ProductOffers.reachShopOfferInfo();
    await ProductOffers.waitForFirstShopLogoDisplayed(firstShop.shop_id);
    expect(await ProductOffers.shopContactsButton.isDisplayed()).toBe(true);
  });

  it('Shop working hours button should be displayed on offers page', async () => {
    await ProductsList.constructor.open(firstProduct.prices.html_url);
    await ProductOffers.reachShopOfferInfo();
    await ProductOffers.waitForFirstShopLogoDisplayed(firstShop.shop_id);
    expect(await ProductOffers.shopWorkingHours.getText()).toContain(shop.workingHours.label);
  });
});
