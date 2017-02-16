



var Logger = require('./Logger')
var _ = require('underscore')
var Http = require('./Http')

var HOST = 'https://data.opendatasoft.com/'
var API_VERSION = '1.0'

var API_META =[
{
	entity: 'Dataset',
	uriVar: 'datasets',
	baseQs: {
		dataset: 'sirene@public'
	}
}, {
	entity: 'Record',
	uriVar: 'records',
	baseQs: {}
}]

var Sirene = {}

var _forge = function (meta) {
	var uriVar = meta.uriVar
	var baseQs = meta.baseQs

	return {
		all: function (qs) {
			return Http.get(`${HOST}api/${uriVar}/${API_VERSION}/search`, _.extend(baseQs, qs))
			.then(response => {
				Logger.debug(response.parameters)

				return response[uriVar]
			})
		}
	}
}

var Sirene = API_META.reduce(function (memo, meta) {
	memo[meta.entity] = _forge(meta)
	return memo
}, {})

module.exports = Sirene