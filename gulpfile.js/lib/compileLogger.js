var gutil        = require("gulp-util")
var prettifyTime = require('./prettifyTime')
var handleErrors = require('./handleErrors')
var logConfig    = require('../config/webpack/logging')


module.exports = function(err, stats) {
	//var statColor = stats.compilation.warnings.length < 1 ? 'green' : 'yellow';
	
	if(typeof logConfig.outputConfig !== 'undefined' && logConfig.outputConfig !== null) {
		var stringStats = stats.toString(logConfig.outputConfig);
		if(stringStats.trim().length > 0) {
			gutil.log(gutil.colors.cyan("Webpack Stats: ") + "\n", stringStats);
		}
	}

	if(err) throw new gutil.PluginError("webpack", err);
	
	if(stats.compilation.errors.length > 0) {

		// stats.compilation.errors.forEach(function(error){
		// 	handleErrors(error)
		// 	statColor = 'red'
		// })

	} else {
		var compileTime = prettifyTime(stats.endTime - stats.startTime)
		
		//gutil.log(gutil.colors[statColor](stats))

		gutil.log('Compiled with', gutil.colors.cyan('webpack:development'), 'in', gutil.colors.magenta(compileTime))
	}
}
