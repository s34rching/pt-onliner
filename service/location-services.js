module.exports = {
	getLocationsAmount: showMapMessage => {
		let textValue
		const matches = { 2: "двух", 3: "трех", 4: "четырех", 5: "пяти", 6: "шести", 7: "семи", 8: "восьми", 9: "девяти" }

		if (isMoreThanNineLocations(showMapMessage)) {
			textValue = isMoreThanNineLocations(showMapMessage)[0]
		} else if (isOnlyLocation(showMapMessage)) {
			textValue = 1
		} else {
			textValue = getLiteralLocationsAmount(showMapMessage)
		}

		if (textValue === 1 || parseInt(textValue)) {
			return parseInt(textValue)
		}

		return parseInt(getKeyByValue(matches, textValue))
	},
	defineLocationsMessageOnPopup: locationsAmount => {
		const singleLocationMessage = /((\w+,\s)|(\w+\s.+,\s))/
		const multipleLocationsMessage = amount => {
			const withEnding = (hasPluralEnding(amount)) ? "пунктов" : "пункта"

			return `${amount} обменных ${withEnding} на карте`
		}

		return (locationsAmount === 1) ? singleLocationMessage : multipleLocationsMessage(locationsAmount)
	}
}

const isOnlyLocation = message => !message.match(/^\u0412\s/)
const isMoreThanNineLocations = message => message.match(/\d+/)
const getLiteralLocationsAmount = message => message.match(/(?<=^\u0412\s).+(?=\s)/)[0]
const hasPluralEnding = amount => {
	const withSingularEnding = [ 2, 3, 4 ]

	return !((withSingularEnding.includes(amount)) || ([ 1, 2 ].includes(amount % 10) && ![ 11, 12 ].includes(amount)))
}
const getKeyByValue = (object, value) => {
	return Object.keys(object).find(key => object[key] === value.split(" ")[0])
}
