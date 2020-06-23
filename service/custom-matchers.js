const _ = require("lodash")

module.exports = {
	closeTo() {
		return {
			compare: function(actual, expected) {
				const value = (typeof actual === "number") ? actual : actual.match(/\d+/)[0]

				const passed = isNumberInRange(value, expected)
				return {
					pass: passed,
					message: `Expected value ${expected.value} is ${(passed ? "" : "not")} close to ${value}`
				}
			}
		}
	}
}

const isNumberInRange = (actual, expected) => {
	return _.inRange(actual, (1 - expected.delta) * expected.value, (1 + expected.delta) * expected.value)
}
