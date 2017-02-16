



var Http = require('./Http')

var Request = function (uri, baseQs) {
	this.uri = uri
	this.qs = baseQs || {}
}

Request.prototype.rows = function (rows) {
	this.qs      = this.qs      || {}
	this.qs.rows = this.qs.rows || rows

	return this
}

Request.prototype.then = function (cb, eCb) {
	return Http.get(this.uri, this.qs)
	.then(cb)
	.catch(eCb)
}

var QueryBuilder = function (uri, baseQs) {
	return {
		all: function () {
			return new Request(uri, baseQs)
		}
	}
}

module.exports = QueryBuilder