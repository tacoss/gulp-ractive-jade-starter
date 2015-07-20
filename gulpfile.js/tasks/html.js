var browserSync  = require('browser-sync');
var config       = require('../config/html');
var gulp         = require('gulp-help')(require('gulp'));
var jade         = require('gulp-jade');
var handleErrors = require('../lib/handleErrors');

var gulpData     = require('gulp-data');
var glob         = require('glob');
var path         = require('path');
var yaml         = require('js-yaml');
var fs           = require('fs');

gulp.task('html', 'Compile Jade templates and reload BrowserSync.', function() {

  return gulp.src(config.src)
  	.pipe(gulpData(function(gfile) {

  		var jadeData = {
				data: {}
			};

			glob.sync(config.data).forEach(function(file) {
				var ext = path.extname(file);
				var name = path.basename(file, ext);
				var fileData = null;

				if(ext === '.json') {
					fileData = require(path.resolve(file));
				} else if(ext === '.yml') {
					fileData = yaml.load(fs.readFileSync(file));
				} else {
					console.warn('Less task: unknown data file type: ', file);
				}

				if(fileData) jadeData.data[name] = fileData;
			});

			if(config.locals) for (var fn in config.locals) {
				jadeData[fn] = config.locals[fn];
			}

			return jadeData;

  	}))
		.pipe(jade(config.jade))
		.on('error', handleErrors)
		.pipe(gulp.dest(config.dest))
		.pipe(browserSync.reload({stream:true}));
});
