const getOrderOption = (option) => {
  const options = { price: 'price', new: 'date', rating: 'reviews_rating' };

  return options[`${option}`];
};

const getFilterCode = (filter) => {
  const filters = { manufacturer: 'mfr%5B0%5D', shop: 'shops%5B0%5D' };

  return filters[`${filter}`];
};

const global = {
  login: '/login',
};

const catalog = {
  cpu: '/cpu',
  used: (base) => `${base}?segment=second`,
  compare: (firstProductShortName, secondProductShortName) => `/compare/${firstProductShortName}+${secondProductShortName}`,
  ordered: (base, option, direction) => `${base}?order=${getOrderOption(option)}:${direction}`,
  filtered: (base, filter, option) => `${base}?${getFilterCode(filter)}=${option.toLowerCase()}`,
};

const products = {};

const offers = {
  all: (productKey, town = 'all') => `/products/${productKey}/positions?town=${town}`,
};

const api = {
  used: (base) => `${base}/second-offers?segment=second`,
};

module.exports = {
  catalog, products, offers, global, api,
};
