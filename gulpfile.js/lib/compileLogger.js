var gutil        = require("gulp-util")
var prettifyTime = require('./prettifyTime')
var handleErrors = require('./handleErrors')
var logConfig    = require('../config/webpack/logging')


module.exports = function(err, stats) {
	if(err) throw new gutil.PluginError("webpack", err)

	var statColor = stats.compilation.warnings.length < 1 ? 'green' : 'yellow'
	gutil.log("Webpack Stats: " + "\n", stats.toString(logConfig.outputConfig));
		
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
