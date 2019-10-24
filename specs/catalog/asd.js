const catalog = require("../../fixtures/catalog-structure")
const _ = require("lodash")

const qwerty = catalog => {

	// catalog.electronics.categories.mobilePhonesAndAccessories.subCategories.mobilePhones

	let categories = []
	let subcategories = []
	let as = []
	let b = []
	let links = []

	_.forEach(_.values(catalog), section => {
		categories.push(section.categories)
	})

	_.forEach(categories, category => {
		subcategories.push(_.values(category))
	})

	_.forEach(_.flatten(subcategories), subcategory => {
		as.push(subcategory.subCategories)
	})

	_.forEach(as, a => {
		b.push(_.values(a))
	})

	_.forEach(_.flatten(b), bs => {
		links.push(bs.path)
	})

	console.log(links.length)
	console.log(_.uniq(links).length)
}

qwerty(catalog)
