module.exports = {
	"env": {
		"browser": true,
		"commonjs": true,
		"es6": true,
		"protractor": true,
		"mocha": true,
		"jasmine": true
	},
	"plugins": [
		"json"
	],
	"extends": "airbnb-base",
	"globals": {
		"Atomics": "readonly",
		"SharedArrayBuffer": "readonly"
	},
	"parser": "babel-eslint",
	"parserOptions": {
		"ecmaVersion": 6,
		"sourceType": "script"
	}
};
