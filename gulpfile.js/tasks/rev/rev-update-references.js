var config       = require('../../config');
var gulp         = require('gulp-help')(require('gulp'));
var revReplace   = require('gulp-rev-replace')

// 3) Update asset references with reved filenames in compiled css + js
gulp.task('rev-update-references', false, ['rev-iconfont-workaround'], function(){
  var manifest = gulp.src(config.publicDirectory + "/rev-manifest.json");

  return gulp.src(config.publicDirectory + '/**/**.{css,js}')
    .pipe(revReplace({manifest: manifest}))
    .pipe(gulp.dest(config.publicDirectory));
});
