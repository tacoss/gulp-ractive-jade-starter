var config = require('./');
var path   = require('path');
var args   = require('yargs').argv;

module.exports = {
	server: {
		baseDir: config.publicDirectory
	},
	files: [path.join(config.publicDirectory, '/**/*.html')],
	open: config.autoOpenBrowser,
	port: args.port || args.p || process.env.PORT || 3000
}
