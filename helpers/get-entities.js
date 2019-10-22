const catalogTree = require("../fixtures/catalog-structure")
const _ = require("lodash")

const classifierItems = []

_.forEach(_.keys(catalogTree), key => {
	classifierItems.push(catalogTree[key])
})

exports.getRandomClassifierItem = function() {
	return catalogTree[_.sample(_.keys(catalogTree))]
}

exports.getRandomCategory = function(classifierItem) {
	return classifierItem.categories[_.sample(_.keys(classifierItem.categories))]
}

exports.getRandomSubcategory = function(categoryItem) {
	return categoryItem.subCategories[_.sample(_.keys(categoryItem.subCategories))]
}

