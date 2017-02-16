



var Logger = {
	isActivated: false,
	debug: function (text) {
		if (!this.isActivated) {
			return
		}

		console.log(text)
	}
}

module.exports = Logger