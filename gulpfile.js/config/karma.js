var config = require('./')
var karmaWebpack = require('karma-webpack')
var webpackConfig = require('./webpack')('test')
var path = require('path')

var preprocessors = {}
preprocessors[path.join(config.sourceDirectory, 'assets/javascripts/**/__tests__/*')] = ['webpack']

module.exports = {
  frameworks: ['mocha', 'sinon-chai'],
  files: [
    path.join(config.sourceDirectory, 'assets/javascripts/**/__tests__/*')
  ],
  preprocessors: preprocessors,
  webpack: webpackConfig,
  singleRun: process.env.TRAVIS_CI === 'true',
  reporters: ['nyan'],
  browsers: [(process.env.TRAVIS_CI === 'true'? 'Firefox' : 'Chrome')]
}
