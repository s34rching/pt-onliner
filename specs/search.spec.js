const _ = require('lodash');
const { EXPECTED_PRICE_CHANGE, PRODUCTS_PULL, NON_EXISTENT_PRODUCT_TITLE } = require('../config/scenarios');
const { product: { status }, search: { nothingFound } } = require('../service/component-properties');
const HomePage = require('../page-objects/homepage');
const ProductDetailsPage = require('../page-objects/product-details-page');
const ProductsList = require('../page-objects/products-list');
const SearchIframe = require('../page-objects/search-iframe');
const api = require('../helpers/onliner-api');
const { changeDecimalSeparator } = require('../service/currency-exchange-services');
const customMatchers = require('../service/custom-matchers');
const entities = require('../helpers/get-entities');
const { getProductBynPrice } = require('../service/product-services');

describe('Onliner.by - Products / Search', () => {
  const product = entities.getProduct();
  const activeProduct = _.sample(entities.getProduct(status.active.serviceName, PRODUCTS_PULL));
  const outOfStockProduct = entities.getProduct(status.outOfStock.serviceName);
  const offSaleProduct = entities.getProduct(status.offSale.serviceName);
  let exchangeRate;

  beforeAll(async () => {
    const res = await api.getCurrencyExchangeRates();
    const dailyCurrencyChanges = JSON.parse(res);
    exchangeRate = changeDecimalSeparator(dailyCurrencyChanges.amount, '.');
  });

  beforeEach(async () => {
    browser.waitForAngularEnabled(false);
    jasmine.addMatchers(customMatchers);

    await HomePage.constructor.goTo('/');
  });

  it("User should be able to find an 'active' product in catalog", async () => {
    await HomePage.performSearch(activeProduct.query);
    await SearchIframe.switchToSearchIframe();
    await SearchIframe.waitForProductAreLoadedOnModal();
    expect(await SearchIframe.resultItemProduct(activeProduct.catalogTitle).isDisplayed())
      .toBe(true);
  });

  it("User should be able to see an 'active' product price", async () => {
    const priceByn = getProductBynPrice(activeProduct, exchangeRate);

    await HomePage.performSearch(activeProduct.query);
    await SearchIframe.switchToSearchIframe();
    await SearchIframe.waitForProductAreLoadedOnModal();
    expect(await SearchIframe.productPrice(activeProduct.catalogTitle).getText())
      .closeTo({ value: priceByn, delta: EXPECTED_PRICE_CHANGE });
  });

  it("User should be able to find an 'out of stock' product in catalog", async () => {
    await HomePage.performSearch(outOfStockProduct.query);
    await SearchIframe.switchToSearchIframe();
    await SearchIframe.waitForProductAreLoadedOnModal();
    expect(await SearchIframe.resultItemProduct(outOfStockProduct.catalogTitle).isDisplayed())
      .toBe(true);
  });

  it("'out of stock' product should have appropriate label on modal", async () => {
    await HomePage.performSearch(outOfStockProduct.query);
    await SearchIframe.switchToSearchIframe();
    await SearchIframe.waitForProductAreLoadedOnModal();
    expect(await SearchIframe.productPrice(outOfStockProduct.catalogTitle).getText())
      .toBe(status.outOfStock.label);
  });

  it("User should be able to find an 'off-sale' product in catalog", async () => {
    await HomePage.performSearch(offSaleProduct.query);
    await SearchIframe.switchToSearchIframe();
    await SearchIframe.waitForProductAreLoadedOnModal();
    expect(await SearchIframe.resultItemProduct(offSaleProduct.catalogTitle).isDisplayed())
      .toBe(true);
  });

  it("'off sale' product should have appropriate label on modal", async () => {
    await HomePage.performSearch(offSaleProduct.query);
    await SearchIframe.switchToSearchIframe();
    await SearchIframe.waitForProductAreLoadedOnModal();
    expect(await SearchIframe.productPrice(offSaleProduct.catalogTitle).getText())
      .toBe(status.offSale.label);
  });

  it('There should NOT be search results if user searches for non-existent product', async () => {
    await HomePage.performSearch(NON_EXISTENT_PRODUCT_TITLE);
    await SearchIframe.switchToSearchIframe();
    expect(await SearchIframe.firstResultItemProduct.isPresent())
      .toBe(false);
  });

  it(`Search bar should contain "${nothingFound}" suggestion if user searches for non-existent product`, async () => {
    await HomePage.performSearch(NON_EXISTENT_PRODUCT_TITLE);
    await SearchIframe.switchToSearchIframe();
    await SearchIframe.waitForSearchSuggestionIsVisible();
    expect(await SearchIframe.searchBarSuggestion.getText())
      .toBe(nothingFound);
  });

  it('User should be able to search by product subcategory', async () => {
    const randomClassifierItem = entities.getRandomClassifierItem();
    const randomCategory = entities.getRandomUniqueCategory(randomClassifierItem);
    const randomSubcategory = entities.getRandomUniqueSubcategory(randomCategory);
    const { ruName, subcategoryPageRuHeading } = randomSubcategory;

    await HomePage.performSearch(ruName);
    await SearchIframe.switchToSearchIframe();
    expect(await SearchIframe.waitForSubcategoryAreLoadedOnModal(subcategoryPageRuHeading))
      .toBe(true);
  });

  it('User should be able to open subcategory page while searching by subcategory', async () => {
    const randomClassifierItem = entities.getRandomClassifierItem();
    const randomCategory = entities.getRandomUniqueCategory(randomClassifierItem);
    const randomSubcategory = entities.getRandomUniqueSubcategory(randomCategory, true);

    await HomePage.performSearch(randomSubcategory.ruName);
    await SearchIframe.switchToSearchIframe();
    await SearchIframe.waitForProductAreLoadedOnModal();
    await SearchIframe.openSubcategoryPage(randomSubcategory.subcategoryPageRuHeading);
    await SearchIframe.constructor.switchToDefaultFrame();
    expect(await ProductsList.constructor.isVisible(ProductsList.product()))
      .toBe(true);
  });

  it('User should be able to close search modal', async () => {
    await HomePage.performSearch(activeProduct.query);
    await SearchIframe.switchToSearchIframe();
    await SearchIframe.waitForProductAreLoadedOnModal();
    await SearchIframe.closeSearchModal();
    expect(await SearchIframe.constructor.isNotVisible(SearchIframe.fastSearchModal))
      .toBe(true);
  });

  it('User should be able to open product details page while following search results', async () => {
    await HomePage.performSearch(product.query);
    await SearchIframe.switchToSearchIframe();
    await SearchIframe.waitForProductAreLoadedOnModal();
    await SearchIframe.openProductDetailsPageByTitle(product.catalogTitle);
    await SearchIframe.constructor.switchToDefaultFrame();
    expect(await ProductDetailsPage.productTitle(product).isDisplayed())
      .toBe(true);
  });
});
