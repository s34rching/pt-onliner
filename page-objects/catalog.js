const _ = require('lodash');
const BasePage = require('./base-page');

const LINKS_IN_VISIBLE_LAYOUT = 5;

class Catalog extends BasePage {
  constructor() {
    super();
    this.sectionItem = function (itemId) {
      return $(`[class="catalog-navigation-classifier__item "][data-id="${itemId}"]`);
    };

    this.categoryItem = function (categoryTitle) {
      return element(by.cssContainingText('.catalog-navigation-list__aside-title',
        categoryTitle.match(/^\S+/)));
    };
    this.subCategoryItem = function (subcategoryItem) {
      return $(`a[href$="${subcategoryItem.path}"][class="catalog-navigation-list__dropdown-item"]`);
    };
    this.catalogBar = element(by.className('catalog-bar'));
    this.tile = function (tileTitle) {
      return element.all(by.xpath(`//div[contains(@class, tiles__item) and descendant::span[contains(., '${tileTitle}')]]`)).last();
    };
    this.categoryFirstProduct = $$('.schema-product__group')
      .first()
      .all(by.css('a'))
      .first();
  }

  chooseClassifierItem(itemId) {
    this.isVisible(this.topNavbar);
    this.scrollElementIntoView(this.topNavbar);
    this.isClickable(this.sectionItem(itemId));
    this.sectionItem(itemId).click();
  }

  hoverCategoryItem(categoryTitle) {
    this.isClickable(this.categoryItem(categoryTitle));
    this.categoryItem(categoryTitle).click();
  }

  openSubcategory(subcategoryItem) {
    this.isClickable(this.subCategoryItem(subcategoryItem));
    this.subCategoryItem(subcategoryItem).click();
  }

  openCategoryFirstProductDetailsPage() {
    this.isVisible(this.categoryFirstProduct);
    this.categoryFirstProduct.click();
  }

  // It takes only first 'LINKS_IN_VISIBLE_LAYOUT' items from the bar
  // b/c there are non-interactable elements in the bar
  // which are out of the container layout
  followRandomCatalogBarLink() {
    this.isVisible(this.catalogBar);
    this.catalogBar.all(by.className('catalog-bar__link'))
      .then((links) => {
        const link = _.sample(_.take(links, LINKS_IN_VISIBLE_LAYOUT));
        this.isClickable(link);
        link.click();
      });
  }

  followTilesLinks(tileTitle) {
    this.isVisible(this.tile(tileTitle));
    this.tile(tileTitle).click();
  }
}

module.exports = new Catalog();
