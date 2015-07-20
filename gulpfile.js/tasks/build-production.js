var gulp         = require('gulp-help')(require('gulp'));
var gulpSequence = require('gulp-sequence');

gulp.task('build:production', 'Run tests, process, optimize and package all sources for production.', function(cb) {
	process.env.NODE_ENV = 'production'
	gulpSequence('karma', 'clean', ['fonts', 'iconFont', 'images'], ['styles', 'webpack:production'], 'html', 'rev', cb);
});
