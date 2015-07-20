var browserSync = require('browser-sync');
var gulp        = require('gulp-help')(require('gulp'));
var config      = require('../config/browserSync')

gulp.task('browserSync', false, function() {
	return browserSync(config);
});
