var gulp       = require('gulp-help')(require('gulp'));
var express    = require('express');
var config     = require('../config/server');
var rootConfig = require('../config');
var gutil      = require('gulp-util');
var compress   = require('compression');
var logger     = require('morgan');
var open       = require('open');

gulp.task('server', 'Start a webserver pointing at ' + rootConfig.publicDirectory.substr(2) + '/.', [], function() {
  var url = 'http://localhost:' + config.port;

  express()
    .use(compress())
    .use(logger(config.logLevel))
    .use('/', express.static(config.root, config.staticOptions))
    .listen(config.port)

  gutil.log('production server started on ' + gutil.colors.green(url));
  if(rootConfig.autoOpenBrowser) open(url);
}, {
	options: {
		'port': 'The port that the webserver should run in.  Default is 3000.'
	}
});
