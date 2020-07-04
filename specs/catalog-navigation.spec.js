const HomePage = require('../page-objects/homepage');
const Catalog = require('../page-objects/catalog');
const ProductsList = require('../page-objects/products-list');
const ProductDetailsPage = require('../page-objects/product-details-page');
const entities = require('../helpers/get-entities');

describe('Onliner.by - Catalog / Navigation', () => {
  let classifierItem;
  let categoryItem;
  let subcategoryItem;

  beforeAll(() => {
    classifierItem = entities.getRandomClassifierItem();
    categoryItem = entities.getRandomUniqueCategory(classifierItem);
    subcategoryItem = entities.getRandomUniqueSubcategory(categoryItem);
  });

  beforeEach(() => {
    browser.waitForAngularEnabled(false);

    HomePage.constructor.goTo('/');
  });

  it('User should be able to go through catalog navigation to open product details page', () => {
    HomePage.openCatalog();
    Catalog.chooseClassifierItem(classifierItem.id);
    Catalog.hoverCategoryItem(categoryItem.ruName);
    Catalog.openSubcategory(subcategoryItem);
    Catalog.openCategoryFirstProductDetailsPage();
    expect(ProductDetailsPage.constructor.isVisible(ProductDetailsPage.productOfferDescription))
      .toBe(true);
  });

  it('Catalog top bar links should lead to subcategory pages', () => {
    Catalog.followRandomCatalogBarLink();
    expect(ProductsList.constructor.isVisible(ProductsList.product())).toBe(true);
  });

  xit('Catalog main tiles should lead to subcategory pages', () => {
    const randomMainTile = entities.getRandomCatalogMainTile();

    Catalog.followTilesLinks(randomMainTile.ruName);
    expect(ProductsList.constructor.isVisible(ProductsList.product())).toBe(true);
  });

  it('Catalog section tiles should lead to subcategory pages', () => {
    const randomSectionTile = entities.getRandomSectionTile(classifierItem);

    Catalog.chooseClassifierItem(classifierItem.id);
    Catalog.followTilesLinks(randomSectionTile.ruName);
    expect(ProductsList.constructor.isVisible(ProductsList.product())).toBe(true);
  });

  it('User should be able to repeat navigation through catalog', () => {
    const secondClassifierItem = entities.getRandomClassifierItem();
    const secondCategoryItem = entities.getRandomUniqueCategory(secondClassifierItem);
    const secondSubcategoryItem = entities.getRandomUniqueSubcategory(secondCategoryItem);

    Catalog.chooseClassifierItem(classifierItem.id);
    Catalog.hoverCategoryItem(categoryItem.ruName);
    Catalog.openSubcategory(subcategoryItem);
    Catalog.openCategoryFirstProductDetailsPage();
    Catalog.chooseClassifierItem(secondClassifierItem.id);
    Catalog.hoverCategoryItem(secondCategoryItem.ruName);
    Catalog.openSubcategory(secondSubcategoryItem);
    Catalog.openCategoryFirstProductDetailsPage();
    expect(ProductDetailsPage.constructor.isVisible(ProductDetailsPage.productOfferDescription))
      .toBe(true);
  });
});
