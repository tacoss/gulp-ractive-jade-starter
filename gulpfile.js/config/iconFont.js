var config = require('./')
var fontConfig = require('./fonts')

module.exports = {
	name: 'Gulp Starter Icons',
	src: config.sourceAssets + '/icons/*.svg',
	dest: fontConfig.dest,

	extendedCssDest: config.sourceAssets + '/stylesheets/generated',

	formats: {
		less: {
			template: './gulpfile.js/tasks/iconFont/template.less',
			outputName: '_icons.less'
		},
		sass: {
			template: './gulpfile.js/tasks/iconFont/template.sass',
			outputName: '_icons.sass'
		}
	},
	
	fontPath: '../../assets/fonts',
	className: 'icon',
	options: {
		fontName: 'icons',
		svg: true,
		appendUnicode: true,
		normalize: false
	}
}
