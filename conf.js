const _ = require("lodash")
const Chance = require("chance")
const moment = require("moment")

const chance = Chance()

exports.config = {
	baseUrl: "https://catalog.onliner.by",
	framework: "jasmine",
	seleniumAddress: "http://localhost:4444/wd/hub",
	specs: ["specs/**/*.js"],

	onPrepare: () => {
		global._ = _
		global.chance = chance
		global.moment = moment
		browser.driver.manage().window().maximize()
	}
}

