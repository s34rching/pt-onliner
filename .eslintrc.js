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
	"extends": "eslint:recommended",
	"globals": {
		"Atomics": "readonly",
		"SharedArrayBuffer": "readonly"
	},
	"parser": "babel-eslint",
	"parserOptions": {
		"ecmaVersion": 6,
		"sourceType": "script"
	},
	"rules": {
		"array-bracket-spacing": ["error", "always",
			{
				"arraysInArrays": false, // [[ 1, 2 ], 2, [ 3, 4 ]] instead of [ [ 1, 2 ], 2, [ 3, 4 ] ]
				"objectsInArrays": false, // [{ 'foo': 'bar' }] instead of [ { 'foo': 'bar' } ]
				"singleValue": false // [0] instead of [ 0 ]
			}
		],
		"arrow-parens": [ "error", "as-needed" ], // Arrow functions can omit parentheses when they have exactly one
		// parameter
		"eol-last": ["error", "always"], // require newlines at the end of files
		"indent": [ "error", "tab" ], // use 'tab' for indent
		"no-console": ["error"], // Error on existing console.log()
		"no-duplicate-imports": ["error"], // Error on duplicating imports of modules
		"no-multiple-empty-lines": ["error"], // Allows the only empty line between code blocks
		"no-trailing-spaces": ["error"], // Cleans up unneeded spacing
		"no-var": ["error"], // Use 'const' and 'let instead'
		"no-unused-expressions": 0, // disallow unused expressions
		"object-curly-spacing": [ "error", "always" ], // { User, AdminUser } instead of {User, AdminUser}
		"space-in-parens": [ "error", "never" ], // foo('bar') instead of foo( 'bar' )
		"semi": [ "error", "never"	], // do not use semicolons
		"quotes": [	"error", "double" ], // use double quotes by default
	}
};
