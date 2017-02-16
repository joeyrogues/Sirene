



var Logger = require('./lib/Logger')
var Sirene = require('./lib/Sirene')

Logger.isActivated = true && false

Sirene.Record.all().rows(4)
.then(entities => {
	console.log(entities.records)
})
.catch(error => {
	console.log(error)
})
