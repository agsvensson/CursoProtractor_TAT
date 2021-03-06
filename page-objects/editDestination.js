const HeaderComponent = require('./components/header')
const DestinationComponent = require('./components/destination')
const FormComponent = require('./components/form')

const randomNumberBetweenOneAnd = require('../utils/randomNumberBetweenOneAndN')

class EditDestination {
  constructor () {
    this.self = new DestinationComponent()
    this.form = new FormComponent()
    this.header = new HeaderComponent()
  }

  visit () {
    browser.get(`/destinations/${randomNumberBetweenOneAnd(15)}/edit`)
  }
}

module.exports = EditDestination
