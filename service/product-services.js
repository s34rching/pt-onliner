const _ = require('lodash');

module.exports = {
  getRandomProducts: (products, amount) => _.sampleSize(products, amount),
  getProductBynPrice: (product, exchangeRate) => product.priceUsd * exchangeRate,
};
