var assign       = require('object-assign');
var config       = require('../config/webpack')('development');
var gulp         = require('gulp-help')(require('gulp'));
var logger       = require('../lib/compileLogger');
var webpack      = require('webpack');
var browserSync  = require('browser-sync');

gulp.task('webpack:development', 'Package assets for development with Webpack and reload browserSync', function(callback) {
  var built = false;

  webpack(config).watch(200, function(err, stats) {
    logger(err, stats);
    browserSync.reload();
    // On the initial compile, let gulp know the task is done
    if(!built) { built = true; callback() }
  })
})
