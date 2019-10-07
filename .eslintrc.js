module.exports = {
	'env': {
		'browser': true,
		'commonjs': true,
		'es6': true,
		'protractor': true,
		'mocha': true,
		'jasmine': true
	},
	'extends': 'eslint:recommended',
	'globals': {
		'Atomics': 'readonly',
		'SharedArrayBuffer': 'readonly'
	},
	'parserOptions': {
		'ecmaVersion': 2018
	},
	'rules': {
		'array-bracket-spacing': ['error', 'always',
			{
				"arraysInArrays": false, // [[ 1, 2 ], 2, [ 3, 4 ]] instead of [ [ 1, 2 ], 2, [ 3, 4 ] ]
				"objectsInArrays": false, // [{ 'foo': 'bar' }] instead of [ { 'foo': 'bar' } ]
				"singleValue": false // [0] instead of [ 0 ]
			}
		],
		'indent': [ 'error', 'tab' ],
		'quotes': [	'error', 'double' ],
		'semi': [ 'error', 'always'	],
		'no-console': ['error'],
		'no-duplicate-imports': ['error'],
		'no-multiple-empty-lines': ['error'],
		'no-var': ['error'],
		'no-trailing-spaces': ['error'],
		'object-curly-spacing': [ "error","always" ],
		'space-in-parens': [ 'error', 'never' ],
		'arrow-parens': [ 'error', 'as-needed' ],
		'eol-last': ['error', 'always']
	}
};
