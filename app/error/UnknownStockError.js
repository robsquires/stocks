'use strict'

const {inherits} = require('util')

/**
 * Using approach outlined here: https://gist.github.com/justmoon/15511f92e5216fa2624b
 */
function UnknownStockError (ticker) {
  Error.captureStackTrace(this, this.constructor)
  this.name = this.constructor.name
  this.ticker = ticker
  this.message = `Unknown stock: ${ticker}`
}

inherits(UnknownStockError, Error)

module.exports = UnknownStockError
