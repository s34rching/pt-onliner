const SpecReporter = require("jasmine-spec-reporter").SpecReporter
const HtmlReporter = require("protractor-beautiful-reporter")

exports.config = {
	baseUrl: "https://catalog.onliner.by",
	framework: "jasmine",
	specs: ["specs/**/*.js"],
	jasmineNodeOpts: {
		print: function() {}
	},
	suites: {
		"full": "specs/*.js",
		"search": "specs/search.spec.js",
		"navigation": "specs/catalog-navigation.spec.js",
		"products-list": "specs/catalog-products-list.spec.js",
		"used": "specs/catalog-products-list-used.spec.js",
		"currency": "specs/top-nav-informers-currency-exchange.spec.js",
		"weather": "specs/top-nav-informers-weather.spec.js"
	},
	capabilities: {
		browserName: "chrome",
		"chromeOptions": {
			w3c: false,
			args: [ "--disable-browser-side-navigation", "--disable-popup-blocking" ]
		}
	},
	params: {
		EXPLICIT_TIMEOUT: 10000
	},

	onPrepare: () => {
		global.EC = protractor.ExpectedConditions

		browser.driver.manage().window().maximize()
		jasmine.getEnv().addReporter(new SpecReporter({
			spec:
				{
					displayFailuresSummary: true,
					displayFailuredSpec: true,
					displaySuiteNumber: true,
					displaySpecDuration: true
				}
		}))
		jasmine.getEnv().addReporter(new HtmlReporter({
			baseDirectory: "reports/",
			screenshotsSubfolder: "screenshots",
			takeScreenShotsOnlyForFailedSpecs: true,
			preserveDirectory: false
		}).getJasmine2Reporter())
	}
}

