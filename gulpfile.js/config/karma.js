var config = require('./')
var karmaWebpack = require('karma-webpack')
var webpackConfig = require('./webpack/buildConfig')('test')
var webpackMiddlewareconfig = require('./webpack/middlewareConfig')
var webpackLoggingConfig = require('./webpack/logging')
var path = require('path')

var preprocessors = {}
preprocessors['javascripts/**/__tests__/*'] = ['webpack']

module.exports = {
	frameworks: ['mocha', 'sinon-chai'],
	basePath: config.sourceAssets,
	files: [
		'javascripts/**/__tests__/*.@(js|coffee)'
	],
	preprocessors: preprocessors,
	webpack: webpackConfig,
	//webpackMiddleware: webpackMiddlewareconfig,
	webpackLogging: webpackLoggingConfig.logLevel,
	singleRun: process.env.TRAVIS_CI === 'true',
	reporters: ['nyan'],
	browsers: [(process.env.TRAVIS_CI === 'true'? 'Firefox' : 'Chrome')]
}
