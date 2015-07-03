var path            = require('path')
var paths           = require('../')
var webpack         = require('webpack')
var webpackManifest = require('../../lib/webpackManifest')
var logOptions      = require('./logging')

module.exports = function(env) {
	
	//Absolute paths
	var sourcePath = path.resolve(paths.sourceDirectory);
	
	//Relative to public/source directory
	var jsDir = path.join(paths.assetsDirName, '/javascripts/');
	var jsDotDir = './' + jsDir;
	
	//Relative to project root
	var sourceJsDir = path.join(paths.sourceDirectory, jsDir);
	var destJsDir = path.join(paths.publicDirectory, jsDir);
	var ractiveDir = path.join(paths.sourceDirectory, '/ractive/');

	var webpackConfig = {
		context: sourcePath,

		plugins: [],

		resolve: {
			extensions: ['', '.coffee', '.litcoffee', '.js'],
			root: [
				path.resolve(sourceJsDir),
				path.resolve(ractiveDir, 'templates/')
			]
		},
		
		stats: logOptions.outputConfig,

		module: {
			loaders: [
				{
					test: /\.es6\.js$/,
					loader: 'babel',
					exclude: /node_modules/
				},
				{ 
					test: /\.(lit)?coffee$/, 
					loader: "coffee", 
					exclude: /node_modules/
				},
				{
					test: /\.ract\.jade$/,
					loaders: ['ractive', 'jade-html'],
					exclude: /node_modules/
				},
				{
					test: /\.ract$/,
					loader: 'ractive',
					exclude: /node_modules/
				}
			]
		}
	}

	if(env !== 'test') {
		// Karma doesn't need entry points or output settings
		webpackConfig.entry = {
			page1: [ 'page1' ],
			page2: [ 'page2' ],
			cup:   [ 'aCupOf' ]
		}

		webpackConfig.output= {
			path: destJsDir,
			filename: env === 'production' ? '[name]-[hash].js' : '[name].js',
			publicPath: jsDotDir
		}

		// Factor out common dependencies into a shared.js
		webpackConfig.plugins.push(
			new webpack.optimize.CommonsChunkPlugin({
				name: 'shared',
				filename: env === 'production' ? '[name]-[hash].js' : '[name].js',
			})
		)
	}

	if(env === 'development') {
		webpackConfig.devtool = 'source-map-inline'
		webpack.debug = true
	}

	if(env === 'production') {
		webpackConfig.plugins.push(
			new webpackManifest(jsDir, paths.publicDirectory),
			new webpack.DefinePlugin({
				'process.env': {
					'NODE_ENV': JSON.stringify('production')
				}
			}),
			new webpack.optimize.DedupePlugin(),
			new webpack.optimize.UglifyJsPlugin(),
			new webpack.NoErrorsPlugin()
		)
	}

	return webpackConfig
}
