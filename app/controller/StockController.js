'use strict'

const React = require('react')
const {renderToString} = require('react-dom/server')

const StockComponent = require('app/component/StockComponent')
const Stock = require('app/model/Stock')

class StockController {
  index (req, res, next) {
    const stock = new Stock({ ticker: req.query.ticker })
    res.render('stock', { markup: renderToString(<StockComponent stock={stock}/>) })
  }
}

module.exports = StockController
