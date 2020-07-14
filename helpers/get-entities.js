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
  getRandomUniqueSubcategory: (categoryItem, withProducts = false) => {
    const uniqueSubcategories = _.filter(_.values(categoryItem.subCategories),
      (subcategory) => ((withProducts)
        ? subcategory.isUnique && subcategory.appearsInSearch && subcategory.hasTaggedProducts
        : subcategory.isUnique && subcategory.appearsInSearch));

    return _.sample(uniqueSubcategories);
  },
  getRandomCatalogMainTile: () => _.sample(_.filter(catalogTree.mainTiles, { isUnique: true })),
  getRandomSectionTile: (section) => _.sample(_.filter(section.tiles, { isUnique: true })),
  getProduct: (status, amount = 1) => {
    let productsPull = [];

    switch (status) {
      case 'active':
        productsPull = products.active;
        break;
      case 'outOfStock':
        productsPull = products.outOfStock;
        break;
      case 'offSale':
        productsPull = products.offSale;
        break;
      default:
        productsPull = _.flatten(_.values(products));
        break;
    }

    return (amount === 1) ? _.sample(productsPull) : _.take(productsPull, amount);
  },
};
