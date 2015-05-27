var config = require('./')

module.exports = {
	watch: config.sourceDirectory + '/views/**/*.jade',
	src: [config.sourceDirectory + '/views/**/*.jade', '!**/{layouts,shared}/**'],
	dest: config.publicDirectory,
	swig: {
		defaults: { cache: false }
	},
	jade: {}
}
