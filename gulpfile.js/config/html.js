var config = require('./')

module.exports = {
	watch: [config.sourceDirectory + '/views/**/*.jade', config.sourceData + '/**/*.{yml,json}', '!**/*.ract.jade'],
	src: [config.sourceDirectory + '/views/**/*.jade', '!**/*.ract.jade', '!**/{layouts,shared}/**'],
	dest: config.publicDirectory,
	data: config.sourceData + '/**/*.{yml,json}',
	swig: {
		defaults: { cache: false }
	},
	jade: {}
}
