function closeTo() {
  return {
    compare(actual, expected) {
      const value = (typeof actual === 'number') ? actual : actual.match(/\d+/)[0];

      const passed = (Math.abs(value - expected.value) <= value * expected.delta);
      return {
        pass: passed,
        message: `Expected value ${expected.value} is ${(passed ? '' : 'not')} close to ${value}`,
      };
    },
  };
}

module.exports = { closeTo };
