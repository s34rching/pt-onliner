module.exports = {
  getFormattedTemperature: (temperature) => {
    const degSymbol = '°';
    return `${temperature}${degSymbol}`;
  },
};
