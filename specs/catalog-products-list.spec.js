const _ = require('lodash');
const ProductsList = require('../page-objects/products-list');
const ProductOffers = require('../page-objects/product-offers-page');
const ProductDetailsPage = require('../page-objects/product-details-page');
const api = require('../helpers/onliner-api');
const { catalog } = require('../service/relative-urls');

describe('Onliner.by - Catalog / Products List', () => {
  const numberOfProductsToCompare = 2;
  const filteredByIntel = catalog.filtered(catalog.cpu, 'manufacturer', 'Intel');
  const orderedByRating = catalog.ordered(catalog.cpu, 'rating', 'desc');
  let allCPUs;
  let CPUsFilteredByRating;
  let intelCPUs;
  let shopList;

  beforeAll((done) => {
    api.getProducts(catalog.cpu)
      .then((res) => {
        allCPUs = JSON.parse(res);
        return api.getProducts(orderedByRating);
      })
      .then((res) => {
        CPUsFilteredByRating = JSON.parse(res);
        return api.getProducts(decodeURIComponent(filteredByIntel));
      })
      .then((res) => {
        intelCPUs = JSON.parse(res);
        return api.getOffers('products/i59400fb/positions?town=minsk');
      })
      .then((res) => {
        shopList = JSON.parse(res);
        done();
      });
  });

  beforeEach(() => {
    browser.waitForAngularEnabled(false);

    ProductsList.constructor.goTo(catalog.cpu);
  });

  it("Products default sort order should be set as 'Popular'", () => {
    expect(ProductsList.orderDropdownActiveOrderOption.getText()).toBe('популярные');
  });

  it('User should be able to sort out products by their reviews', () => {
    const reviews = _.map(CPUsFilteredByRating.products, (product) => product.reviews.count);

    ProductsList.openOrderListDropDown();
    ProductsList.waitForOrderDropdownListIsVisible();
    ProductsList.chooseOrderDropdownOptionByName('С отзывами');
    ProductsList.waitForUrlContains(orderedByRating);
    ProductsList.waitForActiveOrderOptionByName('С отзывами');
    ProductsList.waitForProperTotalOfFoundProducts(CPUsFilteredByRating.total.toString());
    ProductsList.productRewievs.each((review, index) => {
      expect(review.getText()).toContain(reviews[index]);
    });
  });

  it('User should be able to filter out products by manufacturer', () => {
    ProductsList.constructor.scrollElementIntoView(ProductsList.filterByName('Производитель'));
    ProductsList.filterProducts('Производитель', 'Intel');
    ProductsList.constructor.scrollElementIntoView(ProductsList.productsListTitle);
    ProductsList.waitForUrlContains(filteredByIntel);
    ProductsList.waitForSearchTagIsDisplayed('Intel');
    ProductsList.waitForProperTotalOfFoundProducts(intelCPUs.total.toString());
    ProductsList.productsTitles.each((title) => expect(title.getText()).toContain('Intel'));
  });

  it('User should be able to reset applied filters', () => {
    ProductsList.constructor.goTo(filteredByIntel);
    ProductsList.resetFilters();
    ProductsList.waitForProperTotalOfFoundProducts(allCPUs.total.toString());
  });

  it('User should be able to add products to comparison', (done) => {
    api.getProducts('/cpu').then((res) => {
      const CPUs = JSON.parse(res);

      const firstProduct = CPUs.products[0];
      const secondProduct = CPUs.products[1];
      const firstProductShortName = firstProduct.url.match(/(?<=\/products\/).+$/)[0];
      const secondProductShortName = secondProduct.url.match(/(?<=\/products\/).+$/)[0];

      ProductsList.markProductsToCompare(numberOfProductsToCompare);
      ProductsList.compareProducts(numberOfProductsToCompare);
      ProductsList.constructor.goTo(catalog.compare(firstProductShortName, secondProductShortName));
      expect(ProductsList.productComparisonName(firstProduct.full_name).isDisplayed()).toBe(true);
      expect(ProductsList.productComparisonName(secondProduct.full_name).isDisplayed()).toBe(true);
      done();
    });
  });

  it('User should be able to clean out comparison', () => {
    const firstProduct = allCPUs.products[0];
    const secondProduct = allCPUs.products[1];
    const firstProductShortName = firstProduct.url.match(/(?<=\/products\/).+$/)[0];
    const secondProductShortName = secondProduct.url.match(/(?<=\/products\/).+$/)[0];

    ProductsList.constructor.goTo(catalog.compare(firstProductShortName, secondProductShortName));
    ProductsList.clearComparisonList();
    expect(ProductsList.waitForUrlContains(browser.baseUrl)).toBe(true);
  });

  it('User should be able to open shop offers list page', () => {
    const [firstProduct] = allCPUs.products;

    ProductsList.openFirstProductOffersPage();
    ProductsList.waitForUrlContains(firstProduct.html_url);
    expect(ProductOffers.constructor.isVisible(ProductOffers.productPriceHeading)).toBe(true);
  });

  it('Product name should be displayed on offers page', () => {
    const [firstProduct] = allCPUs.products;

    ProductsList.openFirstProductOffersPage();
    ProductsList.waitForUrlContains(firstProduct.html_url);
    ProductOffers.constructor.isVisible(ProductOffers.productPriceHeading);
    expect(ProductDetailsPage.productNameHeading.getText()).toContain(firstProduct.name);
  });

  it('Base order group should be displayed on offers page', () => {
    const [firstProduct] = allCPUs.products;

    ProductsList.openFirstProductOffersPage();
    ProductsList.waitForUrlContains(firstProduct.html_url);
    ProductOffers.constructor.isVisible(ProductOffers.productPriceHeading);
    ProductOffers.constructor.scrollElementIntoView(ProductOffers.productPriceHeading);
    ProductOffers.skipPickCityModal();
    expect(ProductOffers.productPricesOrderGroup.isDisplayed()).toBe(true);
  });

  it('Shop filters should be displayed on offers page', () => {
    const [firstProduct] = allCPUs.products;

    ProductsList.openFirstProductOffersPage();
    ProductsList.waitForUrlContains(firstProduct.html_url);
    ProductOffers.constructor.isVisible(ProductOffers.productPriceHeading);
    ProductOffers.constructor.scrollElementIntoView(ProductOffers.productPriceHeading);
    ProductOffers.skipPickCityModal();
    expect(ProductOffers.productPricesFilterGroup.isDisplayed()).toBe(true);
  });

  it('Shop logo should be displayed on offers page', () => {
    const [firstProduct] = allCPUs.products;
    const [firstShop] = shopList.positions.primary;

    ProductsList.openFirstProductOffersPage();
    ProductsList.waitForUrlContains(firstProduct.html_url);
    ProductOffers.constructor.isVisible(ProductOffers.productPriceHeading);
    ProductOffers.constructor.scrollElementIntoView(ProductOffers.productPriceHeading);
    ProductOffers.skipPickCityModal();
    expect(ProductOffers.waitForFirstShopLogoDisplayed(firstShop.shop_id)).toBe(true);
  });

  it('Shop offer price should be displayed on offers page', () => {
    const [firstProduct] = allCPUs.products;
    const [firstShop] = shopList.positions.primary;

    ProductsList.openFirstProductOffersPage();
    ProductsList.waitForUrlContains(firstProduct.html_url);
    ProductOffers.constructor.isVisible(ProductOffers.productPriceHeading);
    ProductOffers.constructor.scrollElementIntoView(ProductOffers.productPriceHeading);
    ProductOffers.skipPickCityModal();
    ProductOffers.waitForFirstShopLogoDisplayed(firstShop.shop_id);
    expect(ProductOffers.firstOfferProductPrice.isDisplayed()).toBe(true);
  });

  it("'Shop Contacts' button should be displayed on offers page", () => {
    const [firstProduct] = allCPUs.products;
    const [firstShop] = shopList.positions.primary;

    ProductsList.openFirstProductOffersPage();
    ProductsList.waitForUrlContains(firstProduct.html_url);
    ProductOffers.constructor.isVisible(ProductOffers.productPriceHeading);
    ProductOffers.constructor.scrollElementIntoView(ProductOffers.productPriceHeading);
    ProductOffers.skipPickCityModal();
    ProductOffers.waitForFirstShopLogoDisplayed(firstShop.shop_id);
    expect(ProductOffers.shopContactsButton.isDisplayed()).toBe(true);
  });

  it('Shop working hours button should be displayed on offers page', () => {
    const [firstProduct] = allCPUs.products;
    const [firstShop] = shopList.positions.primary;

    ProductsList.openFirstProductOffersPage();
    ProductsList.waitForUrlContains(firstProduct.html_url);
    ProductOffers.constructor.isVisible(ProductOffers.productPriceHeading);
    ProductOffers.constructor.scrollElementIntoView(ProductOffers.productPriceHeading);
    ProductOffers.skipPickCityModal();
    ProductOffers.waitForFirstShopLogoDisplayed(firstShop.shop_id);
    expect(ProductOffers.shopWorkingHours.getText()).toContain('Магазин сегодня работает с');
  });
});
