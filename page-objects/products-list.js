const _ = require('lodash');
const { search: { resetFilter, clearComparisonList } } = require('../service/component-properties');
const BasePage = require('./base-page');

class ProductsList extends BasePage {
  constructor() {
    super();
    this.orderOptionsContainer = element(by.id('schema-order'));
    this.orderDropdown = this.orderOptionsContainer.$('a.schema-order__link');
    this.orderDropdownOptionsList = $('.schema-order__list');
    this.orderDropdownOptionsListOptionByName = (optionName) => this.orderDropdownOptionsList.element(by.cssContainingText('span', optionName));
    this.orderDropdownActiveOrderOption = this.orderDropdown.$('span.schema-order__text');
    this.orderDropdownActiveOrderOptionByName = (optionName) => this.orderDropdown.element(by.cssContainingText('span.schema-order__text', optionName));
    this.productRewievs = $$('a.schema-product__rating').$$('span.schema-product__review-count');
    this.productsTitles = $$('.schema-product__title').all(by.tagName('span'));
    this.filters = element(by.id('schema-filter'));
    this.filterByName = (filterName) => element(by.cssContainingText('.schema-filter__label', filterName)).element(by.xpath('..'));
    this.productsListTitle = $('.schema-header__title');
    this.searchTagByName = (tagName) => element(by.cssContainingText('.schema-tags__text', tagName));
    this.totalFoundButton = (text) => element(by.cssContainingText('.schema-filter-button__sub_main', text));
    this.initiateFiltersResetButton = $('span.schema-filter-button__sub_control');
    this.confirmFiltersResetButton = element(by.cssContainingText('span.schema-filter-button__sub', resetFilter));
    this.compareProductsButton = (numberOfProductsToCompare) => element(by.cssContainingText('.compare-button__sub_main', numberOfProductsToCompare.toString()));
    this.resetComparisonListButton = element.all(by.cssContainingText('a.product-table__clear', clearComparisonList)).first();
    this.productComparisonName = (productName) => element.all(by.cssContainingText('.product-summary__caption', productName)).first();
    this.firstProductOffersButton = element.all(by.css('.schema-product__offers')).first();
    this.sectionSwitcher = (sectionName) => element(by.cssContainingText('.schema-filter-control__switcher-inner', sectionName));
    this.createUsedOfferButton = $("a[href='/used/create']");
    this.productByTitle = (productTitle) => element(by.xpath(`//div[contains(@class, "schema-product__group") and descendant::span[text()] = "${productTitle}"]`));
    this.product = ({ productIndex, productTitle, all } = {}) => {
      if (productIndex) {
        return $$('.schema-product').get(productIndex);
      } if (productTitle) {
        return element(by.xpath(`//div[contains(@class, "schema-product") and descendant::span[text()] = "${productTitle}"]`));
      } if (all) {
        return $$('.schema-product');
      }
      return $$('.schema-product').first();
    };
    this.productTitle = (productTitle) => this.productByTitle(productTitle).$('.schema-product__title').element(by.tagName('span'));
  }

  async openOrderListDropDown() {
    return this.orderDropdown.click();
  }

  async waitForOrderDropdownListIsVisible() {
    return this.constructor.isVisible(this.orderDropdownOptionsList);
  }

  async chooseOrderDropdownOptionByName(optionName) {
    await this.constructor.isClickable(this.orderDropdownOptionsListOptionByName(optionName));
    await this.orderDropdownOptionsListOptionByName(optionName).click();
  }

  async waitForUrlContains(text) {
    return this.constructor.urlContains(text);
  }

  async waitForActiveOrderOptionByName(optionName) {
    await this.constructor.isVisible(this.orderDropdownActiveOrderOptionByName(optionName));
  }

  async filterProducts(filterName, filterOption) {
    await this.filterByName(filterName)
      .element(by.cssContainingText('.schema-filter__checkbox-text', filterOption))
      .click();
  }

  async waitForSearchTagIsDisplayed(tagName) {
    await this.constructor.isVisible(this.searchTagByName(tagName));
  }

  async waitForProperTotalOfFoundProducts(total) {
    await this.constructor.isVisible(this.totalFoundButton(total));
  }

  async resetFilters() {
    await this.initiateFiltersResetButton.click();
    await this.constructor.isVisible(this.confirmFiltersResetButton);
    await this.confirmFiltersResetButton.click();
  }

  async compareProducts(numberOfProductsToCompare) {
    await this.constructor.isClickable(this.compareProductsButton(numberOfProductsToCompare));
    await this.constructor.forceClick(this.compareProductsButton(numberOfProductsToCompare));
  }

  async openFirstProductOffersPage() {
    await this.constructor.isClickable(this.firstProductOffersButton);
    await this.firstProductOffersButton.click();
  }

  async switchToSection(sectionName) {
    await this.sectionSwitcher(sectionName).click();
  }

  async openUsedUserProductOfferByProductName(productTitle) {
    await this.productTitle(productTitle).click();
  }

  async createUserUsedProductOffer() {
    await this.createUsedOfferButton.click();
  }

  async clearComparisonList() {
    await this.resetComparisonListButton.click();
  }

  async markProductsToCompare(numberOfProductsToCompare) {
    const productCards = await this.product({ all: true });
    await _.take(productCards, numberOfProductsToCompare).forEach((productCard) => {
      productCard.element(by.css('.schema-product__compare')).click();
    });
  }
}

module.exports = new ProductsList();
