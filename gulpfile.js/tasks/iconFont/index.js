var gulp               = require('gulp-help')(require('gulp'));
var iconfont           = require('gulp-iconfont');
var config             = require('../../config/iconFont');
var generateIconStyles = require('./generateIconStyles');
var handleErrors       = require('../../lib/handleErrors');
var svgmin             = require('gulp-svgmin');

gulp.task('iconFont', 'Generate font and stylesheets from icons saved in assets/icons.', function() {
	return gulp.src(config.src)
		.pipe(svgmin())
		.pipe(iconfont(config.options))
		.on('error', handleErrors)
		.on('glyphs', generateIconStyles)
		.pipe(gulp.dest(config.dest));
});
