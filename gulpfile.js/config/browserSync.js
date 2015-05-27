var config = require('./');
var path = require('path')

module.exports = {
  server: {
    baseDir: config.publicDirectory
  },
  files: [path.join(config.publicDirectory, '/**/*.html')]
}
