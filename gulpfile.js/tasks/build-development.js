var gulp         = require('gulp-help')(require('gulp'));
var gulpSequence = require('gulp-sequence');

gulp.task('build:development', 'Process all sources, start watcher and browserSync.', function(cb) {
	gulpSequence('clean', ['fonts', 'iconFont', 'images'], ['styles', 'webpack:development', 'html'], ['watch', 'browserSync'], cb);
});
