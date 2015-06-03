var gulp = require('gulp-help')(require('gulp'));
var del = require('del');
var config = require('../config');
var htmlConfig = require('../config/html');
var iconFontConfig = require('../config/iconFont');

gulp.task('clean', 'Clean all generated files.', function (cb) {
  del([
    config.publicAssets,
    htmlConfig.dest,
    iconFontConfig.extendedCssDest
  ], cb);
});
