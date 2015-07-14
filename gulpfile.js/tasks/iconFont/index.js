var gulp               = require('gulp-help')(require('gulp'));
var iconfont           = require('gulp-iconfont');
var config             = require('../../config/iconFont');
var generateIconStyles = require('./generateIconStyles');
var handleErrors       = require('../../lib/handleErrors');

gulp.task('iconFont', 'Generate font and stylesheets from icons saved in assets/icons.', function() {
  return gulp.src(config.src)
    .pipe(iconfont(config.options))
    .on('error', handleErrors)
    .on('glyphs', generateIconStyles)
    .pipe(gulp.dest(config.dest));
});
