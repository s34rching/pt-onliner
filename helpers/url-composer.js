exports.urlComposer = (basePath, destinationPath) => {

	let domain

	switch (basePath) {
	case "catalog":
		domain = "https://catalog.onliner.by"
		break
	case "usedCars":
		domain = "https://ab.onliner.by"
		break
	case "realt":
		domain = "https://r.onliner.by/pk"
		break
	case "services":
		domain = "https://s.onliner.by/tasks"
		break
	case "used":
		domain = "https://baraholka.onliner.by"
		break
	case "forum":
		domain = "https://forum.onliner.by"
		break
	default:
		domain = "https://www.onliner.by"
		break
	}

	return `${domain}${destinationPath}`
}
