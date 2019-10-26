const catalogTree = require("../fixtures/catalog-structure")
const _ = require("lodash")

exports.getRandomClassifierItem = function() {
	return _.sample(_.values(catalogTree))
}

exports.getRandomUniqueCategory = function(classifierItem) {
	const uniqueCategories = _.filter(classifierItem.categories, category => {
		return category.isUnique === true
	})

	return _.sample(uniqueCategories)
}

exports.getRandomUniqueSubcategory = function(categoryItem) {
	const uniqueSubcategories = _.filter(categoryItem.subCategories, subcategory => {
		return subcategory.isUnique === true
	})

	return _.sample(uniqueSubcategories)
}

