const HtmlReporter = require('protractor-beautiful-reporter');
const { SpecReporter } = require('jasmine-spec-reporter');

exports.config = {
  baseUrl: 'https://catalog.onliner.by',
  framework: 'jasmine',
  specs: ['specs/**/*.js'],
  SELENIUM_PROMISE_MANAGER: false,
  getPageTimeout: 30000,
  jasmineNodeOpts: {
    print() {},
    defaultTimeoutInterval: 100000,
  },
  suites: {
    full: '../specs/*.js',
    search: '../specs/search.spec.js',
    navigation: '../specs/catalog-navigation.spec.js',
    list: '../specs/products-list.spec.js',
    offers: '../specs/shop-offers.spec.js',
    used: '../specs/second-offers.spec.js',
    currency: '../specs/currency-exchange.spec.js',
    weather: '../specs/weather.spec.js',
  },
  capabilities: {
    browserName: 'chrome',
    chromeOptions: {
      w3c: false,
      args: [
        '--disable-browser-side-navigation',
        '--block-new-web-contents',
        '--headless',
        '--disable-gpu',
        '--window-size=1920,1080',
      ],
    },
  },
  chromeDriver: '../node_modules/protractor/node_modules/webdriver-manager/selenium/chromedriver_84.0.4147.89-1',
  params: {
    EXPLICIT_TIMEOUT: 10000,
  },

  onPrepare: () => {
    global.EC = protractor.ExpectedConditions;

    jasmine.getEnv().addReporter(new SpecReporter({
      spec:
        {
          displayFailuresSummary: true,
          displayFailuredSpec: true,
          displaySuiteNumber: true,
          displaySpecDuration: true,
        },
    }));
    jasmine.getEnv().addReporter(new HtmlReporter({
      baseDirectory: 'reports/',
      screenshotsSubfolder: 'screenshots',
      takeScreenShotsOnlyForFailedSpecs: true,
      preserveDirectory: false,
    }).getJasmine2Reporter());
  },
};
