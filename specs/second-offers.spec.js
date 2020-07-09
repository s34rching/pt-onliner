const ProductsList = require('../page-objects/products-list');
const ProductDetailsPage = require('../page-objects/product-details-page');
const LoginPage = require('../page-objects/login-page');
const api = require('../helpers/onliner-api');
const { stringifyToCents } = require('../service/currency-exchange-services');
const { global, catalog, api: apiLinks } = require('../service/relative-urls');
const { list: { sections } } = require('../service/component-properties');

describe('Onliner.by - Catalog / Products List - Used', () => {
  let usedCPUs;
  let usedOffer;

  beforeAll(async () => {
    const res = await api.getProducts(apiLinks.used(catalog.cpu));
    usedCPUs = JSON.parse(res);
    [usedOffer] = usedCPUs.offers;
  });

  beforeEach(() => {
    browser.waitForAngularEnabled(false);
  });

  it("User should be able to switch to 'used' offers", async () => {
    await ProductsList.constructor.goTo(catalog.cpu);
    await ProductsList.switchToSection(sections.offers.title);
    await ProductsList.waitForUrlContains(catalog.used(catalog.cpu));
    expect(await ProductsList.createUsedOfferButton.isDisplayed()).toBe(true);
  });

  it('List of offers should be displayed', async () => {
    await ProductsList.constructor.goTo(catalog.used(catalog.cpu));
    await ProductsList.waitForProperTotalOfFoundProducts(usedCPUs.total.toString());
    expect(await ProductsList.productByTitle(usedOffer.product.full_name).isDisplayed()).toBe(true);
  });

  it('User should be able to open offer', async () => {
    await ProductsList.constructor.goTo(catalog.used(catalog.cpu));
    await ProductsList.waitForProperTotalOfFoundProducts(usedCPUs.total.toString());
    await ProductsList.openUsedUserProductOfferByProductName(usedOffer.product.full_name);
    await ProductDetailsPage.waitForUsedProductPrice();
    expect(await ProductDetailsPage.productNameHeading.getText())
      .toContain(usedOffer.product.full_name);
  });

  it('Used product price should be displayed', async () => {
    const usedProductPrice = stringifyToCents(usedOffer.price.amount);

    await ProductsList.constructor.open(usedOffer.html_url);
    expect(await ProductDetailsPage.usedProductPrice.getText()).toContain(usedProductPrice);
  });

  it('Used product conditions should be displayed', async () => {
    await ProductsList.constructor.open(usedOffer.html_url);
    expect(await ProductDetailsPage.usedProductConditions(usedOffer.condition).isDisplayed())
      .toBe(true);
  });

  it('Used product description should be displayed', async () => {
    await ProductsList.constructor.open(usedOffer.html_url);
    await ProductDetailsPage.constructor.scrollElementIntoView(ProductDetailsPage.productNameHeading);
    expect(await ProductDetailsPage.usedProductDescription.isDisplayed()).toBe(true);
  });

  it("Creation of new 'used' offer requires user to be logged in", async () => {
    await ProductsList.constructor.goTo(catalog.used(catalog.cpu));
    await ProductsList.waitForProperTotalOfFoundProducts(usedCPUs.total.toString());
    await ProductsList.createUserUsedProductOffer();
    await ProductsList.waitForUrlContains(global.login);
    expect(await LoginPage.authFormTitle.isDisplayed()).toBe(true);
  });
});
