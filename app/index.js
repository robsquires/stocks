'use strict'

require('app-module-path').addPath(`${__dirname}/../`)

const controllers = require('app/services/controller')

module.exports = function App (app) {
  // using ejs to render the page layout
  app.set('view engine', 'ejs')
  app.set('views', `${__dirname}/views`)

  // setup routing
  app.get('/', controllers.stock.index)
}
