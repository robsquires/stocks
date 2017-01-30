'use strict'

const React = require('react')
const {renderToString} = require('react-dom/server')

class StockController {
  index (req, res, next) {
    res.render('stock', { markup: renderToString(<div>AAPL via React</div>) })
  }
}

module.exports = StockController
