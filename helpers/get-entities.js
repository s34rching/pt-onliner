const catalogTree = require("../fixtures/catalog-structure")
const _ = require("lodash")

exports.getRandomClassifierItem = function() {
	return _.sample(_.values(catalogTree))
}

exports.getRandomCategory = function(classifierItem) {
	return classifierItem.categories[_.sample(_.keys(classifierItem.categories))]
}

exports.getRandomUniqueSubcategory = function(categoryItem) {
	const uniqueSubcategories = _.filter(categoryItem.subCategories, subcategory => {
		return subcategory.isUnique === true
	})

	return _.sample(uniqueSubcategories)
}

