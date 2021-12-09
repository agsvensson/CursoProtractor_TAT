module.exports = provideConfig => {
  const defaultConfig = {
    baseUrl: 'https://lit-chamber-61567.herokuapp.com/',
    specs: ['../specs/*.spec.js'], // test files
    onPrepare: () => {
      browser.waitForAngularEnabled(false) // When appication is not Angular
    },
    jasmineNodeOpts: { random: true } // random tests, not depends (sequence)
  }

  return Object.assign({},
    defaultConfig,
    provideConfig
  )
}
