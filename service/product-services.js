const _ = require('lodash');

const getRandomProducts = (products, amount) => _.sampleSize(products, amount);
const getProductBynPrice = (product, exchangeRate) => product.priceUsd * exchangeRate;

module.exports = { getRandomProducts, getProductBynPrice };
