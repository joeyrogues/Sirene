



var QueryBuilder = require('./QueryBuilder')
var Logger = require('./Logger')
var _ = require('underscore')

var HOST = 'https://data.opendatasoft.com/'
var API_VERSION = '1.0'

var API_META =[
{
	entity: 'Dataset', uriVar: 'datasets',
	baseQs: {}
}, {
	entity: 'Record',  uriVar: 'records',
	baseQs: { dataset: 'sirene@public' }
}]

var Sirene = API_META.reduce(function (memo, meta) {
	memo[meta.entity] = (function (meta) {
		return new QueryBuilder(`${HOST}api/${meta.uriVar}/${API_VERSION}/search`, meta.baseQs)
	})(meta)
	return memo
}, {})

module.exports = Sirene