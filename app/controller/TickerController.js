'use strict'

const React = require('react')
const {renderToString} = require('react-dom/server')

class TickerController {
  index (req, res, next) {
    res.render('ticker', { markup: renderToString(<div>AAPL via React</div>) })
  }
}

module.exports = TickerController
