var gulp               = require('gulp');
var iconfont           = require('gulp-iconfont');
var config             = require('../../config/iconFont');
var generateIconStyles = require('./generateIconStyles');
var handleErrors       = require('../../lib/handleErrors');

gulp.task('iconFont', function() {
  return gulp.src(config.src)
    .pipe(iconfont(config.options))
    .on('error', handleErrors)
    .on('codepoints', generateIconStyles)
    .pipe(gulp.dest(config.dest));
});
