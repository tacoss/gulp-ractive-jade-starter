var browserSync  = require('browser-sync');
var config       = require('../config/html');
var gulp         = require('gulp-help')(require('gulp'));
var jade         = require('gulp-jade');
var handleErrors = require('../lib/handleErrors');

gulp.task('html', 'Compile Jade templates and reload BrowserSync.', function() {
  return gulp.src(config.src)
	.pipe(jade(config.jade))
	.on('error', handleErrors)
	.pipe(gulp.dest(config.dest))
	.pipe(browserSync.reload({stream:true}));
});
