var config = require('./es6')

delete config.env.es6
delete config.ecmaFeatures.modules

config.rules['func-names'] = 0
config.rules['no-var'] = 0
config.rules['one-var'] = 0
config.rules['strict'] = [ 2, 'global' ]

module.exports = config
