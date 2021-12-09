const HeaderComponent = require('./components/header')
const TagsComponent = require('./components/tags')

class Home {
  constructor () {
    this.tags = new TagsComponent()
    this.header = new HeaderComponent()
  }

  visit () {
    browser.get('/')
  }
}

module.exports = Home
