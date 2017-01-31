'use strict'

const StockController = require('./StockController')
const {companyLookup} = require('app/data-service')

module.exports = {
  stock: new StockController(companyLookup)
}
