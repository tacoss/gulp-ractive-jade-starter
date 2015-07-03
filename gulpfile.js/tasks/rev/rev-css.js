var config = require('../../config');
var filter = require('gulp-filter');
var gulp   = require('gulp-help')(require('gulp'));
var minify = require('gulp-minify-css');
var rev    = require('gulp-rev');
var path   = require('path');

// 4) Rev and compress CSS files (this is done after assets, so that if a
//    referenced asset hash changes, the parent hash will change as well
gulp.task('rev-css', false, ['rev-update-references'], function(){

  return gulp.src(config.publicDirectory + '/**/*.css')
    .pipe(rev())
    .pipe(minify())
    .pipe(gulp.dest(config.publicDirectory))
    .pipe(rev.manifest(path.join(config.publicDirectory, '/rev-manifest.json'), {merge: true}))
    .pipe(gulp.dest(''));
});
