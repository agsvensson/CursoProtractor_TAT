const configCreator = require('../utils/ConfigCreator')

module.exports.config = configCreator({
  capabilities: {
    browserName: 'firefox',
    'moz:firefoxOptions': {
      args: ['--headless']
    }
  }
})
