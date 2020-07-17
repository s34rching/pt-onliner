const _ = require('lodash');
const ProductsList = require('../page-objects/products-list');
const api = require('../helpers/onliner-api');
const { catalog } = require('../service/relative-urls');
const { list: { order, filters } } = require('../service/component-properties');
const { COMPARE_PRODUCTS_NUMBER } = require('../config/scenarios');
const { getRandomProducts } = require('../service/product-services');

describe('Onliner.by - Catalog / Products List', () => {
  const filteredByIntel = catalog.filtered(catalog.cpu, 'manufacturer', 'Intel');
  const orderedByRating = catalog.ordered(catalog.cpu, 'rating', 'desc');
  let allCPUs;
  let firstProduct;
  let secondProduct;
  let CPUsFilteredByRating;
  let intelCPUs;

  beforeAll(async () => {
    const res = await api.getProducts(orderedByRating);
    const res1 = await api.getProducts(decodeURIComponent(filteredByIntel));
    CPUsFilteredByRating = JSON.parse(res);
    intelCPUs = JSON.parse(res1);
  });

  beforeEach(async () => {
    const res = await api.getProducts(catalog.cpu);
    allCPUs = JSON.parse(res);
    ([firstProduct, secondProduct] = getRandomProducts(allCPUs.products, COMPARE_PRODUCTS_NUMBER));

    browser.waitForAngularEnabled(false);
  });

  it("Products default sort order should be set as 'Popular'", async () => {
    await ProductsList.constructor.goTo(catalog.cpu);
    expect(await ProductsList.orderDropdownActiveOrderOption.getText()).toBe(order.popular.label);
  });

  it('User should be able to sort out products by their reviews', async () => {
    const reviews = _.map(CPUsFilteredByRating.products, (product) => product.reviews.count);
    const reviewed = _.capitalize(order.reviewed.label);

    await ProductsList.constructor.goTo(catalog.cpu);
    await ProductsList.openOrderListDropDown();
    await ProductsList.waitForOrderDropdownListIsVisible();
    await ProductsList.chooseOrderDropdownOptionByName(reviewed);
    await ProductsList.waitForUrlContains(orderedByRating);
    await ProductsList.waitForActiveOrderOptionByName(reviewed);
    await ProductsList.waitForProperTotalOfFoundProducts(CPUsFilteredByRating.total.toString());
    ProductsList.productRewievs.each(async (review, index) => {
      expect(await review.getText()).toContain(reviews[index]);
    });
  });

  it('User should be able to filter out products by manufacturer', async () => {
    const filterName = _.capitalize(filters.manufacturer.name);
    const optionName = _.capitalize(filters.manufacturer.options.intel.name);

    await ProductsList.constructor.goTo(catalog.cpu);
    await ProductsList.constructor.scrollElementIntoView(ProductsList.filterByName(filterName));
    await ProductsList.filterProducts(filterName, optionName);
    await ProductsList.constructor.scrollElementIntoView(ProductsList.productsListTitle);
    await ProductsList.waitForUrlContains(filteredByIntel);
    await ProductsList.waitForSearchTagIsDisplayed(optionName);
    await ProductsList.waitForProperTotalOfFoundProducts(intelCPUs.total.toString());
    ProductsList.productsTitles.each(async (title) => {
      expect(await title.getText()).toContain(optionName);
    });
  });

  it('User should be able to reset applied filters', async () => {
    await ProductsList.constructor.goTo(filteredByIntel);
    await ProductsList.resetFilters();
    await ProductsList.waitForProperTotalOfFoundProducts(allCPUs.total.toString());
  });

  it('User should be able to add products to comparison', async () => {
    await ProductsList.constructor.goTo(catalog.cpu);
    await ProductsList.markProductsToCompare([firstProduct, secondProduct]);
    await ProductsList.compareProducts(COMPARE_PRODUCTS_NUMBER);
    await ProductsList.constructor.isNotVisible(ProductsList.filters);
    await ProductsList.constructor.urlContains(catalog.compareBase());
    expect(await ProductsList.constructor
      .isVisible(ProductsList.productComparisonName(firstProduct.extended_name))).toBe(true);
    expect(await ProductsList.constructor
      .isVisible(ProductsList.productComparisonName(secondProduct.extended_name))).toBe(true);
  });

  it('User should be able to clean out comparison', async () => {
    await ProductsList.constructor.goTo(catalog.compare(firstProduct.key, secondProduct.key));
    await ProductsList.clearComparisonList();
    expect(await ProductsList.waitForUrlContains(browser.baseUrl)).toBe(true);
  });
});
