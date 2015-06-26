
module.exports = function(env) {
	return {
		buildConfig: require('./buildConfig')(env),
		logging: require('./logging')
	}
}
