const ProductsList = require('../page-objects/products-list');
const ProductDetailsPage = require('../page-objects/product-details-page');
const LoginPage = require('../page-objects/login-page');
const api = require('../helpers/onliner-api');
const { stringifyToCents } = require('../service/currency-exchange-services');
const { global, catalog } = require('../service/relative-urls');

describe('Onliner.by - Catalog / Products List - Used', () => {
  let usedCPUs;
  let usedOffer;

  beforeAll((done) => {
    api.getProducts('cpu/second-offers?segment=second').then((res) => {
      usedCPUs = JSON.parse(res);
      [usedOffer] = usedCPUs.offers;
      done();
    });
  });

  beforeEach(() => {
    browser.waitForAngularEnabled(false);
  });

  it("User should be able to switch to 'used' offers", () => {
    ProductsList.constructor.goTo(catalog.cpu);
    ProductsList.switchToSection('Объявления');
    ProductsList.waitForUrlContains(catalog.used(catalog.cpu));
    expect(ProductsList.createUsedOfferButton.isDisplayed()).toBe(true);
  });

  it('List of offers should be displayed', () => {
    ProductsList.constructor.goTo(catalog.used(catalog.cpu));
    ProductsList.waitForProperTotalOfFoundProducts(usedCPUs.total.toString());
    expect(ProductsList.productByTitle(usedOffer.product.full_name).isDisplayed()).toBe(true);
  });

  it('User should be able to open offer', () => {
    ProductsList.constructor.goTo(catalog.used(catalog.cpu));
    ProductsList.waitForProperTotalOfFoundProducts(usedCPUs.total.toString());
    ProductsList.openUsedUserProductOfferByProductName(usedOffer.product.full_name);
    ProductDetailsPage.waitForUsedProductPrice();
    expect(ProductDetailsPage.productNameHeading.getText()).toContain(usedOffer.product.full_name);
  });

  it('Used product price should be displayed', () => {
    const usedProductPrice = stringifyToCents(usedOffer.price.amount);

    ProductsList.constructor.open(usedOffer.html_url);
    expect(ProductDetailsPage.usedProductPrice.getText()).toContain(usedProductPrice);
  });

  it('Used product conditions should be displayed', () => {
    ProductsList.constructor.open(usedOffer.html_url);
    expect(ProductDetailsPage.usedProductConditions(usedOffer.condition).isDisplayed()).toBe(true);
  });

  it('Used product description should be displayed', () => {
    ProductsList.constructor.open(usedOffer.html_url);
    ProductDetailsPage.constructor.scrollElementIntoView(ProductDetailsPage.productNameHeading);
    expect(ProductDetailsPage.usedProductDescription.isDisplayed()).toBe(true);
  });

  it("Creation of new 'used' offer requires user to be logged in", () => {
    ProductsList.constructor.goTo(catalog.used(catalog.cpu));
    ProductsList.waitForProperTotalOfFoundProducts(usedCPUs.total.toString());
    ProductsList.createUserUsedProductOffer();
    ProductsList.waitForUrlContains(global.login);
    expect(LoginPage.authFormTitle.isDisplayed()).toBe(true);
  });
});
