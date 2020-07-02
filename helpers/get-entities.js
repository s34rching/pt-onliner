const _ = require('lodash');
const catalogTree = require('../fixtures/catalog-structure');
const products = require('../fixtures/products');

module.exports = {
  getRandomClassifierItem: () => _.sample(_.take(_.values(catalogTree.sections), 2)),
  getRandomUniqueCategory: (classifierItem) => {
    const uniqueCategoriesWithUniqueSubCategories = _.filter(_.values(classifierItem.categories),
      { isUnique: true, containsUnique: true });

    return _.sample(uniqueCategoriesWithUniqueSubCategories);
  },
  getRandomUniqueSubcategory: (categoryItem) => {
    const uniqueSubcategories = _.filter(_.values(categoryItem.subCategories),
      { isUnique: true, appearsInSearch: true });

    return _.sample(uniqueSubcategories);
  },
  getRandomCatalogMainTile: () => _.sample(_.filter(catalogTree.mainTiles, { isUnique: true })),
  getRandomSectionTile: (section) => _.sample(_.filter(section.tiles, { isUnique: true })),
  getProduct: (status, amount = 1) => {
    let productsPull = [];

    switch (status) {
      case 'active':
        productsPull = products.available;
        break;
      case 'out-of-stock':
        productsPull = products.outOfStock;
        break;
      case 'off-sale':
        productsPull = products.offSale;
        break;
      default:
        productsPull = _.flatten(_.values(products));
        break;
    }

    if (amount === 1) {
      return _.sample(productsPull);
    }
    return _.take(productsPull, amount);
  },
};
