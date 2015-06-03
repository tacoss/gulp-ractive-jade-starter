var path            = require('path')
var paths           = require('./')
var webpack         = require('webpack')
var webpackManifest = require('../lib/webpackManifest')

module.exports = function(env) {
  var jsSrc = path.resolve(paths.sourceAssets + '/javascripts/')
  var jsDest = paths.publicAssets + '/javascripts/'
  var publicPath = 'assets/javascripts/'

  var webpackConfig = {
    context: jsSrc,

    plugins: [],

    resolve: {
      extensions: ['', '.coffee', '.litcoffee', '.js']
    },

    module: {
      loaders: [
        {
          test: /\.js$/,
          loader: 'babel-loader?stage=1',
          exclude: /node_modules/
        },
        { 
          test: /\.(lit)?coffee$/, 
          loader: "coffee-loader", 
          exclude: /node_modules/ 
        }
      ]
    }
  }

  if(env !== 'test') {
    // Karma doesn't need entry points or output settings
    webpackConfig.entry= {
      page1: [ './page1' ],
      page2: [ './page2' ],
      cup:   [ './aCupOf' ]
    }

    webpackConfig.output= {
      path: jsDest,
      filename: env === 'production' ? '[name]-[hash].js' : '[name].js',
      publicPath: publicPath
    }

    // Factor out common dependencies into a shared.js
    webpackConfig.plugins.push(
      new webpack.optimize.CommonsChunkPlugin({
        name: 'shared',
        filename: env === 'production' ? '[name]-[hash].js' : '[name].js',
      })
    )
  }

  if(env === 'development') {
    webpackConfig.devtool = 'source-map-inline'
    webpack.debug = true
  }

  if(env === 'production') {
    webpackConfig.plugins.push(
      new webpackManifest(publicPath, 'public'),
      new webpack.DefinePlugin({
        'process.env': {
          'NODE_ENV': JSON.stringify('production')
        }
      }),
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.UglifyJsPlugin(),
      new webpack.NoErrorsPlugin()
    )
  }

  return webpackConfig
}
