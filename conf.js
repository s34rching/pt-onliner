let SpecReporter = require("jasmine-spec-reporter").SpecReporter

exports.config = {
	baseUrl: "https://catalog.onliner.by",
	framework: "jasmine",
	seleniumAddress: "http://localhost:4444/wd/hub",
	specs: ["specs/**/*.js"],
	jasmineNodeOpts: {
		print: function() {}
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
	}
}

