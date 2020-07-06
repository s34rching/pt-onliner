const _ = require('lodash');

const getRandomNumber = (min, max) => _.random(min, max);

module.exports = { getRandomNumber };
