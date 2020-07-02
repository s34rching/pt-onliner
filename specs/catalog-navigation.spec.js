const HomePage = require('../page-objects/homepage');
const Catalog = require('../page-objects/catalog');
const ProductsList = require('../page-objects/products-list');
const ProductDetailsPage = require('../page-objects/product-details-page');
const entities = require('../helpers/get-entities');

describe('Onliner.by - Catalog / Navigation', () => {
  let randomClassifierItem; let randomCategoryItem; let
    randomSubcategoryItem;

  beforeAll(() => {
    randomClassifierItem = entities.getRandomClassifierItem();
    randomCategoryItem = entities.getRandomUniqueCategory(randomClassifierItem);
    randomSubcategoryItem = entities.getRandomUniqueSubcategory(randomCategoryItem);
  });

  beforeEach(() => {
    browser.waitForAngularEnabled(false);

    HomePage.goTo('/');
  });

  it('User should be able to go through catalog navigation to open product details page', () => {
    HomePage.openCatalog();
    Catalog.chooseClassifierItem(randomClassifierItem.id);
    Catalog.hoverCategoryItem(randomCategoryItem.ruName);
    Catalog.openSubcategory(randomSubcategoryItem);
    Catalog.openCategoryFirstProductDetailsPage();
    expect(ProductDetailsPage.isVisible(ProductDetailsPage.productOfferDescription)).toBe(true);
  });

  it('Catalog top bar links should lead to subcategory pages', () => {
    Catalog.followRandomCatalogBarLink();
    expect(ProductsList.isVisible(ProductsList.product())).toBe(true);
  });

  xit('Catalog main tiles should lead to subcategory pages', () => {
    const randomMainTile = entities.getRandomCatalogMainTile();

    Catalog.followTilesLinks(randomMainTile.ruName);
    expect(ProductsList.isVisible(ProductsList.product())).toBe(true);
  });

  it('Catalog section tiles should lead to subcategory pages', () => {
    const randomSectionTile = entities.getRandomSectionTile(randomClassifierItem);

    Catalog.chooseClassifierItem(randomClassifierItem.id);
    Catalog.followTilesLinks(randomSectionTile.ruName);
    expect(ProductsList.isVisible(ProductsList.product())).toBe(true);
  });

  it('User should be able to repeat navigation through catalog', () => {
    const secondRandomClassifierItem = entities.getRandomClassifierItem();
    const secondRandomCategoryItem = entities.getRandomUniqueCategory(secondRandomClassifierItem);
    const secondRandomSubcategoryItem = entities.getRandomUniqueSubcategory(secondRandomCategoryItem);

    Catalog.chooseClassifierItem(randomClassifierItem.id);
    Catalog.hoverCategoryItem(randomCategoryItem.ruName);
    Catalog.openSubcategory(randomSubcategoryItem);
    Catalog.openCategoryFirstProductDetailsPage();
    Catalog.chooseClassifierItem(secondRandomClassifierItem.id);
    Catalog.hoverCategoryItem(secondRandomCategoryItem.ruName);
    Catalog.openSubcategory(secondRandomSubcategoryItem);
    Catalog.openCategoryFirstProductDetailsPage();
    expect(ProductDetailsPage.isVisible(ProductDetailsPage.productOfferDescription)).toBe(true);
  });
});
