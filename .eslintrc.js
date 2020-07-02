module.exports = {
  env: {
    amd: true,
    browser: true,
    node: true,
    commonjs: true,
    es6: true,
    protractor: true,
    mocha: true,
    jasmine: true,
  },
  plugins: [
    'json',
  ],
  extends: 'airbnb-base',
  globals: {
    EC: 'readonly',
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'script',
  },
};
