const catalogTree = require("../fixtures/catalog-structure")
const _ = require("lodash")

exports.getRandomClassifierItem = function() {
	return _.sample(_.values(catalogTree.sections))
}

exports.getRandomUniqueCategory = function(classifierItem) {
	const uniqueCategoriesContainingUniqueSubCategories = _.filter(_.filter(classifierItem.categories, category => {
		return category.isUnique === true
	}), uniqueCategory => {
		return uniqueCategory.containsUnique === true
	})

	return _.sample(uniqueCategoriesContainingUniqueSubCategories)
}

exports.getRandomUniqueSubcategory = function(categoryItem) {
	const uniqueSubcategories = _.filter(categoryItem.subCategories, subcategory => {
		return subcategory.isUnique === true
	})

	return _.sample(uniqueSubcategories)
}

exports.getRandomCatalogMainTile = function() {
	return _.sample(_.filter(catalogTree.mainTiles, mainTile => {return mainTile.isUnique === true}))
}

exports.getRandomSectionTile = function(classifierItem) {
	return _.sample(_.filter(classifierItem.tiles, tile => {return tile.isUnique === true}))
}

