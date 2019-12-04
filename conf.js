let SpecReporter = require("jasmine-spec-reporter").SpecReporter
let Jasmine2HtmlReporter = require("protractor-jasmine2-html-reporter")

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
		// browserName: "firefox",
		// browserName: "internet explorer" // webdriver-manager update --ie
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
		jasmine.getEnv().addReporter(new Jasmine2HtmlReporter({
			filename: "Report_",
			fileNameDateSuffix: true,
			savePath: "./reports",
			screenshotsFolder: "screenshots",
			takeScreenshots: true,
			takeScreenshotsOnlyOnFailures: true
		})
		)
	}
}

