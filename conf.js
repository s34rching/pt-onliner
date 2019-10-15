exports.config = {
	baseUrl: "https://catalog.onliner.by",
	framework: "jasmine",
	seleniumAddress: "http://localhost:4444/wd/hub",
	specs: ["/spec.js"],

	onPrepare: () => {
		browser.driver.manage().window().maximize()
	},
	jasmineNodeOpts: {
		showColors: true,
		displaySpecDuration: true,
		print: () => {},
		defaultTimeoutInterval: 50000
	}
}

