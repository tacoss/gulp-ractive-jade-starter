var gulp         = require('gulp-help')(require('gulp'));
var config       = require('../../config');
var revReplace = require('gulp-rev-replace')

// 5) Update asset references in HTML
gulp.task('update-html', false, ['rev-css'], function(){
  var manifest = gulp.src(config.publicDirectory + "/rev-manifest.json");
  return gulp.src(config.publicDirectory + '/**/*.html')
    .pipe(revReplace({manifest: manifest}))
    .pipe(gulp.dest(config.publicDirectory));
});
