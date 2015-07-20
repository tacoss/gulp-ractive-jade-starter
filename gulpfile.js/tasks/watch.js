var gulp     = require('gulp-help')(require('gulp'));
var html     = require('../config/html');
var iconFont = require('../config/iconFont');
var images   = require('../config/images');
var styles   = require('../config/less');  //TODO: Fix this
var fonts    = require('../config/fonts');
var watch    = require('gulp-watch');

gulp.task('watch', 'Watch for sourcefile changes and start BrowserSync', ['browserSync'], function() {
	watch(images.src, function() { gulp.start('images'); });
	watch(styles.src, function() { gulp.start('styles'); });
	watch(iconFont.src, function() { gulp.start('iconFont'); });
	watch(fonts.src, function() { gulp.start('fonts'); });
	watch(html.watch, function() { gulp.start('html'); });
});
