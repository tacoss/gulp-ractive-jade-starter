var config = {}

config.publicDirectory = "./build";
config.sourceDirectory = "./src";

config.assetsDirName   = 'assets';

config.publicAssets    = config.publicDirectory + '/' + config.assetsDirName;
config.sourceAssets    = config.sourceDirectory + '/' + config.assetsDirName;

config.autoOpenBrowser = false;

module.exports = config;
