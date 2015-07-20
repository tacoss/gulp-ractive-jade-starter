var config         = require('../../config');
var iconFontConfig = require('../../config/iconFont');
var gulp           = require('gulp-help')(require('gulp'));
var rev            = require('gulp-rev');
var path           = require('path');

// 1) Add md5 hashes to assets referenced by CSS and JS files
gulp.task('rev-assets', false, function() {

	var repeat = function(str, times) {
		//Try ES6 function
		if(typeof String.prototype.repeat == "function") return str.repeat(times);
		
		var out = str, i = 1;
		while(i < times) {
			out += str;
			i++
		}
		return out
	}

	// Ignore what we dont want to hash in this step
	var notThese = '!' + config.publicDirectory + '/**/*+(css|js|json|html)'
	var noRehash = '!' + config.publicDirectory + '/**/*-' + repeat('[a-f0-9]', 10) + '.*'
	
	// Ignore iconFont files generated from the base svg iconFont. See rev-iconfont-workaround.js
	var orThese = '!' + iconFontConfig.dest + '/' + iconFontConfig.options.fontName + '.{eot,woff,woff2,ttf}'

	return gulp.src([config.publicDirectory + '/**/*', notThese, orThese, noRehash])
		.pipe(rev())
		.pipe(gulp.dest(config.publicDirectory))
		.pipe(rev.manifest(path.join(config.publicDirectory, '/rev-manifest.json'), {merge: true}))
		.pipe(gulp.dest(''));
});
