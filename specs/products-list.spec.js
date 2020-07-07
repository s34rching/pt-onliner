const _ = require('lodash');
const ProductsList = require('../page-objects/products-list');
const api = require('../helpers/onliner-api');
const { catalog } = require('../service/relative-urls');
const { list: { order, filters } } = require('../service/component-properties');
const { COMPARE_PRODUCTS_NUMBER } = require('../config/scenarios');

describe('Onliner.by - Catalog / Products List', () => {
  const filteredByIntel = catalog.filtered(catalog.cpu, 'manufacturer', 'Intel');
  const orderedByRating = catalog.ordered(catalog.cpu, 'rating', 'desc');
  let allCPUs;
  let firstProduct;
  let secondProduct;
  let CPUsFilteredByRating;
  let intelCPUs;

  beforeAll((done) => {
    api.getProducts(orderedByRating)
      .then((res) => {
        CPUsFilteredByRating = JSON.parse(res);
        return api.getProducts(decodeURIComponent(filteredByIntel));
      })
      .then((res) => {
        intelCPUs = JSON.parse(res);
        done();
      });
  });

  beforeEach((done) => {
    api.getProducts(catalog.cpu)
      .then((res) => {
        allCPUs = JSON.parse(res);
        ([firstProduct, secondProduct] = allCPUs.products);

        browser.waitForAngularEnabled(false);
        done();
      });
  });

  it("Products default sort order should be set as 'Popular'", () => {
    expect(ProductsList.orderDropdownActiveOrderOption.getText()).toBe(order.popular.label);
  });

  it('User should be able to sort out products by their reviews', () => {
    const reviews = _.map(CPUsFilteredByRating.products, (product) => product.reviews.count);
    const reviewed = _.capitalize(order.reviewed.label);

    ProductsList.constructor.goTo(catalog.cpu);
    ProductsList.openOrderListDropDown();
    ProductsList.waitForOrderDropdownListIsVisible();
    ProductsList.chooseOrderDropdownOptionByName(reviewed);
    ProductsList.waitForUrlContains(orderedByRating);
    ProductsList.waitForActiveOrderOptionByName(reviewed);
    ProductsList.waitForProperTotalOfFoundProducts(CPUsFilteredByRating.total.toString());
    ProductsList.productRewievs.each((review, index) => {
      expect(review.getText()).toContain(reviews[index]);
    });
  });

  it('User should be able to filter out products by manufacturer', () => {
    const filterName = _.capitalize(filters.manufacturer.name);
    const optionName = _.capitalize(filters.manufacturer.options.intel.name);

    ProductsList.constructor.goTo(catalog.cpu);
    ProductsList.constructor.scrollElementIntoView(ProductsList.filterByName(filterName));
    ProductsList.filterProducts(filterName, optionName);
    ProductsList.constructor.scrollElementIntoView(ProductsList.productsListTitle);
    ProductsList.waitForUrlContains(filteredByIntel);
    ProductsList.waitForSearchTagIsDisplayed(optionName);
    ProductsList.waitForProperTotalOfFoundProducts(intelCPUs.total.toString());
    ProductsList.productsTitles.each((title) => expect(title.getText()).toContain(optionName));
  });

  it('User should be able to reset applied filters', () => {
    ProductsList.constructor.goTo(filteredByIntel);
    ProductsList.resetFilters();
    ProductsList.waitForProperTotalOfFoundProducts(allCPUs.total.toString());
  });

  it('User should be able to add products to comparison', () => {
    ProductsList.constructor.goTo(catalog.cpu);
    ProductsList.markProductsToCompare(COMPARE_PRODUCTS_NUMBER);
    ProductsList.compareProducts(COMPARE_PRODUCTS_NUMBER);
    ProductsList.constructor.urlContains(catalog.compare(firstProduct.key, secondProduct.key));
    expect(ProductsList.productComparisonName(firstProduct.full_name).isDisplayed()).toBe(true);
    expect(ProductsList.productComparisonName(secondProduct.full_name).isDisplayed()).toBe(true);
  });

  it('User should be able to clean out comparison', () => {
    ProductsList.constructor.goTo(catalog.compare(firstProduct.key, secondProduct.key));
    ProductsList.clearComparisonList();
    expect(ProductsList.waitForUrlContains(browser.baseUrl)).toBe(true);
  });
});
