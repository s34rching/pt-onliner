const rp = require('request-promise');

module.exports = {
  getWeather(cityId = '') {
    return rp(`https://www.onliner.by/sdapi/pogoda/api/forecast/${cityId}`);
  },
  getCurrencyExchangeRates(query = '/bestrate?currency=USD&type=nbrb') {
    return rp(`https://www.onliner.by/sdapi/kurs/api/${query}`);
  },
  getProducts(query) {
    return rp(`https://catalog.onliner.by/sdapi/catalog.api/search${query}`);
  },
  getOffers(query) {
    return rp(`https://catalog.onliner.by/sdapi/shop.api${query}`);
  },
};
