const products = require("../fixtures/products")
const _ = require("lodash")

module.exports.getProduct = function (status, amount = 1) {

	let productsPull = []

	switch (status) {
	case "active":
		productsPull = products.available
		break
	case "out-of-stock":
		productsPull = products.outOfStock
		break
	case "off-sale":
		productsPull = products.offSale
		break
	}

	if (amount === 1) {
		return _.sample(productsPull)
	} else {
		return _.take(productsPull, amount)
	}
}
