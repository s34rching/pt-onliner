module.exports = {
	defineLocationsMessageOnPopup: showMapMessage => {

		let amount

		if (isMoreThanNineLocations(showMapMessage)) {
			amount = isMoreThanNineLocations(showMapMessage)[0]
		} else if (isOnlyLocation(showMapMessage)) {
			amount = 1
		} else {
			amount = getLiteralLocationsAmount(showMapMessage)
		}

		const singleLocationMessage = "1 обменный пункт на карте"
		const multipleLocationsMessage = amount => {
			const withEnding = (hasPluralEnding(amount)) ? "пунктов" : "пункта"

			return `${amount} обменных ${withEnding} на карте`
		}

		return (amount === 1) ? singleLocationMessage : multipleLocationsMessage(amount)
	}
}

const isOnlyLocation = message => !message.match(/^\u0412\s/)
const isMoreThanNineLocations = message => message.match(/\d+/)
const getLiteralLocationsAmount = message => message.match(/(?<=^\u0412\s)\w+(?=\s)/)
const hasPluralEnding = amount => {
	const withSingularEnding = [ "два", "три", "четыре" ]

	return !((!parseInt(amount) && withSingularEnding.includes(amount)) ||
      (amount.length === 2 && [ "1", "2" ].includes(amount[1])))
}
