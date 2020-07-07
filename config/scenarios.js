/**
 * @property {number} COMPARE_PRODUCTS_NUMBER    - The number of active products to be added to comparison list
 * @property {number} PRODUCTS_PULL              - The number of active products to be pulled from fixture file
 * @property {object} CURRENCY_AMOUNT            - Range of allowed currency amount to be used in sampler
 * @property {number} CURRENCY_AMOUNT.min        - Minimum value of allowed currency amount
 * @property {number} CURRENCY_AMOUNT.max        - Maximum value of allowed currency amount
 * @property {string} NON_EXISTENT_PRODUCT_TITLE - Title of product which will unlikely to ever exist as product title
 * @property {number} EXPECTED_PRICE_CHANGE      - Suggested price change of products due to discounts / exchange rates changes / inflation in Belarusian economics
 * @property {number} PRODUCTS_PER_PAGE          - Amount of products to be loaded per catalog page
 * @property {array}  PRODUCTS_PER_PAGE          - Most valuable currencies in Belarus
 * @property {array}  CONVERSION_DIRECTIONS      - Conversion directions which getting loaded as part of UI
 */

module.exports = {
  COMPARE_PRODUCTS_NUMBER: 2,
  PRODUCTS_PULL: 5,
  CURRENCY_AMOUNT: { min: 20, max: 10000 },
  NON_EXISTENT_PRODUCT_TITLE: 'Right now i have',
  EXPECTED_PRICE_CHANGE: 0.25,
  PRODUCTS_PER_PAGE: 30,
  CURRENCIES: ['BYN', 'RUB', 'USD', 'EUR'],
  CONVERSION_DIRECTIONS: ['usd-to-byn', 'eur-to-byn', 'rub-to-byn', 'eur-to-usd', 'eur-to-rub', 'usd-to-rub'],
};
