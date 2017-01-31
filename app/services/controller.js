'use strict'

const StockController = require('app/controller/StockController')
const { companyLookup, price, news } = require('./repository')

/**
 * public services
 */
module.exports = {
  stock: new StockController(companyLookup, price, news)
}
