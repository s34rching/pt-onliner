const _ = require('lodash');

const { CONVERSION_DIRECTIONS } = require('./constants');

module.exports = {
  stringifyToCents: (amount) => parseFloat(amount).toFixed(2).toString().replace('.', ','),
  getDirectionWithOrder: () => ({ direction: _.sample(CONVERSION_DIRECTIONS), order: _.sample(['direct', 'reverse']) }),
  getDirectionCurrencies: (direction, order) => {
    const [input, output] = _.map(direction.split('-to-'), (currency) => _.upperCase(currency));

    return (order === 'direct') ? { in: input, out: output } : { in: output, out: input };
  },
  calculateConversionResult: (currencyIn, currencyOut, amount, rate, order) => {
    if (order === 'direct') {
      if (currencyIn === 'RUB' && currencyOut === 'BYN') {
        return (parseFloat(rate.replace(',', '.')) * amount / 100).toFixed(2);
      }
      return (parseFloat(rate.replace(',', '.')) * amount).toFixed(2);
    }
    if (currencyIn === 'BYN' && currencyOut === 'RUB') {
      return ((100 / parseFloat(rate.replace(',', '.')).toFixed(4)) * amount).toFixed(2);
    }
    return ((1 / parseFloat(rate.replace(',', '.')).toFixed(4)) * amount).toFixed(2);
  },
};
