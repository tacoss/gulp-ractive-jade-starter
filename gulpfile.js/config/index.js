var config = {}

config.publicDirectory = "./public";
config.sourceDirectory = "./src";

config.assetsDirName   = 'assets';
config.dataDirName     = 'data';

config.publicAssets    = config.publicDirectory + '/' + config.assetsDirName;
config.sourceAssets    = config.sourceDirectory + '/' + config.assetsDirName;
config.sourceData      = config.sourceDirectory + '/' + config.dataDirName;

config.autoOpenBrowser = false;

module.exports = config;
