var config = require('./');
var path = require('path');

module.exports = {
  autoprefixer: { browsers: ['last 2 version'] },
  src: config.sourceAssets + '/stylesheets/**/*.less',
  dest: config.publicAssets + '/stylesheets',
  settings: {
    paths: [
    	config.assetsDirName + '/images'
    ]
  }
}
