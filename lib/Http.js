



var rp = require('request-promise')

var Http = {
	get: function (url, qs) {
		return rp({
			method: 'GET',
			uri   : url,
			qs    : qs,
			json  : true
		})
	}
}

module.exports = Http