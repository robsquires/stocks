'use strict'

const controllers = require('./controller')

module.exports = function App (app) {
  // using ejs to render the page layout
  app.set('view engine', 'ejs')
  app.set('views', `${__dirname}/views`)

  // setup routing
  app.get('/', controllers.stock.index)
}
