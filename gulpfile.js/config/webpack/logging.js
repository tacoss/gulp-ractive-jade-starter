
var config = require('../'),
		_ = require('lodash');

var logLevel = 'normal',
		stopOnErrors = false;

// ----------------------------------

var webpackLoggingOptions = {};
if(logLevel === true) logLevel = 'normal';
else if(logLevel === false) logLevel = 'none';

if(_.isString(logLevel)) {
	var wo = logLevel.toLowerCase();
	if(wo === 'none') {
		webpackLoggingOptions = null;
	} else {
		webpackLoggingOptions = {
			//Available options: https://github.com/webpack/webpack/blob/master/lib/Stats.js#L26-L40
			assets: wo === 'verbose',
			version: wo === 'verbose',
			timings: wo !== 'errors-only' && wo !== 'minimal',
			hash: wo !== 'errors-only' && wo !== 'minimal',
			chunks: wo !== 'errors-only',
			chunkModules: wo === 'verbose',
			errorDetails: wo !== 'errors-only' && wo !== 'minimal',
		  reasons: wo === 'verbose',
			colors: true
		};
	}
} else if(_.isPlainObject(logLevel)) {
	webpackLoggingOptions = logLevel;
}

module.exports = {

	logLevel: logLevel,
	stopOnErrors: stopOnErrors,
	outputConfig: webpackLoggingOptions
	
}
