const _ = require('lodash');
const { EXPECTED_PRICE_CHANGE, PRODUCTS_PULL, NON_EXISTENT_PRODUCT_TITLE } = require('../config/scenarios');
const { getProductBynPrice } = require('../service/product-services');
const customMatchers = require('../service/custom-matchers');
const HomePage = require('../page-objects/homepage');
const ProductsList = require('../page-objects/products-list');
const SearchIframe = require('../page-objects/search-iframe');
const ProductDetailsPage = require('../page-objects/product-details-page');
const api = require('../helpers/onliner-api');
const entities = require('../helpers/get-entities');
const { product: { status }, search: { nothingFound } } = require('../service/component-properties');
const { changeDecimalSeparator } = require('../service/currency-exchange-services');

describe('Onliner.by - Products / Search', () => {
  const product = entities.getProduct();
  const activeProduct = _.sample(entities.getProduct(status.active.serviceName, PRODUCTS_PULL));
  const outOfStockProduct = entities.getProduct(status.outOfStock.serviceName);
  const offSaleProduct = entities.getProduct(status.offSale.serviceName);
  let exchangeRate;

  beforeAll((done) => {
    api.getCurrencyExchangeRates().then((res) => {
      const dailyCurrencyChanges = JSON.parse(res);
      exchangeRate = changeDecimalSeparator(dailyCurrencyChanges.amount, '.');
      done();
    });
  });

  beforeEach(() => {
    browser.waitForAngularEnabled(false);
    jasmine.addMatchers(customMatchers);

    HomePage.constructor.goTo('/');
  });

  it("User should be able to find an 'active' product in catalog", () => {
    HomePage.performSearch(activeProduct.query);
    SearchIframe.switchToSearchIframe();
    SearchIframe.waitForProductAreLoadedOnModal();
    expect(SearchIframe.resultItemProduct(activeProduct.catalogTitle).isDisplayed()).toBe(true);
  });

  it("User should be able to see an 'active' product price", () => {
    const priceByn = getProductBynPrice(activeProduct, exchangeRate);

    HomePage.performSearch(activeProduct.query);
    SearchIframe.switchToSearchIframe();
    SearchIframe.waitForProductAreLoadedOnModal();
    expect(SearchIframe.productPrice(activeProduct.catalogTitle).getText())
      .closeTo({ value: priceByn, delta: EXPECTED_PRICE_CHANGE });
  });

  it("User should be able to find an 'out of stock' product in catalog", () => {
    HomePage.performSearch(outOfStockProduct.query);
    SearchIframe.switchToSearchIframe();
    SearchIframe.waitForProductAreLoadedOnModal();
    expect(SearchIframe.resultItemProduct(outOfStockProduct.catalogTitle).isDisplayed()).toBe(true);
  });

  it("'out of stock' product should have appropriate label on modal", () => {
    HomePage.performSearch(outOfStockProduct.query);
    SearchIframe.switchToSearchIframe();
    SearchIframe.waitForProductAreLoadedOnModal();
    expect(SearchIframe.productPrice(outOfStockProduct.catalogTitle).getText())
      .toBe(status.outOfStock.label);
  });

  it("User should be able to find an 'off-sale' product in catalog", () => {
    HomePage.performSearch(offSaleProduct.query);
    SearchIframe.switchToSearchIframe();
    SearchIframe.waitForProductAreLoadedOnModal();
    expect(SearchIframe.resultItemProduct(offSaleProduct.catalogTitle).isDisplayed()).toBe(true);
  });

  it("'off sale' product should have appropriate label on modal", () => {
    HomePage.performSearch(offSaleProduct.query);
    SearchIframe.switchToSearchIframe();
    SearchIframe.waitForProductAreLoadedOnModal();
    expect(SearchIframe.productPrice(offSaleProduct.catalogTitle).getText())
      .toBe(status.offSale.label);
  });

  it('There should NOT be search results if user searches for non-existent product', () => {
    HomePage.performSearch(NON_EXISTENT_PRODUCT_TITLE);
    SearchIframe.switchToSearchIframe();
    expect(SearchIframe.firstResultItemProduct.isPresent()).toBe(false);
  });

  it(`Search bar should contain "${nothingFound}" suggestion if user searches for non-existent product`, () => {
    HomePage.performSearch(NON_EXISTENT_PRODUCT_TITLE);
    SearchIframe.switchToSearchIframe();
    SearchIframe.waitForSearchSuggestionIsVisible();
    expect(SearchIframe.searchBarSuggestion.getText()).toBe(nothingFound);
  });

  it('User should be able to search by product subcategory', () => {
    const randomClassifierItem = entities.getRandomClassifierItem();
    const randomCategory = entities.getRandomUniqueCategory(randomClassifierItem);
    const randomSubcategory = entities.getRandomUniqueSubcategory(randomCategory);
    const { ruName, subcategoryPageRuHeading } = randomSubcategory;

    HomePage.performSearch(ruName);
    SearchIframe.switchToSearchIframe();
    SearchIframe.waitForProductAreLoadedOnModal();
    expect(SearchIframe.resultItemSubcategory(subcategoryPageRuHeading).isDisplayed()).toBe(true);
  });

  it('User should be able to open subcategory page while searching by subcategory', () => {
    const randomClassifierItem = entities.getRandomClassifierItem();
    const randomCategory = entities.getRandomUniqueCategory(randomClassifierItem);
    const randomSubcategory = entities.getRandomUniqueSubcategory(randomCategory);

    HomePage.performSearch(randomSubcategory.ruName);
    SearchIframe.switchToSearchIframe();
    SearchIframe.waitForProductAreLoadedOnModal();
    SearchIframe.openSubcategoryPage(randomSubcategory.subcategoryPageRuHeading);
    SearchIframe.constructor.switchToDefaultFrame();
    expect(ProductsList.constructor.isVisible(ProductsList.product())).toBe(true);
  });

  it('User should be able to close search modal', () => {
    HomePage.performSearch(activeProduct.query);
    SearchIframe.switchToSearchIframe();
    SearchIframe.waitForProductAreLoadedOnModal();
    SearchIframe.closeSearchModal();
    expect(SearchIframe.constructor.isNotVisible(SearchIframe.fastSearchModal)).toBe(true);
  });

  it('User should be able to open product details page while following search results', () => {
    HomePage.performSearch(product.query);
    SearchIframe.switchToSearchIframe();
    SearchIframe.waitForProductAreLoadedOnModal();
    SearchIframe.openProductDetailsPageByTitle(product.catalogTitle);
    SearchIframe.constructor.switchToDefaultFrame();
    expect(ProductDetailsPage.productTitle(product).isDisplayed()).toBe(true);
  });
});
