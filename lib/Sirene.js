



var Logger = require('./Logger')
var _ = require('underscore')
var Http = require('./Http')

var HOST = 'https://data.opendatasoft.com/'
var API_VERSION = '1.0'

var Sirene = {
	Dataset: {
		all: function (qs) {
			return Http.get(`${HOST}api/datasets/${API_VERSION}/search`, _.extend({}, qs))
			.then(response => {
				Logger.debug(response.parameters)

				return response.datasets
			})
		}
	},
	Record: {
		all: function (qs) {
			return Http.get(`${HOST}api/records/${API_VERSION}/search`, _.extend({
				dataset: 'sirene@public'
			}, qs))
			.then(response => {
				Logger.debug(response.parameters)

				return response.records
			})
		}
	}
}

module.exports = Sirene