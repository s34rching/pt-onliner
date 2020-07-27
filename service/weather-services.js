const getFormattedTemperature = (temperature) => {
  const degSymbol = '°';
  return `${temperature}${degSymbol}`;
};

module.exports = { getFormattedTemperature };
