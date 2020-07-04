const _ = require('lodash');
const ProductsList = require('../page-objects/products-list');
const ProductOffers = require('../page-objects/product-offers-page');
const ProductDetailsPage = require('../page-objects/product-details-page');
const api = require('../helpers/onliner-api');
const { catalog, offers } = require('../service/relative-urls');
const { list: { order, filters }, shop } = require('../service/component-properties');

describe('Onliner.by - Catalog / Products List', () => {
  const numberOfProductsToCompare = 2;
  const filteredByIntel = catalog.filtered(catalog.cpu, 'manufacturer', 'Intel');
  const orderedByRating = catalog.ordered(catalog.cpu, 'rating', 'desc');
  let allCPUs;
  let firstProduct;
  let secondProduct;
  let CPUsFilteredByRating;
  let intelCPUs;
  let firstShop;

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
        return api.getOffers(offers.all(firstProduct.key));
      })
      .then((res) => {
        const shopList = JSON.parse(res);
        ([firstShop] = shopList.positions.primary);
      });

    browser.waitForAngularEnabled(false);

    ProductsList.constructor.goTo(catalog.cpu);
    done();
  });

  it("Products default sort order should be set as 'Popular'", () => {
    expect(ProductsList.orderDropdownActiveOrderOption.getText()).toBe(order.popular.label);
  });

  it('User should be able to sort out products by their reviews', () => {
    const reviews = _.map(CPUsFilteredByRating.products, (product) => product.reviews.count);
    const reviewed = _.capitalize(order.reviewed.label);

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
    ProductsList.markProductsToCompare(numberOfProductsToCompare);
    ProductsList.compareProducts(numberOfProductsToCompare);
    ProductsList.constructor.urlContains(catalog.compare(firstProduct.key, secondProduct.key));
    expect(ProductsList.productComparisonName(firstProduct.full_name).isDisplayed()).toBe(true);
    expect(ProductsList.productComparisonName(secondProduct.full_name).isDisplayed()).toBe(true);
  });

  it('User should be able to clean out comparison', () => {
    ProductsList.constructor.goTo(catalog.compare(firstProduct.key, secondProduct.key));
    ProductsList.clearComparisonList();
    expect(ProductsList.waitForUrlContains(browser.baseUrl)).toBe(true);
  });

  it('User should be able to open shop offers list page', () => {
    ProductsList.openFirstProductOffersPage();
    ProductsList.waitForUrlContains(firstProduct.html_url);
    expect(ProductOffers.constructor.isVisible(ProductOffers.productPriceHeading)).toBe(true);
  });

  it('Product name should be displayed on offers page', () => {
    ProductsList.openFirstProductOffersPage();
    ProductsList.waitForUrlContains(firstProduct.html_url);
    ProductOffers.constructor.isVisible(ProductOffers.productPriceHeading);
    expect(ProductDetailsPage.productNameHeading.getText()).toContain(firstProduct.name);
  });

  it('Base order group should be displayed on offers page', () => {
    ProductsList.openFirstProductOffersPage();
    ProductsList.waitForUrlContains(firstProduct.html_url);
    ProductOffers.constructor.isVisible(ProductOffers.productPriceHeading);
    ProductOffers.constructor.scrollElementIntoView(ProductOffers.productPriceHeading);
    ProductOffers.skipPickCityModal();
    expect(ProductOffers.productPricesOrderGroup.isDisplayed()).toBe(true);
  });

  it('Shop filters should be displayed on offers page', () => {
    ProductsList.openFirstProductOffersPage();
    ProductsList.waitForUrlContains(firstProduct.html_url);
    ProductOffers.constructor.isVisible(ProductOffers.productPriceHeading);
    ProductOffers.constructor.scrollElementIntoView(ProductOffers.productPriceHeading);
    ProductOffers.skipPickCityModal();
    expect(ProductOffers.productPricesFilterGroup.isDisplayed()).toBe(true);
  });

  it('Shop logo should be displayed on offers page', () => {
    ProductsList.openFirstProductOffersPage();
    ProductsList.waitForUrlContains(firstProduct.html_url);
    ProductOffers.constructor.isVisible(ProductOffers.productPriceHeading);
    ProductOffers.constructor.scrollElementIntoView(ProductOffers.productPriceHeading);
    ProductOffers.skipPickCityModal();
    expect(ProductOffers.waitForFirstShopLogoDisplayed(firstShop.shop_id)).toBe(true);
  });

  it('Shop offer price should be displayed on offers page', () => {
    ProductsList.openFirstProductOffersPage();
    ProductsList.waitForUrlContains(firstProduct.html_url);
    ProductOffers.constructor.isVisible(ProductOffers.productPriceHeading);
    ProductOffers.constructor.scrollElementIntoView(ProductOffers.productPriceHeading);
    ProductOffers.skipPickCityModal();
    ProductOffers.waitForFirstShopLogoDisplayed(firstShop.shop_id);
    expect(ProductOffers.firstOfferProductPrice.isDisplayed()).toBe(true);
  });

  it("'Shop Contacts' button should be displayed on offers page", () => {
    ProductsList.openFirstProductOffersPage();
    ProductsList.waitForUrlContains(firstProduct.html_url);
    ProductOffers.constructor.isVisible(ProductOffers.productPriceHeading);
    ProductOffers.constructor.scrollElementIntoView(ProductOffers.productPriceHeading);
    ProductOffers.skipPickCityModal();
    ProductOffers.waitForFirstShopLogoDisplayed(firstShop.shop_id);
    expect(ProductOffers.shopContactsButton.isDisplayed()).toBe(true);
  });

  it('Shop working hours button should be displayed on offers page', () => {
    ProductsList.openFirstProductOffersPage();
    ProductsList.waitForUrlContains(firstProduct.html_url);
    ProductOffers.constructor.isVisible(ProductOffers.productPriceHeading);
    ProductOffers.constructor.scrollElementIntoView(ProductOffers.productPriceHeading);
    ProductOffers.skipPickCityModal();
    ProductOffers.waitForFirstShopLogoDisplayed(firstShop.shop_id);
    expect(ProductOffers.shopWorkingHours.getText()).toContain(shop.workingHours.label);
  });
});
