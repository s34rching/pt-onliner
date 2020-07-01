const catalogTree = require("../fixtures/catalog-structure")
const products = require("../fixtures/products")
const _ = require("lodash")

exports.getRandomClassifierItem = function() {
	return _.sample(_.take(_.values(catalogTree.sections), 2))
}

exports.getRandomUniqueCategory = function(classifierItem) {
	const uniqueCategoriesContainingUniqueSubCategories = _.filter(_.values(classifierItem.categories),
		{ isUnique: true, containsUnique: true })

	return _.sample(uniqueCategoriesContainingUniqueSubCategories)
}

exports.getRandomUniqueSubcategory = function(categoryItem) {
	const uniqueSubcategories = _.filter(_.values(categoryItem.subCategories),
		{ isUnique: true, appearsInSearch: true })

	return _.sample(uniqueSubcategories)
}

exports.getRandomCatalogMainTile = function() {
	return _.sample(_.filter(catalogTree.mainTiles, { isUnique: true }))
}

exports.getRandomSectionTile = function(classifierItem) {
	return _.sample(_.filter(classifierItem.tiles, { isUnique: true }))
}

exports.getProduct = function (status, amount = 1) {

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
	default:
		productsPull = _.flatten(_.values(products))
		break
	}

	if (amount === 1) {
		return _.sample(productsPull)
	} else {
		return _.take(productsPull, amount)
	}
}
