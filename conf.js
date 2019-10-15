exports.config = {
	baseUrl: "https://catalog.onliner.by",
	framework: "jasmine",
	seleniumAddress: "http://localhost:4444/wd/hub",
	specs: ["specs/**/*.js"],

	onPrepare: () => {
		browser.driver.manage().window().maximize()
	}
}
