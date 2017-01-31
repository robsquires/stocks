'use strict'

const React = require('react')
const {renderToString} = require('react-dom/server')

const StockSearch = require('app/container/StockSearch')
const Stock = require('app/model/Stock')
const UnknownStockError = require('app/error/UnknownStockError')

module.exports = function StockController (companyLookup, priceApi) {
  if (!companyLookup) {
    // typescript would assist here
    throw new TypeError('CompanyLookup service not provided')
  }

  /**
   * index action
   */
  function index (req, res, next) {
    if (!req.query.ticker) {
      return renderResponse(res, <StockSearch />)
    }

    const stock = new Stock({ ticker: req.query.ticker.toUpperCase() })
    priceApi.lookup(stock).then(doc => {
      console.log(doc)
    })

    companyLookup.find(stock)
      .then(populatedStock => {
        return renderResponse(res, <StockSearch stock={populatedStock}/>)
      })
      .catch(err => {
        if (err instanceof UnknownStockError) {
          return renderResponse(res, <StockSearch error={err}/>)
        }
      })
  }

  function renderResponse (res, component) {
    return res.render('stock', {
      markup: renderToString(component)
    })
  }

  return {
    index
  }
}
