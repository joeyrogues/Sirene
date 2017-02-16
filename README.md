# Sirene

Module NodeJs pour communiquer avec l'API OpenDatasoft

Pour plus d'information https://data.opendatasoft.com/explore/dataset/sirene@public/

Example d'usage :
```
var Sirene = require('./lib/Sirene')

Sirene.Record.all({
	rows: 5
})
.then(entities => {
	console.log(entities.length)
})
.catch(error => {
	console.error(error)
})
```