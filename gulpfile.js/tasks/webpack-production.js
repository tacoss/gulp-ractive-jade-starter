var config  = require('../config/webpack/buildConfig')('production');
var gulp    = require('gulp-help')(require('gulp'));
var logger  = require('../lib/compileLogger');
var webpack = require('webpack');

gulp.task('webpack:production', 'Package assets for production with Webpack', function(callback) {
  webpack(config, function(err, stats) {
    logger(err, stats);
    callback();
  })
})
