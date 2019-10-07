exports.config = {
	baseUrl: "https://www.onliner.by",
	framework: "jasmine",
	seleniumAddress: "http://localhost:4444/wd/hub",
	specs: ["specs/products-search/*.js"]
};
