var config = require('./')

module.exports = {
  autoprefixer: { browsers: ['last 2 version'] },
  src: config.sourceAssets + "/stylesheets/**/*.less",
  dest: config.publicAssets + '/stylesheets',
  settings: {
    paths: [
    	'assets/images'
    ]
  }
}
