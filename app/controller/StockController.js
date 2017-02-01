'use strict'

const React = require('react')
const {renderToString} = require('react-dom/server')

const StockSearch = require('app/container/StockSearch')
const Stock = require('app/model/Stock')
const UnknownStockError = require('app/error/UnknownStockError')

module.exports = function StockController (companyLookup, priceApi, newsApi) {
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

    companyLookup.find(stock)
      .then(stock => priceApi.lookup(stock))
      .then(stock => newsApi.lookup(stock))
      .then(populatedStock => {
        renderResponse(res, <StockSearch stock={populatedStock}/>)
      })
      .catch(err => {
        return renderResponse(
          res.status(err instanceof UnknownStockError ? 200 : 500),
          <StockSearch error={err}/>
        )
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
