'use strict'

const React = require('react')
const {renderToString} = require('react-dom/server')

const StockSearch = require('app/container/StockSearch')
const Stock = require('app/model/Stock')
const {companyData} = require('app/data-service')

class StockController {
  index (req, res, next) {
    const stock = new Stock({ ticker: req.query.ticker.toUpperCase() })
    companyData.populate(stock)
      .then(populatedStock => {
        console.log(populatedStock)
        res.render('stock', { markup: renderToString(<StockSearch stock={populatedStock}/>) })
      })
  }
}

module.exports = StockController
