var config    = require('../config/webpack/buildConfig')('production');
var logConfig = require('../config/webpack/logging');
var gulp      = require('gulp-help')(require('gulp'));
var logger    = require('../lib/compileLogger');
var webpack   = require('webpack');

gulp.task('webpack:production', 'Package assets for production with Webpack', function(callback) {
  webpack(config, function(err, stats) {
    logger(err, stats);

		if(stats.compilation.errors.length > 0) {
			callback(err);
			return;
		}
    callback();
  });
})
