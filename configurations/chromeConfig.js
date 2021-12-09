const configCreator = require('../utils/ConfigCreator')

module.exports.config = configCreator({
  capabilities: {
    browserName: 'chrome',
    chromeOptions: {
      args: ['--headless']
    }
  }
})
