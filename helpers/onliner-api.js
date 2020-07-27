const rp = require('request-promise');

const getWeather = (cityId = '') => rp(`https://www.onliner.by/sdapi/pogoda/api/forecast/${cityId}`);
const getCurrencyExchangeRates = (query = '/bestrate?currency=USD&type=nbrb') => rp(`https://www.onliner.by/sdapi/kurs/api/${query}`);
const getProducts = (query) => rp(`https://catalog.onliner.by/sdapi/catalog.api/search${query}`);
const getOffers = (query) => rp(`https://catalog.onliner.by/sdapi/shop.api${query}`);

module.exports = {
  getWeather,
  getCurrencyExchangeRates,
  getProducts,
  getOffers,
};
