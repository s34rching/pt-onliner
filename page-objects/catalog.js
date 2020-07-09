const _ = require('lodash');
const BasePage = require('./base-page');

const LINKS_IN_VISIBLE_LAYOUT = 5;

class Catalog extends BasePage {
  constructor() {
    super();
    this.sectionItem = (itemId) => $(`[class="catalog-navigation-classifier__item "][data-id="${itemId}"]`);
    this.categoryItem = (categoryTitle) => element(by.cssContainingText('.catalog-navigation-list__aside-title', categoryTitle.match(/^\S+/)[0]));
    this.subCategoryItem = (subcategoryItem) => $(`a[href$="${subcategoryItem.path}"][class="catalog-navigation-list__dropdown-item"]`);
    this.catalogBar = element(by.className('catalog-bar'));
    this.tile = (tileTitle) => element.all(by.xpath(`//div[contains(@class, tiles__item) and descendant::span[contains(., '${tileTitle}')]]`)).last();
    this.categoryFirstProduct = $$('.schema-product__group').first().all(by.css('a')).first();
  }

  async chooseClassifierItem(itemId) {
    await this.constructor.isVisible(this.topNavbar);
    await this.constructor.scrollElementIntoView(this.topNavbar);
    await this.constructor.isClickable(this.sectionItem(itemId));
    await this.sectionItem(itemId).click();
  }

  async hoverCategoryItem(categoryTitle) {
    await this.constructor.isClickable(this.categoryItem(categoryTitle));
    await this.categoryItem(categoryTitle).click();
  }

  async openSubcategory(subcategoryItem) {
    await this.constructor.isClickable(this.subCategoryItem(subcategoryItem));
    await this.subCategoryItem(subcategoryItem).click();
  }

  async openCategoryFirstProductDetailsPage() {
    await this.constructor.isVisible(this.categoryFirstProduct);
    await this.categoryFirstProduct.click();
  }

  // It takes only first 'LINKS_IN_VISIBLE_LAYOUT' items from the bar
  // b/c there are non-interactable elements in the bar
  // which are out of the container layout
  async followRandomCatalogBarLink() {
    await this.constructor.isVisible(this.catalogBar);
    const links = await this.catalogBar.all(by.className('catalog-bar__link'));
    const link = _.sample(_.take(links, LINKS_IN_VISIBLE_LAYOUT));
    await this.constructor.isClickable(link);
    await link.click();
  }

  async followTilesLinks(tileTitle) {
    await this.constructor.isVisible(this.tile(tileTitle));
    await this.tile(tileTitle).click();
  }
}

module.exports = new Catalog();
