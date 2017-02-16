



var Logger = require('./lib/Logger')
var Http = require('request-promise')
var Sirene = require('./lib/Sirene')

Logger.isActivated = true && false

Sirene.Record.all({
	rows: 5
})
.then(entities => {
	console.log(entities.length)
})
.catch(error => {
	console.error(error)
})
