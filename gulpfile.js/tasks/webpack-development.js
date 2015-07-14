var config       = require('../config/webpack/buildConfig')('development');
var gulp         = require('gulp-help')(require('gulp'));
var logConfig    = require('../config/webpack/logging');
var logger       = require('../lib/compileLogger');
var webpack      = require('webpack');
var browserSync  = require('browser-sync');

gulp.task('webpack:development', 'Package assets for development with Webpack and reload browserSync', function(callback) {
	var built = false;
	var lastHash = null;
	
	console.info("Webpack will " + (logConfig.stopOnErrors ? 'STOP' : 'not stop') + ' gulp on errors');

	webpack(config).watch(200, function(err, stats) {
		logger(err, stats);
		browserSync.reload();
		
		if(stats.compilation.errors.length > 0 && logConfig.stopOnErrors) {
			lastHash = null;
			
			console.log("Webpack error, exiting gulp...");
			callback(err);
			process.exit(1);
			return;
		}

		// On the initial compile, let gulp know the task is done
		if(!built) { built = true; callback() }

	})
})
