const SpecReporter = require("jasmine-spec-reporter").SpecReporter
const HtmlReporter = require("protractor-beautiful-reporter")

exports.config = {
	baseUrl: "https://catalog.onliner.by",
	framework: "jasmine",
	seleniumAddress: "http://localhost:4444/wd/hub",
	specs: ["specs/**/*.js"],
	jasmineNodeOpts: {
		print: function() {}
	},
	capabilities: {
		browserName: "chrome",
		"goog:chromeOptions": {
			w3c: false
		}
	},

	onPrepare: () => {
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

