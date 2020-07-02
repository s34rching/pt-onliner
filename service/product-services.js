module.exports = {
  getProductBynPrice: (product, exchangeRate) => product.priceUsd * exchangeRate,
};
