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

  beforeEach(async () => {
    browser.waitForAngularEnabled(false);

    await HomePage.constructor.goTo('/');
  });

  it('User should be able to go through catalog navigation to open product details page', async () => {
    await Catalog.chooseClassifierItem(classifierItem.id);
    await Catalog.hoverCategoryItem(categoryItem.ruName);
    await Catalog.openSubcategory(subcategoryItem);
    await Catalog.openCategoryFirstProductDetailsPage();
    expect(await ProductDetailsPage.constructor
      .isVisible(ProductDetailsPage.productOfferDescription)).toBe(true);
  });

  it('Catalog top bar links should lead to subcategory pages', async () => {
    await Catalog.followRandomCatalogBarLink();
    expect(await ProductsList.constructor.isVisible(ProductsList.product())).toBe(true);
  });

  xit('Catalog main tiles should lead to subcategory pages', async () => {
    const randomMainTile = entities.getRandomCatalogMainTile();

    await Catalog.followTilesLinks(randomMainTile.ruName);
    expect(await ProductsList.constructor.isVisible(ProductsList.product())).toBe(true);
  });

  it('Catalog section tiles should lead to subcategory pages', async () => {
    const randomSectionTile = entities.getRandomSectionTile(classifierItem);
    console.log(randomSectionTile.ruName);

    await Catalog.chooseClassifierItem(classifierItem.id);
    await Catalog.followTilesLinks(randomSectionTile);
    expect(await ProductsList.constructor.isVisible(ProductsList.product())).toBe(true);
  });

  it('User should be able to repeat navigation through catalog', async () => {
    const secondClassifierItem = entities.getRandomClassifierItem();
    const secondCategoryItem = entities.getRandomUniqueCategory(secondClassifierItem);
    const secondSubcategoryItem = entities.getRandomUniqueSubcategory(secondCategoryItem);

    await Catalog.chooseClassifierItem(classifierItem.id);
    await Catalog.hoverCategoryItem(categoryItem.ruName);
    await Catalog.openSubcategory(subcategoryItem);
    await Catalog.openCategoryFirstProductDetailsPage();
    await Catalog.chooseClassifierItem(secondClassifierItem.id);
    await Catalog.hoverCategoryItem(secondCategoryItem.ruName);
    await Catalog.openSubcategory(secondSubcategoryItem);
    await Catalog.openCategoryFirstProductDetailsPage();
    expect(await ProductDetailsPage.constructor
      .isVisible(ProductDetailsPage.productOfferDescription)).toBe(true);
  });
});
