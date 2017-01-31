'use strict'

const React = require('react')
const {renderToString} = require('react-dom/server')

const StockSearch = require('app/container/StockSearch')
const Stock = require('app/model/Stock')
const {companyData} = require('app/data-service')
const UnknownStockError = require('app/error/UnknownStockError')


function render (res, component) {
  return res.render('stock', {
    markup: renderToString(component)
  })
}

class StockController {
  index (req, res, next) {
    if (!req.query.ticker) {
      return render(res, <StockSearch />)
    }

    const stock = new Stock({ ticker: req.query.ticker.toUpperCase() })

    companyData.populate(stock)
      .then(populatedStock => {
        return render(res, <StockSearch stock={populatedStock}/>)
      })
      .catch(err => {
        if (err instanceof UnknownStockError) {
          return render(res, <StockSearch error={err}/>)
        }
      })
  }
}

module.exports = StockController
