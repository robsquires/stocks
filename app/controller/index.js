'use strict'

const StockController = require('./StockController')
const { companyLookup, price } = require('app/data-service')

module.exports = {
  stock: new StockController(companyLookup, price)
}
